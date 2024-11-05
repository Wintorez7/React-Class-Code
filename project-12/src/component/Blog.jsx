import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
        <div className='space-x-6'>
          <Link to={"/blog/youtube"}>Youtube</Link>
          <Link to={"/blog/instagram"}>Instagram</Link>
          <Outlet/>
        </div>
    </div>
  )
}

export default Blog