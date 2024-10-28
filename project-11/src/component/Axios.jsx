import React, { useEffect, useState } from 'react'
import axios from "axios"

const Axios = () => {

    const[data,setData] = useState([]);
    useEffect(() => {
        // fetch("https://codehelp-apis.vercel.app/api/get-top-courses")
        //     .then(response => response.json)
        //     .then(users => setData(users))
        axios.get("https://jsonplaceholder.typicode.com/users")
             .then(res => setData(res.data))
             .catch(err => console.log(err))
    },[])

  return (
    <div>
        <h1>Using Axios API for data fetching</h1>
        {
            data.map(e => {
                return <li> {e.name }</li>
            })
        }
    </div>
  )
}

export default Axios