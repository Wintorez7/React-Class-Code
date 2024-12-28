import React from 'react'

const Login = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-blue-100'>
        <div className='w-[350px] flex flex-col justify-center items-center h-[55%] rounded-xl shadow-xl bg-white'>
            <div className='w-[70%] flex flex-col mx-auto ml-8'>
              <h1 className='text-xl ml-4 font-serif font-semibold'>SchoolLama</h1>
              <p className='text-lg ml-4 text-blue-600 font-serif font-semibold'>Sign in to your account</p>
            </div>
            <div className='flex flex-col mt-3'>
              <label>Username</label>
              <input type="text" className='border w-[250px] px-2 py-2 rounded-md'/>
              <label>Password</label>
              <input type="text"  className='border px-2 py-2 rounded-md'/>
              <p className='text-[12px] font-semibold cursor-pointer mt-2' >Forget Password ?</p>
            </div>
            <div className='w-full flex justify-center mt-5'>
              <button className='px-2 w-[250px] py-2 hover:bg-blue-500 transition-all duration-200 bg-blue-600 text-white rounded-md'>Sign in</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login