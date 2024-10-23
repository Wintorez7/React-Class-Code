import React from 'react'
import {Link,NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between bg-red-500 px-5 items-center h-[70px]'>
        <div className=''>
            My App
        </div>
        <div className='flex flex-row space-x-5 '>
            <Link to="/" className='bg-blue-500 rounded-lg px-2 py-1'>Home</Link>
            <Link to="/about" className='bg-blue-500 rounded-lg px-2 py-1'>About</Link>
            <NavLink to="/products" className='bg-blue-500 rounded-lg px-2 py-1'>Product</NavLink>
            <NavLink  to="/contact"  className='bg-blue-500 rounded-lg px-2 py-1'>Contact</NavLink>
        </div>
        <div className='space-x-3'>
            <button className='bg-blue-500 rounded-lg px-2 py-1'>Login</button>
            <button className='bg-blue-500 rounded-lg px-2 py-1'>Sign-up</button>
        </div>
    </div>
  )
}

export default Navbar