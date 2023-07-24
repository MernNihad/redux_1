import { createSlice } from "@reduxjs/toolkit"
import { useState } from "react"

let INITIALSTATE = {
    cart:0
}



const cart = createSlice({
    name: "cart",
    initialState:INITIALSTATE,
    reducers:{
        increment(state,action){
            console.log('first')
        }
    }
})

export const { increment  } = cart.actions

export default cart.reducer;
