import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducer/CartReducer";

export default configureStore({
    reducer:{
        cart: CartReducer
    }
})