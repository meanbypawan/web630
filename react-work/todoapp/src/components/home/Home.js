import Header from "../header/Header";
import Data ,{ taskPriority } from '../data/Data';
import { useState } from "react";
export default function Home(){
    const [taskList,setTaskList] = useState(Data);
    const [priorityList,setPriorityList] = useState(taskPriority);
    const [tabStatus,setTabStatus] = useState("Active"); 
    console.log(priorityList);
    return <>
       <Header/>
       <div className="container mt-5">
          <div className="row mt-3 mb-3">
            <div className="col-12">
                <button disabled={tabStatus=="Active" ? true : false} onClick={()=>setTabStatus("Active")} className="btn btn-danger">Active({taskList.filter((task)=>task.status=="Active").length})</button>
                <button disabled={tabStatus=="Deactive" ? true : false}  onClick={()=>setTabStatus("Deactive")} className="btn btn-success ml-2">Deactive({taskList.filter((task)=>task.status=="Deactive").length})</button>
            </div>
          </div>
          <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Title</th>
                    <th>Priority</th>
                    <th>Created Date</th>
                    <th>Change Task Status</th>
                </tr>
            </thead>
            <tbody>
                {taskList.filter((task)=>task.status==tabStatus).sort((a,b)=>a.priorityId-b.priorityId).map((task,index)=><tr style={{backgroundColor: task.priorityId==1 ? "red" : task.priorityId==2 ? "orange" : 'green'}} key={index}>
                    <td>{index+1}</td>
                    <td>{task.title}</td>
                    <td>{priorityList.find((priorityObj)=>priorityObj.pid==task.priorityId).priorityValue}</td>
                    <td>{task.createdDate}</td>
                    <td>{tabStatus=="Active" ? <button className="btn btn-secondary">Deactive</button> : <button className="btn btn-secondary">Active</button>}</td>
                </tr>)}
            </tbody>
          </table>
       </div>
    </>
}