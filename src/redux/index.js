import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./movie";


const store = configureStore({
    reducer:{
[movieSlice.reducerPath]:movieSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(movieSlice.middleware)
})
export default store
