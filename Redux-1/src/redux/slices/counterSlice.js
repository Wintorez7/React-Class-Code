import { createSlice } from '@reduxjs/toolkit'//inbuilt method tpp create slice

const counterSlice = createSlice({
    name: "counter", //name of the slice(to reduce)
    initialState: { value: 0},
    reducers:{
        increment:(state,action) => { 
            return{...state, value:state.value + 1}
        },
        decrement:(state,action) => { 
            return{...state, value:state.value - 1}
        },
        inputValue:(state,action) => {
            console.log(action)
            return {...state, value:state.value + Number(action.payload)}
        }
    }
})

export default counterSlice.reducer //reducer reference to use in store
export const { increment, decrement, inputValue} = counterSlice.actions // action to use in dispatch