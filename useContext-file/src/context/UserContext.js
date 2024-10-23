import { createContext, useContext } from "react";

//context declartion
const userContext = createContext()

// wrapper Component
export function UserContextWrapper(props){
    let userData = {name:"Rohit", age:36, address:"Mumbai"}
    return(
        <userContext.Provider value={userData}>
            {props.children}
        </userContext.Provider>
    )
}

// custom hook
export function useUserData(){
    return useContext(userContext)
}





















// import React from 'react'
// import { createContext } from 'react'

// const myContext = createContext()

// //providing
// export function myContextWrapper(props){

//     return(
//         <>
//             <myContext.Provider>
//                 {props.children}
//             </myContext.Provider>
//         </>
//     )

// }

// // consuming
// export 
