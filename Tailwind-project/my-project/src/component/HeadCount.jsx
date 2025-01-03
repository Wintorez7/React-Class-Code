import React from 'react'
import { CiMenuKebab } from "react-icons/ci";


const HeadCount = ({type,count}) => {
  return (
    <>
        <div className='flex flex-col p-4 w-56 bg-slate-600 even:bg-blue-500  rounded-md shadow-lg'>
            <div className='flex  items-center w-full'>
                <div className='text-center text-sm h-6 w-20 rounded-full bg-slate-50 text-green-500'>
                    2024/25
                </div>
            <div className='ml-[5rem]'>
              <CiMenuKebab className='text-4xl text-center rotate-90 text-white cursor-pointer'/>
            </div>
            </div>
        <h1 className='text-2xl font-semibold  text-yellow-50'>{count}</h1>
        <p className=' text-slate-200 text-xl'>{type}</p>
        </div>
    </>
  )
}

export default HeadCount