import React, { useState } from 'react'

const myContext = () => {
    const[count,setCount] = useState("")
  return (
    <div>
        <myContext.Provider value={{count,setCount}}>
            {props.children}
        </myContext.Provider>
    </div>
  )
}

export default myContext