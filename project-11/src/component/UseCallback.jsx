import React, { useEffect, useState } from 'react'

const UseCallback = () => {

    let [count, setCount] = useState(0)
    let [color, setColor] = useState("red")

    let getNumber = () => {
        return count * 100
    }

  return (
    <div>
        <h1 style={{color:color}} className='text-2xl font-semibold px-2 py-2'>UseMemo() Hook</h1>
        <h1 className='text-2xl px-3 py-3'>{count}</h1>
        <button onClick={() => setCount(count + 1)} className='bg-blue-500 ml-2 text-white hover:bg-blue-600 transition-all duration-300 px-2 py-1 rounded-lg'>Change Count</button>
        <button onClick={() => setColor(color == "red" ? "green":"red")} className='bg-blue-500 ml-2 text-white hover:bg-blue-600 transition-all duration-300 px-2 py-1 rounded-lg'>Change Color</button>

        <DisplayingNumber getNumber={getNumber} />
    </div>
  )
}

function DisplayingNumber({getNumber}){
    useEffect(() => {
        console.log("hi")
    },[getNumber])
        return(
            <>
                <h1 className='text-2xl px-3 py-3'>Child Compnent</h1>
                <h2 className='text-2xl px-3 py-3'>{getNumber()}</h2>
            </>
        )
}

export default UseCallback