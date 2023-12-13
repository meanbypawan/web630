import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apis from '../apis/ApiEndPoints';
export const fetchReception = createAsyncThunk("reception-slice/fetchReception",async (token)=>{
  //let token = sessionStorage.getItem("token");
  let response = await axios.get(apis.receptionList);
  return response.data;
});

const slice = createSlice({
    name: 'reception-slice',
    initialState:{
        receptionList: [],
        isError : false,
        isLoading : false
    },
    reducers:{
       setReceptionList: (state,action)=>{
         state.receptionList = action.payload;
       },
       deleteRecord: (state,action)=>{
         let index = state.receptionList.findIndex((obj)=>obj.id == action.payload);
         state.receptionList.splice(index,1);
        
       }
    },
    extraReducers: (builder)=>{
      builder.addCase(fetchReception.fulfilled,(state,action)=>{
        console.log("Inside builder......");
        let response = action.payload;
        state.isLoading = false;
        if(response.status){
          state.receptionList = response.data;
          state.isError = false;
        }
        else
          state.isError = true;
      })
      .addCase(fetchReception.rejected,(state,action)=>{
        state.isError = true;
        state.isLoading = false;
      }).addCase(fetchReception.pending,(state,action)=>{
        state.isLoading = true;
      })
    }
});
export const {setReceptionList,deleteRecord} = slice.actions;
export default slice.reducer;