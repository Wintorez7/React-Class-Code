import React from 'react'
import { useUserData } from './context/myContext'; 
import {useCount} from './context/myContext'
import Child2 from './Child2'

const Child1 = () => {
  const {count}  = useCount()
  const userData = useUserData()

  console.log(userData)
  
  return (
    <div>
        <h1>{count}</h1>
        <h1>This is Child1 Component</h1>
        <p>{userData.name} is From {userData.address}</p>
          <Child2/>
    </div>
  )
}

export default Child1