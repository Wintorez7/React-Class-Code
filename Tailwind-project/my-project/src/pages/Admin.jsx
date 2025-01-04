import React from 'react'
import HeadCount from '../component/HeadCount'
import CountRadlCharts from '../component/CountRadalCharts'
import AttendenceCount from '../component/AttendenceCount'
import FinanceChart from '../component/FinanceChart'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Admin = () => {
  return (
    <div className='flex'>
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

      </div>
      <div>
      <FinanceChart/>
      </div>
    </div>
    <div className="p-4 rounded-lg shadow-md w-full"
            // style={{
            //   width:"",
            //   backgroundColor: '#2c3e50', // Dark background
            //   color: 'white', // White text
            //   borderRadius: '12px', // Rounded corners
            //   boxShadow: '0 0 20px white', // Box shadow
            // }}
          >
            <Calendar className="!w-full !border-none rounded-md" />
          </div>
    </div>
  )
}

export default Admin