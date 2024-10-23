import Child1 from "./Child1"
import React from "react"


function App() {
 

  return (
   <div className='w-full bg-gray-500 h-screen '>  
      <UserContextWrapper>
        <MyContextWrapper>
          <Child1/>
        </MyContextWrapper>
      </UserContextWrapper>
      
   </div>
  )
}

export default App
