import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


const CustomFullCalendar = ({ props }) => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            {...props}
        />
    )
}


export default CustomFullCalendar;