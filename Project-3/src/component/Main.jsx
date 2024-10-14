import React, { useState } from 'react'

const Main = () => {

  const[color,setColor] = useState("black")

  function ChangeToRed(){
    setColor("red")
  }

  function ChangeToBlue(){
    setColor("Blue")
  }

  function ChangeToGreen(){
    setColor("Green")
  }

  return (
    <div>
       <div className='w-[400px]  h-[450px] rounded-xl border-2  shadow-xl'>
         <div className="w-full bg-gray-500 h-[50%] flex justify-center items-center">
        
            <div className="w-[50%] bg-white h-[50%] flex justify-center items-center">
              <h1 style={{color:color}} className='text-2xl font-semibold text-white'>Hello world</h1>
            </div>
         </div>
          
          <div className='w-full h-[50%] justify-center flex items-center flex-col '>
            <button onClick={ChangeToRed}  className='bg-red-500 px-2 py-2 mb-4 text-white rounded-lg hover:bg-red-600
            transition-all duration-300'>Red Color</button>
            <button  onClick={ChangeToBlue}  className='bg-blue-500 px-2 py-2 mb-4 text-white rounded-lg hover:bg-blue-600
            transition-all duration-300'>blue Color</button>
            <button  onClick={ChangeToGreen}  className='bg-green-500 px-2 py-2 mb-4 text-white rounded-lg hover:bg-green-600
            transition-all duration-300'>green Color</button>
          </div>
      
    </div>
    </div>
  )
}

export default Main