import { useEffect, useState } from 'react';
import FilterData from './component/FilterData'
import { apiUrl } from './data'
import {toast} from "react-toastify"

function App() {
  
  const [courses,setCourses] = useState([])

  const fetchData = async() => {
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();

      setCourses(output.data) 
    }
    catch(error){
      toast.error("something went wrong")
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <FilterData courses={courses}/>
    </>
  )
}

export default App
