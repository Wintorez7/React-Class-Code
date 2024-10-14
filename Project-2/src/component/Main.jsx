import React, { useState } from 'react'

const Main = () => {

    const[color, setColor] = useState("green")

    function ChangeColor(){
        setColor(prevColor => (prevColor === "black" ? "white" : "black"));  
    }

  return (
    <div style={{background:color}} className='w-[400px] flex  justify-center items-center h-[350px] rounded-xl border-2  shadow-xl'>
        <button onClick={ChangeColor} className='bg-blue-500 px-2 py-2 text-white rounded-lg hover:bg-blue-600
         transition-all duration-300'>Change Color</button>
    </div>
  )
}

export default Main