import React from 'react'
import HeadCount from '../component/HeadCount'
import CountRadlCharts from '../component/CountRadalCharts'
import AttendenceCount from '../component/AttendenceCount'
import FinanceChart from '../component/FinanceChart'
import Calendar from 'react-calendar'

const Admin = () => {
  return (
    <div className='flex items-center justify-between '>
      <div className='w-2/3 flex flex-col items-center h-full'>
      {/* Count component */}
      <div className='flex justify-evenly w-full items-center  mt-10'> 
        <HeadCount type="Student" count="200"/>
        <HeadCount type="Student" count="200"/>
        <HeadCount type="Student" count="200"/>
        <HeadCount type="Student" count="200"/>
      </div>
      {/* Graph */}
      <div className='flex justify-start w-full items-center mt-10 min-h-max '>
      <CountRadlCharts/>
      <AttendenceCount/>
        <div className="mt-3 p-4 me-14 rounded-lg shadow-md" style={{
          backgroundColor: "#2c3e50", // dark background
       // white text
          borderRadius: "12px", // rounded corners
          boxShadow: "0 0 20px white", // box shadow
        }}>
        <Calendar/>
        </div>
      </div>
      <div>
      <FinanceChart/>
      </div>
    </div>
    </div>
  )
}

export default Admin