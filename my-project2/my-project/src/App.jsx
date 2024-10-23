import myContext from './context/myContext'
import Child1 from './Child1'

function App() {
 

  return (
   <div className='w-full h-screen '>  
     <myContext.Provider value={"hello world"}>
      {/* all component */}
        <Child1/>
     </myContext.Provider>
   </div>
  )
}

export default App
