import React from 'react'

function Object(){
    let user = {
        name:"Roshan",
        age:24 ,  address:"Marathali",
        email:"roshan@gmail.com",
        mobile:898989878
    }

    let userDetails = []
    // fori n
    for(let key in user){
        userDetails.push(<p>{key}:{user[key]}</p>)
    }

    return (
        <>
        {/* {user} */}
        <h1>name:{user.name}</h1>
        <h1>name:{user.age}</h1>
        <h1>name:{user.address}</h1>

        {userDetails}
        </>
    )
}



export default Object