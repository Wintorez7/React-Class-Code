import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CiMenuKebab } from 'react-icons/ci';

function EventCalendar() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="flex flex-col w-full h-full bg-white rounded-md shadow-md p-4">
            <Calendar onChange={onChange} value={value} />
            {/* Events */}
            <div className="flex flex-col gap-4 w-full p-4">
                {/* Title */}
                <div className='flex justify-between items-center'>
                    <h1 className="text-2xl font-semibold text-center">Events</h1>
                    <CiMenuKebab className='rotate-90 text-4xl text-gray-500' />
                </div>
                {/*Event Lists */}
                <div className='flex flex-col gap-2 w-full'>
                    {/* 1 */}
                    <div className='border-2 min-h-28 border-t-4 border-t-blue-300 
                    flex flex-col items-center justify-center gap-2 p-2 rounded-md'>
                        {/* Header */}
                        <div className='flex w-full justify-between'>
                            <h1 className='font-semibold text-md'>SAMPLE HEADING</h1>
                            <p className='text-xs text-gray-400'>12:00 PM - 2:00 PM</p>
                        </div>
                        {/* Body */}
                        <div>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Libero,
                                ucimus tempore beatae hic</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='border-2 min-h-28 border-t-4 border-t-blue-300 
                    flex flex-col items-center justify-center gap-2 p-2 rounded-md'>
                        {/* Header */}
                        <div className='flex w-full justify-between'>
                            <h1 className='font-semibold text-md'>SAMPLE HEADING</h1>
                            <p className='text-xs text-gray-400'>12:00 PM - 2:00 PM</p>
                        </div>
                        {/* Body */}
                        <div>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Libero,
                                ucimus tempore beatae hic</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='border-2 min-h-28 border-t-4 border-t-blue-300 
                    flex flex-col items-center justify-center gap-2 p-2 rounded-md'>
                        {/* Header */}
                        <div className='flex w-full justify-between'>
                            <h1 className='font-semibold text-md'>SAMPLE HEADING</h1>
                            <p className='text-xs text-gray-400'>12:00 PM - 2:00 PM</p>
                        </div>
                        {/* Body */}
                        <div>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Libero,
                                ucimus tempore beatae hic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventCalendar