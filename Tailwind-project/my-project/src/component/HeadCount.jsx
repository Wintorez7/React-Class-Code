import React from 'react'
import { CiMenuKebab } from "react-icons/ci";


const HeadCount = ({type,count}) => {
  return (
    <>
        <div className='flex flex-col p-4 w-56 bg-orange-400 rounded-md shadow-md'>
            <div className='flex  items-center w-full'>
                <div className='text-center text-sm h-6 w-20 rounded-full bg-slate-50 text-green-500'>
                    2024/25
                </div>
            </div>
            <div>
              <CiMenuKebab className='text-4xl text-center rotate-90 text-white cursor-pointer'/>
            </div>
        <h1 className='text-2xl font-semibold  text-yellow-50'>{count}</h1>
        <p className=' text-slate-200 text-xl'>{type}</p>
        </div>
    </>
  )
}

export default HeadCount