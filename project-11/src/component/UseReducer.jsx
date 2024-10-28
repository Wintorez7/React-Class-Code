import React, { useReducer } from 'react'
import CountReducer from '../reducres/CountReducer'

const UseReducer = () => {

    const[count, dispatch] = useReducer(CountReducer,10)

  return (
    <div>
        <h1>useReducer Hook</h1>
        <h1>{count}</h1>
        <div className='space-x-4'>
        <button className='bg-blue-500 px-2 py-1 rounded-md text-white' onClick={() => dispatch({type:"inc",payload: 1})}>inc</button>
        <button className='bg-blue-500 px-2 py-1 rounded-md text-white' onClick={() => dispatch({type:"dec",payload: 1})}>dec</button>
        <button className='bg-blue-500 px-2 py-1 rounded-md text-white' onClick={() => dispatch({type:"inc",payload: 5})}>inc</button>
        <button className='bg-blue-500 px-2 py-1 rounded-md text-white' onClick={() => dispatch({type:"dec",payload: 5})}>dec</button>
        <button className='bg-blue-500 px-2 py-1 rounded-md text-white' onClick={() => dispatch({type:"inc",payload: 10})}>inc</button>
        <button className='bg-blue-500 px-2 py-1 rounded-md text-white' onClick={() => dispatch({type:"dec",payload: 10})}>dec</button>
        </div>
    </div>
  )
}

export default UseReducer