import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around w-full h-[70px] items-center bg-gray-500'>
        <div className='bg-red-400 rounded-md p-[0.6rem] hover:bg-red-500 transition-all duration-300'>
            <p>Logo</p>
        </div>
        <div className='space-x-6'>
            <NavLink className='bg-green-400 rounded-md p-[0.6rem] hover:bg-green-500 transition-all duration-300' to="/">
            Home
            </NavLink>
            <NavLink className='bg-green-400 rounded-md p-[0.6rem] hover:bg-green-500 transition-all duration-300' to="/about">
            About
            </NavLink>
            <NavLink className='bg-green-400 rounded-md p-[0.6rem] hover:bg-green-500 transition-all duration-300' to="/blog">
            Blog
            </NavLink>

        </div>
        <div className='space-x-6'>
            <button className='bg-green-400 rounded-md p-[0.6rem] hover:bg-green-500 transition-all duration-300'>
                <p>Login</p>
            </button>
            <button className='bg-green-400 rounded-md p-[0.6rem] hover:bg-green-500 transition-all duration-300'>
                <p>Sign-up</p>
            </button>
        </div>
    </div>
  )
}

export default Navbar