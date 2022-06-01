const CalendarDay = ({ num }) => {
    return (
        <div className='md:h-72 md:w-56 h-16 w-28 flex justify-center items-center border border-gray-500'>
            <p className='text-main md:font-bold text-sm md:text-xl'>Day  </p>
            <p className='text-main md:font-bold text-sm md:text-xl ml-0.5'>{num} </p>
        </div>
    );
}

export default CalendarDay;