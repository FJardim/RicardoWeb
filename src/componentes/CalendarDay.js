const CalendarDay = ({ num }) => {
    return (
        <div className='h-72 w-56 flex justify-center items-center border border-gray-500'>
            <p className='text-teal-400 font-bold'>Day  </p>
            <p className='text-teal-400 font-bold'>{num} </p>
        </div>
    );
}

export default CalendarDay;