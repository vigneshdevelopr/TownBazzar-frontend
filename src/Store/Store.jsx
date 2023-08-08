import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../Reducer/CombineReducers";

export default configureStore({
    reducer: rootReducers,
})