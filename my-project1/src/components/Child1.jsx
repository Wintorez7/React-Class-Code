import React from 'react'
import { useState } from 'react'
const Child1 = () => {
  const [count,setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
        <div>Functional Component</div>
        <div className='bg-green-400 space-x-4 py-2 px-2 w-full'>
          <button className='bg-red-400 px-3 py-1 rounded-lg' onClick={increment}>+</button>
          <b>{count}</b>
          <button className='bg-red-400 px-3 py-1 rounded-lg' onClick={decrement}>-</button>
        </div>
    </div>
  )
}

export default Child1