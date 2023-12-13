import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'student-slice',
    initialState:{
        studentList:[
            {
                id: 100,
                sname: 'ABC',
                mobile: '9009111222'
            },
            {
                id: 101,
                sname: 'DEF',
                mobile: '9009111333'
            
            },
            {
                id: 102,
                sname: 'GHI',
                mobile: '9009111444'
            
            },
            {
                id: 103,
                sname: 'JKL',
                mobile: '9009111555'
            
            }
        ]
    },
    reducers:{
        deleteStudent: (state,action)=>{ // action{payload:100}
          let id = action.payload;
          let index = state.studentList.findIndex((student)=>student.id == id);
          state.studentList.splice(index,1);
        },
        addStudent: (state,action)=>{ // action.payload = {}
             let newStudent  = action.payload;
             state.studentList.push(newStudent);
        }
    }
});
export const {deleteStudent, addStudent} = slice.actions;
export default slice.reducer;