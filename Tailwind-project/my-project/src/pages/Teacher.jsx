import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import BigCalendar from '../component/BigCalendar'



const Student = () => {
  return (
    <div className='min-h-[83vh] bg-slate-100 w-full flex gap-2'>
      {/* Schedule Calendar */}
      <div className='bg-white lg:w-2/3'>
        {/* Title */}
        <div className='flex justify-between w-full px-8'>
            <h1 className='text-2xl text-black font-semibold'>Schedule Class</h1>
            <CiMenuKebab className='rotate-90 text-4xl text-gray-500'/>
        </div>
        {/* calendar */}
        <div className='w-full min-h-[100%]'>
          <BigCalendar/>
        </div>
       </div>
        {/* Anouncements */}
        <div className='bg-white lg:w-1/3 flex flex-col gap-2'>
            
        </div>
    </div>
  )
}

export default Student