import { useState } from "react"
import ClassLifeCycle from "./component/ClassLifeCycle"
import ErrorBounding from "./component/ErrorBounding"
import FunctionLifeCycle from "./component/FunctionLifeCycle"


function App() {
  const[flag, setFlag] = useState(true)
  return (
    <>
     <ErrorBounding>     
      {/* <button className="bg-blue-500 mt-2 mb-2 ml-2 px-2 py-1 rounded-lg hover:bg-blue-600 transition-all duration-300" onClick={() => setFlag(!flag)}>Remove Component</button>
        {
          flag && <ClassLifeCycle name={"Mohan"}/>
        } */}
        <FunctionLifeCycle/>
     </ErrorBounding>
    
    </>
  )
}

export default App
