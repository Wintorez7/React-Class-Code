import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    let [count, setCount] = useState(0)
    let [color, setColor] = useState("red")

    // function getNumber(){
    //     return count * 10
    // }

    let getNumber = useMemo(() => {
        console.log("Number Printing");
        for(let i = 1; i <= 10000000000000; i++){
            return count * 10;
        }
    },[count])
    console.log(getNumber)

  return (
    <div>
        <h1 style={{color:color}} className='text-2xl font-semibold px-2 py-2'>UseMemo() Hook</h1>
        <h1 className='text-2xl px-3 py-3'>{count}</h1>
        <button onClick={() => setCount(count + 1)} className='bg-blue-500 ml-2 text-white hover:bg-blue-600 transition-all duration-300 px-2 py-1 rounded-lg'>Change Count</button>
        <button onClick={() => setColor(color == "red" ? "green":"red")} className='bg-blue-500 ml-2 text-white hover:bg-blue-600 transition-all duration-300 px-2 py-1 rounded-lg'>Change Color</button>

        <h1 className='text-2xl px-3 py-3'>{getNumber}</h1>
    </div>
  )
}

export default UseMemo