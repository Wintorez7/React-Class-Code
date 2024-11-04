import React from 'react'

const Child = ({color,bg,name}) => {
  return (
   <button style={{color:color, background:bg, padding:"10px 20px"}}>
      <p>{name}</p>
   </button>
  )
}

export default Child