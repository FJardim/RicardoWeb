import { useState } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { TabsProvider, useTabs } from "../contexts/TabsContext";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import TabsContainer from "./TabsContainer";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import useRecipes from "../hooks/useRecipes";
import Modal from "./Modal/Modal";
import { useRef } from "react";
import update from 'immutability-helper';
import { IoCloseCircle } from "react-icons/io5";
import imgUrl from "../helpers/imgUrl";
import clsx from "clsx";

const StepFive = () => {

    const { data, setData } = useCreatePlan();

    const [showModal, setShowModal] = useState(false);

    const { value, setValue } = useTabs();

    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const [isEnd, setIsEnd] = useState(false);

    const [currentPeriod, setCurrentPeriod] = useState(null);

    const [filters, setFilters] = useState({
        name: '',
        page: 1
    });

    const [{ recipes, numberOfPages, loading: recipeLoading }, getRecipes] = useRecipes({ axiosConfig: { params: { ...filters } } });

    const handleAddRecipe = (recipe) => {
        const newData = update(data, {
            weekDays: {
                [currentDayIndex]: {
                    mealPeriods: {
                        [currentPeriod]: {
                            recipes: {
                                $push: [recipe]
                            }
                        }
                    }
                }
            }
        });

        setData(newData);
    }

    const handleRemoveRecipe = (recipeIndex, periodIndex) => {
        const newData = update(data, {
            weekDays: {
                [currentDayIndex]: {
                    mealPeriods: {
                        [periodIndex]: {
                            recipes: { $splice: [[recipeIndex, 1]] }
                        }
                    }
                }
            }
        });
        setData(newData);
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

    const handleSlideChange = (e) => {
        setIsEnd(e?.isEnd);
        setCurrentDayIndex(e?.realIndex);
    }

    return (
        <div>
            <Swiper
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                spaceBetween={30}
                pagination={{ clickable: true, }}
                navigation
                modules={[Pagination, Navigation]}
            >
                {
                    data?.weekDays?.map((day, i) => {
                        return (
                            <SwiperSlide className="hover:cursor-grab" key={`swiper-${i}`}>
                                <div className="w-full" style={{ minHeight: '80px' }}>
                                    <h1 className="text-center text-gray-400 text-xl font-bold">
                                        Day {i + 1}
                                    </h1>
                                    <TabsProvider>
                                        <TabsContainer className="justify-center md:flex flex flex-wrap md:m-10 m-2 mt-6 text-center">
                                            {
                                                day?.mealPeriods?.map((period, preiodIndexi) => {
                                                    return (
                                                        <Tab value={preiodIndexi} key={`period-tab-${preiodIndexi}`}>{period?.name} - {period?.recipes?.length}</Tab>
                                                    )
                                                })
                                            }
                                        </TabsContainer>
                                        {
                                            day?.mealPeriods?.map((period, periodIndex) => {
                                                return (
                                                    <TabPanel
                                                        key={`period-tabPanel-${periodIndex}`}
                                                        className="animate__animated animate__fadeInUp mb-8 px-8"
                                                        value={periodIndex}
                                                    >
                                                        {
                                                            period?.recipes?.length > 0 ?
                                                                <div className="grid w-full md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-4 mb-16">
                                                                    {
                                                                        period?.recipes?.map((recipe, recipeIndex) => {
                                                                            return (
                                                                                <div key={`period-recipe-${recipeIndex}`} className="text-center relative">
                                                                                    <button onClick={() => {
                                                                                        handleRemoveRecipe(recipeIndex, periodIndex);
                                                                                    }} type="button" className="bg-white rounded-full absolute text-red-400 text-4xl" style={{ top: -15, right: -15 }}>
                                                                                        <IoCloseCircle />
                                                                                    </button>
                                                                                    <div
                                                                                        className="rounded-xl"
                                                                                        style={{
                                                                                            height: '100px',
                                                                                            backgroundSize: 'cover',
                                                                                            backgroundImage: `url(${imgUrl(recipe?.images?.[0]?.path || recipe?.recipeImages?.[0]?.path)})`
                                                                                        }}
                                                                                    >
                                                                                    </div>
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

            <div className="mt-8 text-center space-x-4">
                <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                    Back
                </button>
                <button
                    className={clsx(["transition duration-300 rounded-xl px-8 py-2"], {
                        "bg-main text-white": isEnd,
                        "text-main": !isEnd
                    })}
                    disabled={!isEnd}
                    onClick={(e) => setValue(value + 1)}
                >
                    Confirm
                </button>
            </div>

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
                                        <li key={i} className="bg-gray-200 rounded-xl my-4 flex items-center justify-between">
                                            <img style={{
                                                height: '60px',
                                                width: '60px',
                                                borderRadius: '10px 10px 10px 10px',
                                                border: '2px solid white'
                                            }} src={imgUrl(recipe?.images?.[0]?.path)} alt="" />
                                            <p className="py-4 px-2">
                                                {recipe?.name}
                                            </p>
                                            <div className="flex items-center py-4 px-2">
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

export default StepFive;