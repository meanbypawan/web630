import { configureStore } from "@reduxjs/toolkit";
import MasterSlice from './MasterSlice';
import EvenCounterSlice from "./EvenCounterSlice";
import StudentSlice from "./StudentSlice";
const store = configureStore({
   reducer:{
      data:MasterSlice,
      evenData:EvenCounterSlice,
      students: StudentSlice
   }
});

export default store;

/*
  data :{
    counter: 100
  }
  evenData:{
    evenConter :0
  }
  students:{
    studentList:[{},{},{}]
  }
*/