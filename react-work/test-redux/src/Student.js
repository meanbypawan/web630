import { useDispatch, useSelector } from "react-redux"
import { addStudent, deleteStudent } from "./StudentSlice";

export const Student = ()=>{
    const {studentList} = useSelector((state)=>state.students);
    const dispatch = useDispatch();
    return <>
      <h1>Student component...</h1>
      <button onClick={()=>dispatch(addStudent({id:104,sname:"xyz",mobile:'9009111445'}))}>Add New Record</button> <br/>
      <table border='1' width='100%'>
        <tr>
            <td>S.no</td>
            <td>Id</td>
            <td>Name</td>
            <td>Mobile</td>
            <td>Delete</td>
        </tr>
        {studentList.map((student,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{student.id}</td>
            <td>{student.sname}</td>
            <td>{student.mobile}</td>
            <td><button onClick={()=>dispatch(deleteStudent(student.id))}>Delete</button></td>
        </tr>)}
      </table>
    </>
}