import Axios from "./component/Axios"
import { MyButton } from "./component/HOC"
import Todo from "./component/Todo"
import UseCallback from "./component/UseCallback"
import UseMemo from "./component/UseMemo"
import UseReducer from "./component/UseReducer"

function App() {
  

  return (
    <>
      <div>
        {/* <Axios/> */}
        {/* <UseReducer/> */}
        {/* <Todo/> */}
        {/* <UseMemo/> */}
        {/* <UseCallback/> */}
        <MyButton name="start" />
        <MyButton name="Stop" />
      </div>
    </>
  )
}

export default App
