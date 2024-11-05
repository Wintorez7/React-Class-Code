import React, { action } from 'react'

function CountReducer (state,action) {
if(action.type == "inc"){
    return state + action.payload
}else if(action.type == "dec"){
    return state - action.payload
}else{
    return state
}


  return (
    <div>

    </div>
  )
}

export default CountReducer