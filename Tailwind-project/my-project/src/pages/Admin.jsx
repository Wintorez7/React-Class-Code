import React from 'react'
import HeadCount from '../component/HeadCount'

const Admin = () => {
  return (
    <div className='bg-slate-400 text-black w-full h-full'>
      {/* Count component */}
      <div className='flex justify-evenly'> 
        <HeadCount type="Student" count="200"/>
        <HeadCount type="Student" count="200"/>
        <HeadCount type="Student" count="200"/>
        <HeadCount type="Student" count="200"/>
      </div>
    </div>
  )
}

export default Admin