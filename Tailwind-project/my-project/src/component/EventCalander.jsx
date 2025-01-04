import React, { useState } from 'react'
import { use } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { CiMenuKebab } from 'react-icons/ci';


function EventCalender() {
    const [value,onchange]=useState(new Date());
  return (
    <div className='bg-white flex flex-col w-full h-full p-4 rounded-md shadow-md'>
    <Calendar onChange={onchange} value={value}/>      
    <div className='flex flex-col gap-4 w-full p-4'>
    <div className="flex justify-between items-center">
    <h1 className='text-2xl font-semibold text-center text-black'>Events</h1>
    <CiMenuKebab className='rotate-90 text-4xl text-gray-500 cursor-pointer'/>

    </div>
    {/* Event Lists */}
    <div>
         {/* 1 */}
         <div className='border-2 min-h-28 border-t-4 border-t-blue-500 flex flex-col items-center gap-2 justify-center'>           
              <div className='flex w-full justify-between'>
                <h1 className='font-bold text-black'> Sample Heading</h1>
                <p className=' text-xs text-black'>12:00 PM - 2:00 PM</p>
              </div>
              <div>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum aut doloribus tenetur unde adipisci quidem aperiam perferendis voluptatum! Sequi ea ipsum eum inventore, esse iusto unde magni.</p>
              </div>
         </div>
            {/* 2 */}

            <div className='border-2 min-h-28 border-t-4 border-t-blue-500 mt-2 flex flex-col items-center gap-2 justify-center'>
                          
                <div className='flex w-full justify-between'>
                <h1 className='ms-3 underline font-bold text-white'> Sample Heading</h1>
                <p className=' text-xs text-white me-3 font-extrabold'>12:00 PM - 2:00 PM</p>

              </div>
              <div>
                <p className='text-white font-semibold ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                voluptatum! Sequi ea ipsum eum inventore, esse iusto unde magni.</p>
              </div>

         </div>
    </div>

</div>
    </div>
  )
}

export default EventCalender