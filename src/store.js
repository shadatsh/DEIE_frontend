import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slices/productsSlice";
import authReducer from "./slices/authSlice";




const reducer = combineReducers({
    productsState: productsReducer,
    authState: authReducer
  
})


const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;