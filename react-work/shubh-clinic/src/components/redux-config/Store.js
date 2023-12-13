import { configureStore } from "@reduxjs/toolkit";
import ReceptionSlice from "./ReceptionSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer:{
    reception: ReceptionSlice,
    user: UserSlice
  }
});

export default store;