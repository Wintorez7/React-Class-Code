import { useState } from 'react'
import FilterData from './component/FilterData'


function App() {
  
  const[countryData, setCountryData] = useState([
    
      {
          name:"India",
          cities:["Mumbai","Delhi","Bengluru","Bihar"]
      },
      {
          name:"America",
          cities:["Texas","NewYork","California","bruklin"]
      },
      {
          name:"UK",
          cities:["London","Lords","Oval","Bermighm"]
      },
      {
          name:"China",
          cities:["Beijing","Wuhan","Hongkong","Sanghai"]
      },
  ]
  )

  return (
    <>
      <FilterData countryData={countryData} setCountryData={setCountryData}/>
    </>
  )
}

export default App
