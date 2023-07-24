import { createSlice } from "@reduxjs/toolkit"
import { useState } from "react"

let INITIALSTATE = {
    count:0,
    admin:true
}



const count = createSlice({
    name: "count",
    initialState:INITIALSTATE,
    reducers:{
        increment(state,action){
            console.log('first')
        }
    }
})

export const { increment  } = count.actions

export default count.reducer;
