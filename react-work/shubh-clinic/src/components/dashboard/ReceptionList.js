import { useEffect, useReducer } from "react"
import { Header } from "../header/Header"
import axios from "axios";
import apis from "../apis/ApiEndPoints";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord, setReceptionList } from "../redux-config/ReceptionSlice";

export const ReceptionList = ()=>{
    // const inititalState = {
    //     receptionList: null
    // }    
    // const reducer = (state,action)=>{
    //   if(action.type=="set-reception-list"){
    //     return {...state,receptionList:action.payload}
    //   }
    //   else if(action.type=="delete-reception"){
        // let index = state.receptionList.findIndex((obj)=>obj.id == action.payload);
        // state.receptionList.splice(index,1);
        // return {...state};
    //   }
    // }
    //const [data,dispatch] = useReducer(reducer,inititalState);
    const { receptionList,isLoading,isError } = useSelector((state)=>state.reception);
    const dispatch = useDispatch();
    
    const deleteReception = async (receptionId)=>{
        console.log(receptionId);
        let token = sessionStorage.getItem("token"); 
        console.log(token);
        if(window.confirm("Are you sure ?")){
        let response = await axios.put(apis.deleteReception+receptionId,null,{
            headers: { Authorization: `Bearer ${token}`}
        });
        console.log(response.data);
        if(response.data.status){
           dispatch(deleteRecord(receptionId));
        }
    }
       
    }
    return <>
       <div className="hero_area">
        <Header/>
       </div>
       {isLoading ? <h1>Data is Loading</h1> :  <table className="table">
        <thead>
            <tr>
                <th>Sr.no</th>
                <th>Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Password</th>
                <th>Address</th>
                <th>Doctor</th>
                <th colSpan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            {receptionList?.map((receptionObj,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{receptionObj.id}</td>
                <td>{receptionObj.name}</td>
                <td>{receptionObj.phoneNumber}</td>
                <td>{receptionObj.password}</td>
                <td>{receptionObj.raddress}</td>
                <td>Doctor</td>
                <td colSpan="2">
                    <button onClick={()=>deleteReception(receptionObj.id)} className="btn btn-danger">Delete</button>
                    <button className="btn btn-info ml-2">Edit</button>
                </td>
                
            </tr>)}
        </tbody>
       </table>}
      
    </>
}