import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment , inputValue } from './redux/slices/counterSlice'

const Child = () => {
    const {value} = useSelector((store) => store.counter)
    const dispatch = useDispatch()
    const [num, setNum] = useState("")
    const [user, setUser] = useState("")

    function changeCount(){
        dispatch(inputValue(num))
        
        setNum("")
    }
    function adduser(){
      dispatch(add(user))
      setUser("")
    }


  return (
    <div className='mt-5'>
        <h1 className='text-2xl font-semibold'>Using Redux Toolkit</h1>
        <h1 className='text-2xl font-semibold ml-[6.8rem] mt-5 mb-5'>{value}</h1>

        <button className='bg-blue-500 text-white px-2 py-1 ml-5 rounded-lg'
         onClick={() => dispatch(increment())}>
            Increment
        </button>

        <button className='bg-blue-500 text-white px-2 py-1 ml-5 rounded-lg'
         onClick={() => dispatch(decrement())}>
            Decrement
        </button>
        <div className='mt-5'>
            <input className='border border-black' type="number" onChange={(e) => setNum(e.target.value)} value={num}/>
            <button className='bg-red-500 text-white px-2 py-1 ml-5 rounded-lg'
             onClick={changeCount}>Change Count</button>
        </div>

        <div className='mt-5'>
            <input className='border border-black' type="text"
             onChange={(e) => setNum(e.target.value)} value={user}/>

            <button className='bg-red-500 text-white px-2 py-1 ml-5 rounded-lg'
             onClick={adduser}>add</button>

        </div>
    </div>
  )
}

export default Child