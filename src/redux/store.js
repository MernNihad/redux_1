import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import cartReducer from "./cartReducer";

export const store = configureStore({
    reducer:{
        jasty:countReducer,
        count:cartReducer,
    }
})

