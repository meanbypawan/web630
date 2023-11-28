import Header from "../header/Header";
import Data ,{ taskPriority } from '../data/Data';
import { useRef, useState } from "react";
import TaskTable from "../task-table/TaskTable";
import ToDoForm from "../to-do-form/ToDoForm";
export default function Home(){
    
    let taskTitleInput = useRef();
    let taskPriorityInput = useRef();

    const [taskList,setTaskList] = useState(Data); // taskList = [{},{title:'Task-4'},{}]
    const [priorityList,setPriorityList] = useState(taskPriority);
    const [tabStatus,setTabStatus] = useState("Active"); 
    console.log(priorityList);
    
    const changeTaskStatus = (status,task)=>{
       let index =  taskList.findIndex((taskObj)=>taskObj.title == task.title);
       let taskToBeUpdate = taskList[index];
       taskList.splice(index,1);
       taskToBeUpdate.status = status;
       setTaskList([...taskList,taskToBeUpdate]);
    }
    const addTask = ()=>{
        let title = taskTitleInput.current.value;
        let priorityId = taskPriorityInput.current.value;
        let createdDate = new Date();
        createdDate = createdDate.getDate()+"-"+(createdDate.getMonth()+1)+"-"+createdDate.getFullYear();
      
        setTaskList([...taskList,{title,priorityId,status:"Active",createdDate}]);
        
    }
    const removeTask = (task)=>{
       if(window.confirm("Are you sure ?")){
        let index =  taskList.findIndex((taskObj)=>taskObj.title == task.title);
        taskList.splice(index,1);
        setTaskList([...taskList]);
       } 
    }
    return <>
       <Header/>
       <div className="container mt-5">
          <ToDoForm taskTitleInput={taskTitleInput} taskPriorityInput={taskPriorityInput} priorityList={priorityList} setPriorityList={setPriorityList} addTask = {addTask}/>
          
          <TaskTable taskList={taskList} setTaskList={setTaskList} tabStatus={tabStatus} setTabStatus={setTabStatus} priorityList={priorityList} setPriorityList={setPriorityList} changeTaskStatus={changeTaskStatus} removeTask={removeTask}/>
       </div>
    </>
}