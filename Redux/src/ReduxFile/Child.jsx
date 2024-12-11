import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const Child = () => {
    const user = userSelector((store) => store.userReducer)
    const dispatch = useDispatch()
    const[name, setName] = useState("")

    function handelClick(){
        dispatch({type:"input", payload:name})
        setName("")
    }
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <button onClick={() => dispatch({type:"random"})}>Change Name</button>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <button onClick={handelClick}>Change</button>

        
    </div>
  )
}

export default Child