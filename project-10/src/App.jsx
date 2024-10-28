  import { useEffect, useState } from "react"



  function App() {

    const url = "https://randomuser.me/api/"
    const[data, setData] = useState([])

    useEffect(() => {
      fetch(url).then((response) => response.json())
          .then(users => setData(users))
          .catch(error => console.log(error))
    },[])

    return (
    <div className='w-full h-screen flex justify-center items-start mt-5'>
        <h1 className="text-2xl">Fetching Data from API in React</h1>
        {console.log("render")}
        <thead border={1} style={{borderCollapse:"collapse"}} cellpadding={"10"}>
          <tr>
            <td>id</td>
            <td>username</td>
            <td>email</td>
            <td>phone</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map(ele => {
              
            })
          }
        </tbody>
    </div>
    )
  }

  export default App
