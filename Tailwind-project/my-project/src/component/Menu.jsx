import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { MdSchool } from "react-icons/md";

const Menu = () => {
  return (
    <div className='min-h-screen'>
        {/* logo */}
        <div className='flex items-center justify-evenly h-20'>
            <img src="" alt="logo" />
            <h1 className='text-2xl font-semibold'>JSM</h1>
        </div>
        <div className='flex flex-col '>
          <div>
            <div>
              <a href="#" className='btn btn-ghost w-4/5'><IoHomeOutline className='text-slate-600 inline-block text-lg'/> 
                <span className='hidden md:inline-block text-md font-semibold text-slate-600'>Home</span>
              </a>
            </div>
            <div>
              <a href="#" className='btn btn-ghost w-4/5'><FaChalkboardTeacher className='text-slate-600 inline-block text-lg'/> 
                <span className='hidden md:inline-block text-md font-semibold text-slate-600'>Teacher</span>
              </a>
            </div>
            <div>
              <a href="#" className='btn btn-ghost w-4/5'><PiStudentFill className=' text-slate-600 inline-block text-lg'/> 
                <span className='hidden md:inline-block text-md font-semibold text-slate-600'>Student</span>
              </a>
            </div>
           <div>
              <a href="#" className='btn btn-ghost w-4/5'><MdSchool className='text-slate-600 inline-block text-lg'/> 
                <span className='hidden md:inline-block text-md font-semibold text-slate-600'>Classes</span>
              </a>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Menu