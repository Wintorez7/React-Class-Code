import React from 'react'
import Child2 from './Child2'

const Child1 = () => {
  return (
    <div>
        <h1 className='text-2xl font-semibold'>This is Child-1 component</h1>
        <Child2/>
    </div>
  )
}

export default Child1