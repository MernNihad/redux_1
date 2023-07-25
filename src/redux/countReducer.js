import { createSlice } from "@reduxjs/toolkit"

let INITIALSTATE = {
    count:0,
}



const count = createSlice({
    name: "count",
    initialState:INITIALSTATE,
    reducers:{
        increment(state,action){
            state.count = state.count+1
        },
        decrement(state,action){
            state.count = state.count-1
        },
    }
})

export const { increment,decrement  } = count.actions

export default count.reducer;
