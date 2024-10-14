import React from 'react'

const ChildToParent = (props) => {
   // console.log(props.name)
   const {name,sendData} = props
   let realName = "Tony stark"

   function clickHandle(){
        sendData(realName)
   }
   
  return (
    <div>
        <h1 className='bg-green-300 px-2 py-3 font-semibold'>Sending data from Child to parent Element</h1>
       <h1  className='bg-green-400 px-2 py-3 font-semibold'>{props.name}</h1>
       <h1  className='bg-green-200 px-2 py-3 font-semibold'>{realName}</h1>
       <button className='mt- bg-blue-300 px-2 rounded-full hover:bg-blue-500
       transition-all duration-300' onClick={clickHandle}>Send Data</button>
    </div>
  )
}

export default ChildToParent