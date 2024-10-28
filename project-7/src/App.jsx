import FilterData from './component/FilterData'
import {countryData} from "./data"


function App() {
  

  return (
    <>
      <FilterData countryData={countryData}/>
    </>
  )
}

export default App
