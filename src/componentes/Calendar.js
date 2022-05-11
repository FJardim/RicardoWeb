import CalendarDay from "./CalendarDay";

const Calendar = ({ day }) => {
    return (
        <div className='mt-4 px-10'>
            <p className='text-teal-400 text-xl font-bold p-2 '>Week {day}</p>
            <div className='flex gid grid-cols-7 m-auto '>
                <CalendarDay num="1" />
                <CalendarDay num="2" />
                <CalendarDay num="3" />
                <CalendarDay num="4" />
                <CalendarDay num="5" />
                <CalendarDay num="6" />
                <CalendarDay num="7" />
            </div>
        </div>
    );
}

export default Calendar;