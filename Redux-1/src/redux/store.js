import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"

const store = configureStore({
    reducer:{//connect all reducer here by giving there name and references
        counter:counterReducer
    }
})

export default store