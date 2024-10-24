import React, { useEffect, useState } from 'react'

const FunctionLifeCycle = () => {
    const[count,setCount] = useState(0);
    const[color, setColor] = useState("red");
    
    useEffect(() => {
        //will execute after every render
        //direct change of state can leads to infinite re-render
        console.log("1st syntax... without second argument")
        
    })

    useEffect(() => {
        //this useEffect exeute only once after initial render
        // this is similar componentDidMount() method in Class component
        //this execute in the mounting phase of a component
        console.log("2nd Syntax useEffect.... with second argument as empty array")      
    },[])

    useEffect(() => {
        //this useEffect execute in the updating phase of component
        //this os similar to componentDidUpdate() method in Class component
        //it execute after the changes in dependecies array state/props
          console.log("3rd Syntax useEffect... with second arrgument as state/props ")
    },[count])

    useEffect(() => {
          console.log("4th Syntax useEffect... with return function")
          return() => (
            //this execute in the unmounting phase of componetn
            //execute before the useEffect() to cleanup the previous on going task/logic
            //similar to componentWillUnmount() method in Class component
            console.log("the returned Fuction")
          )
    })


  return (
    <div>
        {console.log("render Method")}
        <h1>FunctionLifeCycle</h1>
        <h1 className='text-white px-2 py-2 text-2xl' style={{background:color}}>{count}</h1>

        <button  className="bg-blue-500 mt-2 mb-2 ml-2 px-2 py-1 rounded-lg hover:bg-blue-600 transition-all duration-300" onClick={() => setCount(count + 1)}>Change count</button>

        <button  className="bg-blue-500 mt-2 mb-2 ml-2 px-2 py-1 rounded-lg hover:bg-blue-600 transition-all duration-300" onClick={() => setColor("blue")}>Change color</button>
    </div>
  )
}

export default FunctionLifeCycle