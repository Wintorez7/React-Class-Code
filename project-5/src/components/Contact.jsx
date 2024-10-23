import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    let userData = {username:"Mahesh", password:"Mahesh011"}
    const navigate=useNavigate()
    const [formdata, setFormdata] = useState({
        username: "",
        password: ""
    });

   const submitHandler = (event) => {
        event.preventDefault();
        console.log(formdata)
        if(userData.username === formdata.username && userData.password === formdata.password){
            navigate("/")
        }
    }

  return (
    <div>
        <h2>Contact from</h2>
        <form onSubmit={submitHandler}>
            <label>Username :</label>
            <input  className='broder-2 border-black' type="text" onChange={(e) => setFormdata({...formdata, username: e.target.value})}/><br/>

            <label>Password :</label>
            <input onChange={(e) => setFormdata({...formdata, password: e.target.value})} className='broder-2 border-black' type="password"/><br/>

            <button >Submit</button>
        </form>
    </div>
  )
}

export default Contact