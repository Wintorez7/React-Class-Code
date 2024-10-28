import React, { useState } from 'react'

const Main = () => {

  const[value,setValue] = useState(0)
  const[color,setColor] = useState("white")

function valueDecrease() {
  setValue(prevValue => {
    const newValue = prevValue - 1;
    if (newValue < 0) {
      setColor("black"); 
    }
    if (newValue == 0) {
      setColor("white"); 
    }
    if (newValue % 2 == 1) {
      setColor("blue"); 
    }
    else{
      setColor("red");
    }
    return newValue;
  });
  }

 function valueIncrese(){
  setValue(prevValue => {
    const newValue = prevValue + 1;
    
    if(newValue % 2 == 0) {
      setColor("red"); 
    }
    else{
      setColor("blue")
    }
   
    return newValue;
  });
 }

  return (
    <div>
       <div style={{backgroundColor:color}} className='w-[400px] bg-gray-100 h-[450px] flex items-center justify-center rounded-xl border-2  shadow-xl'>
            <div className='bg-green-300 space-x-5 rounded-xl flex items-center justify-center w-[50%] h-[40%]'>
                <div onClick={valueDecrease} className='bg-blue-500 px-4 cursor-pointer py-2 rounded-lg hover:bg-blue-600 transition-all duration-300'>
                  <button >-</button>
                </div>
                <div className='text-2xl'>{value} </div>
                <div onClick={valueIncrese} className='bg-blue-500 px-4 cursor-pointer py-2 rounded-lg hover:bg-blue-600 transition-all duration-300'>
                  <button >+</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Main