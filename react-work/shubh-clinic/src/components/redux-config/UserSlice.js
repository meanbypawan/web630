import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user-slice",
    initialState:{
        currentUser : null,
        isUserLoggedIn : false,
        token: null
    },
    reducers:{
        setCurrentUser: (state,action)=>{
           state.currentUser = action.payload.currentUser;
           state.token = action.payload.token;
           state.isUserLoggedIn = true;
        }
    }
});
export const {setCurrentUser} = slice.actions;
export default slice.reducer;