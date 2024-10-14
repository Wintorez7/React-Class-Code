import React, { useState } from 'react'

const Form = () => {
    const[text, setText] = useState("")
    const[username, setUsername] = useState("")

    function changeHandler(event){
        setText(event.target.value);
    }
  return (
    <div className=" flex justify-center items-center bg-[linear-gradient(90deg,_rgba(61,80,203,1)_24%,_rgba(219,11,205,1)_57%)] w-full h-screen">

        <div className='w-[500px] h-[400px] rounded-xl px-2  bg-white'> 
            <h1 className='text-black mt-2 text-2xl font-semibold'>Controlled Form Component</h1>

            <input className='mb-[2rem] border-solid border-2 border-black px-2 py-1 rounded-lg' type="text" value={text}
            onChange={changeHandler}/>

            <h2>{text}</h2>

            <input className=' border-solid border-2 border-black px-2 py-1 rounded-lg' type="text" value={username}
            onChange={(e) => setUsername(e.target.value)}/>
            <h2>{username}</h2>
        </div>
    </div>
  )
}

export default Form