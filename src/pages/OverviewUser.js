import BoxName from "../componentes/BoxName";
import ButtonOverview from "../componentes/ButtonOverview";
import LyOverview from "../componentes/LyOverview";
import CustomFullCalendar from "../componentes/CustomFullCalendar";
import { useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const OverviewUser = () => {

    const [currentEvents, setCurrentEvents] = useState([
        { start: '2022-07-01', end: '2022-07-12', title: 'Adelgaza en 12 dias' },
        { start: '2022-07-01 07:00:00', end: '2022-07-01 10:00:00', title: 'Arepa Frita' },
        { start: '2022-07-01 18:00:00', end: '2022-07-01 21:00:00', title: 'Tacos al pastor' },
        { start: '2022-07-01 12:00:00', end: '2022-07-01 15:00:00', title: 'Arroz Chino' },
        { start: '2022-07-02 00:00:00', end: '2022-07-02 02:00:00', title: 'Arepa Frita' },
    ])

    return (
        <div className="container p-20 h-full w-full mb-20">
            <p className="text-4xl font-bold text-black ">Overview</p>
            <div className="flex justify-end">
                <button href="/" className="bg-main px-5 py-2 rounded text-white mb-2">
                    Add Plan
                </button>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={currentEvents}
            />
        </div>
    );
}
export default OverviewUser;