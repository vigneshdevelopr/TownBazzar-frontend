import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";

const rootReducers = combineReducers({
    cart: CartReducer
})

export default rootReducers;