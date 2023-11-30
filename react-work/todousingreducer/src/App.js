
import { useReducer } from 'react';
import TaskData, {taskPriority} from './data/Data';

const initialState = {
  taskList: TaskData,
  priorityList: taskPriority,
  taskTitle: "",
  taskPriority: ''
}

const reducer = (state,action)=>{
  if(action.type == 'set-title'){
    return {...state, taskTitle: action.payload};
  }
  else if(action.type == 'set-priority'){
   return {...state, taskPriority: action.payload};
  }
  else if(action.type == 'add-task'){
    let createdDate = new Date();
    createdDate = createdDate.getDate()+"-"+(createdDate.getMonth()+1)+"-"+createdDate.getFullYear();
    return {...state,taskList:[...state.taskList,{title:state.taskTitle,priorityId:state.taskPriority,createdDate,status: 'Active'}]};
  }
  else 
    return state;
}
function App() {
   const [tasks,dispatch] = useReducer(reducer,initialState);

   return <>
     <div className="container">
       <div className="row mt-2 mb-2">
        <div className="col-md-6">
           <input onChange={(event)=>dispatch({type:'set-title',payload:event.target.value})} type='text' placeholder='Enter Task Title' className="form-control"/>
        </div>
        <div className="col-md-6">
          <select onChange={(event)=>dispatch({type:'set-priority',payload:event.target.value})} className="form-control">
            {tasks?.priorityList.map((priorityObj,index)=><option value={priorityObj.pid} key={index}>{priorityObj.priorityValue}</option>)}
          </select>
        </div>
       </div>
       <div className="row mt-2 mb-2">
        <div className="col-12">
          <button onClick={()=>dispatch({type:'add-task'})} className="btn btn-success">ADD</button>
        </div>
       </div>
       <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.taskList.map((taskObj,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{taskObj.title}</td>
            <td>{tasks.priorityList.find((priorityObj)=>priorityObj.pid==taskObj.priorityId).priorityValue}</td>
            <td>{taskObj.createdDate}</td>
          </tr>)}
        </tbody>
       </table>
     </div>
   </>
}

export default App;
