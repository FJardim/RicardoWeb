import { useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Modal from "../componentes/Modal/Modal";
import usePlans from "../hooks/usePlans";
import useRecipes from "../hooks/useRecipes";
import AsyncSelect from 'react-select/async';

const OverviewUser = () => {

    const [addPlanData, setAddPlanData] = useState({
        start: '',
        planId: ''
    });

    const [addRecipeData, setAddRecipeData] = useState({
        day: '',
        planId: ''
    });

    const [showPlansModal, setShowPlansModal] = useState(false);

    const [showRecipesModal, setShowRecipesModal] = useState(false);

    const [plansFilters, setPlansFilters] = useState({
        page: 1,
        perPage: 10
    });

    const [recipesFilters, setRecipesFilters] = useState({
        page: 1,
        perPage: 10,
        name: '',
        categoryIds: []
    });

    const [{ plans, numberOfPages: plansPages, loading: loadingPlans }, getPlans] = usePlans({ params: { ...plansFilters }, options: { useCache: false } });

    const [{ recipes, total, numberOfPages: recipesPages, loading: loadingRecipes }, getRecipes] = useRecipes({ params: { ...recipesFilters }, options: { useCache: false } });

    const [currentEvents, setCurrentEvents] = useState([
        { start: '2022-07-05', end: '2022-07-12', title: 'Adelgaza en 12 dias' },
        { start: '2022-07-05', end: '2022-07-12', title: 'Adelgaza en 5 dias' },
        { start: '2022-07-07 07:00:00', end: '2022-07-07 10:00:00', title: 'Arepa Frita' },
        { start: '2022-07-07 18:00:00', end: '2022-07-07 21:00:00', title: 'Tacos al pastor' },
        { start: '2022-07-01 12:00:00', end: '2022-07-01 15:00:00', title: 'Arroz Chino' },
        { start: '2022-07-02 00:00:00', end: '2022-07-02 02:00:00', title: 'Arepa Frita' },
    ])

    const handleLoadPlansOptions = async (e) => {
        const getDataPlans = await getPlans({ params: { name: e, perPage: 100, page: 1 } });
        console.log(getDataPlans);
        const plansMapped = getDataPlans?.data?.results?.map((currentPlan) => {
            return {
                label: `${currentPlan?.name} - ${currentPlan?.seller?.name}`,
                value: currentPlan?.id
            }
        });
        return plansMapped;
    }

    const handleLoadRecipesOptions = async (e) => {
        const getDataRecipes = await getRecipes({ params: { name: e, perPage: 100, page: 1 } });
        console.log(getDataRecipes);
        const recipesMapped = getDataRecipes?.data?.results?.map((currentRecipe) => {
            return {
                label: `${currentRecipe?.name} - ${currentRecipe?.seller?.name}`,
                value: currentRecipe?.id
            }
        });
        return recipesMapped;
    }

    const handleChangePlan = (e) => {
        setAddPlanData((oldPlanData) => {
            return {
                ...oldPlanData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleChangeRecipe = (e) => {
        setAddRecipeData((oldRecipeData) => {
            return {
                ...oldRecipeData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmitPlan = (e) => {
        e?.preventDefault();
        console.log(addPlanData);
    }

    const handleSubmitRecipe = (e) => {
        e?.preventDefault();
        console.log(addRecipeData);
    }

    return (
        <div className="container p-20 h-full w-full mb-20">
            <p className="text-4xl font-bold text-black ">Overview</p>
            <div className="flex justify-end space-x-8">
                <button onClick={() => setShowPlansModal(true)} className="bg-main px-5 py-2 rounded text-white mb-2">
                    Add Plan
                </button>
                <button onClick={() => setShowRecipesModal(true)} className="bg-main px-5 py-2 rounded text-white mb-2">
                    Add Recipe
                </button>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={currentEvents}
            />
            <Modal show={showPlansModal} onClose={() => setShowPlansModal(false)}>
                <h1 className="text-center text-4xl font-semibold mb-4">Plans</h1>
                <form onSubmit={handleSubmitPlan}>
                    <div className="md:flex">
                        <div className="w-full mb-4 md:mr-8 md:w-1/2">
                            <p>Select the plan:</p>
                            <AsyncSelect
                                defaultOptions={plans?.map((plan) => {
                                    return {
                                        value: plan?.id,
                                        label: `${plan?.name} - ${plan?.seller?.name}`
                                    }
                                })}
                                onChange={(e) => { handleChangePlan({ target: { value: e?.value, name: 'planId' } }) }}
                                loadOptions={handleLoadPlansOptions}
                                placeholder='Name of the plan...'
                            />
                        </div>
                        <div className="w-full md:ml-8 md:w-1/2">
                            <p>Start from:</p>
                            <input
                                value={addPlanData?.start}
                                onChange={handleChangePlan}
                                name="start"
                                type="date"
                                className="rounded-lg border-gray-300 w-full p-0 h-9"
                            />
                        </div>
                    </div>
                    <div className="text-center mt-8 space-y-4 space-x-4 text-center">
                        <button type="button" onClick={() => setShowPlansModal(false)} className="px-8 bg-main rounded py-2 hover:text-white">
                            Cancel
                        </button>
                        <button className="px-8 bg-main rounded py-2 hover:text-white">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>

            <Modal show={showRecipesModal} onClose={() => setShowRecipesModal(false)}>
                <h1 className="text-center text-4xl font-semibold mb-4">Recipes</h1>
                <form onSubmit={handleSubmitRecipe}>
                    <div className="md:flex">
                        <div className="w-full mb-4 md:mr-8 md:w-1/2">
                            <p>Select the recipe:</p>
                            <AsyncSelect
                                defaultOptions={recipes?.map((recipe) => {
                                    return {
                                        value: recipe?.id,
                                        label: `${recipe?.name} - ${recipe?.seller?.name}`
                                    }
                                })}
                                onChange={(e) => { handleChangePlan({ target: { value: e?.value, name: 'recipeId' } }) }}
                                loadOptions={handleLoadRecipesOptions}
                                placeholder='Name of the recipe...'
                            />
                        </div>
                        <div className="w-full md:ml-8 md:w-1/2">
                            <p>Select the day:</p>
                            <input
                                value={addRecipeData?.start}
                                onChange={handleChangeRecipe}
                                name="start"
                                type="date"
                                className="rounded-lg border-gray-300 w-full p-0 h-9"
                            />
                        </div>
                    </div>
                    <div className="text-center mt-8 space-y-4 space-x-4 text-center">
                        <button type="button" onClick={() => setShowRecipesModal(false)} className="px-8 bg-main rounded py-2 hover:text-white">
                            Cancel
                        </button>
                        <button className="px-8 bg-main rounded py-2 hover:text-white">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default OverviewUser;