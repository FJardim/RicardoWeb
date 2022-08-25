import { useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import Modal from "../componentes/Modal/Modal";
import usePlans from "../hooks/usePlans";
import useRecipes from "../hooks/useRecipes";
import AsyncSelect from 'react-select/async';
import { useEffect } from "react";
import { format } from "date-fns";
import { useFeedBack } from "../contexts/FeedBackContext";
import useAxios from "../hooks/useAxios";
import useEvents from "../hooks/useEvents";
import { useAuth } from "../contexts/AuthContext";

const OverviewUser = () => {

    const { user } = useAuth();

    const { setLoading } = useFeedBack();

    const [eventsFilters, setEventsFilters] = useState({
        page: 1,
        start: '',
        end: '',
        perPage: 100,
        clientId: user?.id
    });

    const [showPlansModal, setShowPlansModal] = useState(false);

    const [showRecipesModal, setShowRecipesModal] = useState(false);

    const [plansFilters, setPlansFilters] = useState({
        page: 1,
        perPage: 100
    });

    const [recipesFilters, setRecipesFilters] = useState({
        page: 1,
        perPage: 100,
        name: '',
        categoryIds: []
    });

    const [{ plans, numberOfPages: plansPages, loading: loadingPlans }, getPlans] = usePlans({ params: { ...plansFilters }, options: { useCache: false } });

    const [{ recipes, total, numberOfPages: recipesPages, loading: loadingRecipes }, getRecipes] = useRecipes({ params: { ...recipesFilters }, options: { useCache: false } });

    const [{ data: addEventData, loading: addEventLoading }, addEvent] = useAxios({ url: `/events`, method: 'POST' }, { manual: true, useCache: false });

    const [{ events, loading: eventsLoading }, getEvents] = useEvents({ params: { ...eventsFilters }, options: { manual: true } });

    const [currentEvents, setCurrentEvents] = useState([])

    useEffect(() => {
        if (eventsFilters?.start && eventsFilters?.end) {
            getEvents({
                params: {
                    ...eventsFilters
                }
            });
        }
    }, [eventsFilters])

    useEffect(() => {
        if (events?.length > 0) {
            setCurrentEvents(events);
        }
    }, [events])

    useEffect(() => {
        setLoading({
            show: addEventLoading,
            message: 'Loading'
        });
    }, [addEventLoading]);

    useEffect(() => {
        setLoading({
            show: eventsLoading,
            message: 'Loading'
        });
    }, [eventsLoading])

    useEffect(() => {
        if (addEventData) {
            setCurrentEvents((oldEvents) => {
                return [...oldEvents, addEventData];
            })
        }
    }, [addEventData]);


    useEffect(() => {
        console.log('me ejecute');
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".custom-event"
        });
    }, [])

    const handleDateClick = (date) => {
        console.log(date);
    }

    const handleChange = (e, entity) => {
        if (entity === 'recipes') {
            setRecipesFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    [e.target.name]: e.target.value,
                    page: 1
                }
            })
        }

        if (entity === 'plans') {
            setPlansFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    [e.target.name]: e.target.value,
                    page: 1
                }
            })
        }
    }

    const handleDrop = (dropInfo) => {

        const eventableId = dropInfo?.draggedEl?.dataset?.recipeid || dropInfo?.draggedEl?.dataset?.planid;

        const eventType = dropInfo?.draggedEl?.dataset?.recipeid ? 'recipeId' : 'planId';

        const start = format(new Date(dropInfo?.date), 'yyyy-MM-dd');

        console.log({
            start,
            eventType,
            eventableId
        });

        addEvent({
            data: {
                [eventType]: eventableId,
                start
            }
        });

    }

    const handleDateInfo = (dateInfo) => {
        setEventsFilters((oldEventsFilters) => {
            return {
                ...oldEventsFilters,
                start: dateInfo?.start,
                end: dateInfo?.end
            }
        });

    }

    return (
        <div className="container p-20 w-full mb-20">
            <p className="text-4xl font-bold text-black mb-8">Overview</p>

            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
                <div id="external-events" className="shadow bg-white p-4 rounded-xl">
                    <h3 className="mb-4 text-2xl font-bold">
                        Recipes
                    </h3>
                    <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                        type="text"
                        name="name"
                        onChange={(e) => { handleChange(e, 'recipes') }}
                        placeholder="Recipe name..."
                        className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
                    />
                    <div style={{ height: '300px', overflowY: 'auto', backgroundColor: '#F0F0F0' }} className="custom-scrollbar custom-scrollbar-main p-4 rounded">
                        {recipes?.map((recipe, i) => {
                            return (
                                <div data-recipeid={recipe?.id} data-recipename={recipe?.name} key={i} className="custom-event py-2 px-4 my-2 bg-main rounded-xl text-white" style={{ cursor: 'pointer' }}>
                                    {recipe?.name}
                                </div>
                            )
                        })}
                        {
                            loadingRecipes &&
                            <p className="text-center">
                                Loading...
                            </p>
                        }
                    </div>

                    <h3 className="my-4 text-2xl font-bold">
                        Plans
                    </h3>
                    <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                        type="text"
                        name="name"
                        onChange={(e) => { handleChange(e, 'plans') }}
                        placeholder="Plan name..."
                        className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
                    />

                    <div style={{ height: '300px', overflowY: 'auto', backgroundColor: '#F0F0F0' }} className="custom-scrollbar custom-scrollbar-main p-4 rounded">
                        {plans?.map((plan, i) => {
                            return (
                                <div data-planid={plan?.id} data-planname={plan?.name} key={i} className="custom-event py-2 px-4 my-2 bg-main rounded-xl text-white" style={{ cursor: 'pointer' }}>
                                    {plan?.name}
                                </div>
                            )
                        })}
                        {
                            loadingPlans &&
                            <p className="text-center">
                                Loading...
                            </p>
                        }
                    </div>
                </div>
                <div className="md:col-span-3">
                    <FullCalendar
                        datesSet={handleDateInfo}
                        dateClick={handleDateClick}
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        droppable
                        drop={handleDrop}
                        events={currentEvents}
                    />
                </div>
            </div>
        </div >
    );
}

export default OverviewUser;