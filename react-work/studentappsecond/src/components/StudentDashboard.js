import { useState } from 'react';
import StudentData from './Data';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
export default function StudentDashboard(){
    const [studentList,setStudentList] = useState(StudentData);
    const [branchList,setBranchList] = useState(["CS","IT","EC","MECH"]);
    const [roll,setRoll] = useState();
    const [name,setName] = useState();
    const [branch,setBranch] = useState();
    const [mobile,setMobile] = useState();
    const [acitveBranch,setActiveBranch] = useState("all");
    
    const addNewRecord = ()=>{
      setStudentList([...studentList,{roll,name,branch,mobile}]);
    }
    return <>
       <div className="container">
        <StudentForm setRoll={setRoll} setName={setName} setBranch={setBranch} setMobile={setMobile} acitveBranch={acitveBranch} setActiveBranch={setActiveBranch} branchList={branchList} setBranchList={setBranchList} addNewRecord={addNewRecord} studentList={studentList}/>

        <StudentTable studentList={studentList} acitveBranch={acitveBranch}/>
       </div>
    </>
}