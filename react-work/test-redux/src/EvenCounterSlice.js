import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'even-slice',
    initialState:{
        evenCounter : 0
    }
});


export default slice.reducer;