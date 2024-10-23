import React,{useContext} from 'react'
import myContext from './context/myContext'


const Child2 = () => {
    const data = useContext(myContext)
  return (
    <div>
        <h1 className='text-red-600 font-semibold'>this is Child-2 Component</h1>
        <h1>{data}</h1>
       
    </div>
  )
}

export default Child2