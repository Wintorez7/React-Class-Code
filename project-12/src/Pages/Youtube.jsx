import React from 'react'
import { Outlet } from 'react-router-dom'

const Youtube = () => {
  return (
    <div>
        <h1>Youtube</h1>
        
        <Outlet/>    
    </div>
  )
}

export default Youtube