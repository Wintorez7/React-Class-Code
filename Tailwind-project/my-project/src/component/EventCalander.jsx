import  { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
function EventCalender() {
    const [value,onchange]=useState(new Date());
    return (
        <div className=' flex w-full h-full'>
            <Calendar onChange={onchange} value={value}/>      
        </div>
  )
}

export default EventCalender