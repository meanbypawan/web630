import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name: 'test',
   initialState:{
    counter : 100
   },
   reducers:{
    incrementCounter: (state,action)=>{
       state.counter = state.counter + 1;
    },
    decrementCounter: (state,action)=>{}
   }
});
export const {incrementCounter} = slice.actions;
export default slice.reducer;