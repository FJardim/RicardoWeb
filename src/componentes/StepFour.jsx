import { useEffect } from "react";
import { useState } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { TabsProvider, useTabs } from "../contexts/TabsContext";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import TabsContainer from "./TabsContainer";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import useRecipes from "../hooks/useRecipes";
import Modal from "./Modal/Modal";
import { useRef } from "react";

const StepFour = () => {

    const [newWeekDays, setNewWeekDays] = useState(null);

    const { data, setData } = useCreatePlan();

    const swiperRef = useRef();

    const [showModal, setShowModal] = useState(false);

    const { value, setValue } = useTabs();

    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const [currentPeriod, setCurrentPeriod] = useState(null);

    const [filters, setFilters] = useState({
        name: '',
        page: 1
    });

    const [{ recipes, numberOfPages, loading: recipeLoading }, getRecipes] = useRecipes({ axiosConfig: { params: { ...filters } } });

    const handleAddRecipe = (recipe) => {
        console.log(recipe)
    }

    const handleMore = () => {
        if (numberOfPages > filters?.page) {
            setFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    page: oldFilters?.page + 1
                }
            });
        }
    }

    const handleSlideChange = (e, any) => {
        setCurrentDayIndex(e?.realIndex);
    }

    return (
        <div>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                spaceBetween={30}
                pagination={{ clickable: true, }}
                modules={[Pagination]}
            >
                {
                    data?.weekDays?.map((day, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="w-full" style={{ minHeight: '80px' }}>
                                    <h1 className="text-center text-gray-400 text-xl font-bold">
                                        Day {i + 1}
                                    </h1>
                                    <TabsProvider>
                                        <TabsContainer className="justify-center md:flex flex flex-wrap md:m-10 m-2 mt-6 text-center">
                                            {
                                                day?.mealPeriods?.map((period, i) => {
                                                    return (
                                                        <Tab value={i} key={i}>{period?.name}</Tab>
                                                    )
                                                })
                                            }
                                        </TabsContainer>
                                        {
                                            day?.mealPeriods?.map((period, periodIndex) => {
                                                return (
                                                    <TabPanel
                                                        key={i}
                                                        className="animate__animated animate__fadeInUp mb-8"
                                                        value={periodIndex}
                                                    >
                                                        {
                                                            period?.recipes?.length > 0 ?
                                                                <div className="grid w-full grid-cols-7 gap-4 mb-16">
                                                                    {
                                                                        period?.recipes?.map((recipe, recipeIndex) => {
                                                                            return (
                                                                                <div key={recipeIndex} className="bg-main text-white">
                                                                                    {recipe?.name}
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                                :
                                                                <div className="text-center text-2xl font-semibold text-red-500 mb-16">
                                                                    No recipes yet.
                                                                </div>
                                                        }
                                                        <div className="text-center mb-16">
                                                            <button
                                                                onClick={() => {
                                                                    setShowModal((old) => !old);
                                                                    setCurrentPeriod(periodIndex);
                                                                }}
                                                                type="button"
                                                                className="px-8 py-2 bg-main rounded-xl text-white"
                                                            >
                                                                Add Recipe
                                                            </button>
                                                        </div>
                                                    </TabPanel>
                                                )
                                            })
                                        }
                                    </TabsProvider>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <h1 className="text-center text-gray-400 font-semibold text-xl">
                    Recipes
                </h1>
                {
                    recipes?.length === 0 ?
                        <div className="text-center text-2xl font-semibold text-red-500">
                            No recipes found
                        </div>
                        :
                        <ul>
                            {
                                recipes?.map((recipe, i) => {
                                    return (
                                        <li key={i} className="bg-gray-200 rounded-xl py-4 px-2 my-4 flex items-center justify-between">
                                            <p>
                                                {recipe?.name}
                                            </p>
                                            <div className="flex items-center">
                                                <button onClick={() => handleAddRecipe(recipe)} className="text-main">
                                                    Add
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                }
                {

                    recipeLoading ?
                        <div className="text-center text-xl">
                            Loading Recipes...
                        </div>
                        :
                        numberOfPages > filters?.page ?
                            <div className="text-center">
                                <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4">
                                    Load More
                                </button>
                            </div>
                            :
                            <div className="text-center my-4">
                                No more recipes.
                            </div>
                }
            </Modal>
        </div>
    )
}

export default StepFour;