import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Increment } from '../action/CountAction';
import { Decrement } from '../action/CountAction';

const Child1 = () => {
    const count = useSelector((store) => store.count);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className='mt-5 text-2xl font-semibold text-blue-700'>Redux Child</h1>
            <h1 className='mt-5 ml-5 text-2xl font-semibold text-blue-700'>Count: {count}</h1>
            <h1 className='mt-5 ml-5 text-2xl font-semibold text-blue-700'>Name: {user.name}</h1>
            <div className='space-x-5'>
                
                <button onClick={() => dispatch(Increment())}>
                 Increment
                </button>
                
                <button onClick={() => dispatch(Decrement())}>
                 Decrement
                </button>
            </div>
        </div>
    );
}

export default Child1;

{/* <button 
                    className='bg-blue-500 px-2 py-1 rounded-lg text-white hover:bg-blue-600 transition-all duration-300' 
                    onClick={() => dispatch({ type: "increment" })}>
                    Increment
                </button>
                <button  
                    className='bg-blue-500 px-2 py-1 rounded-lg text-white hover:bg-blue-600 transition-all duration-300' 
                    onClick={() => dispatch({ type: "decrement" })}>
                    Decrement
                </button> */}
















// import React from 'react'
// import {useSelector, useDispatch} from 'react-redux'

// const Child1 = () => {

//     let count = useSelector((store) => store.countReducer)
//     let name = useSelector((store => store.userReducer))
//     console.log(count)
//     const dispatch = useDispatch();
//   return (
//     <div>
//         <h1 className='mt-5 text-2xl font-semibold text-blue-700'>Redux Child</h1>
//         <h1 className='mt-5 ml-5 text-2xl font-semibold text-blue-700'>{count}</h1>
//         <h1 className='mt-5 ml-5 text-2xl font-semibold text-blue-700'>{name}</h1>
//         <div className='space-x-5'>
//          <button className='bg-blue-500 px-2 py-1 rounded-lg text-white hover:bg-blue-600 transition-all duration-300' onClick={() => dispatch({type: "increment"})}>Increment</button>
//          <button  className='bg-blue-500 px-2 py-1 rounded-lg text-white hover:bg-blue-600 transition-all duration-300' onClick={() => dispatch({type: "decrement"})}>Decrement</button>
//         </div>
//     </div>
//   )
// }

// export default Child1