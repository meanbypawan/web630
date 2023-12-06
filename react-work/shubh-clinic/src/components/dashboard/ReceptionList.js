import { useEffect, useReducer } from "react"
import { Header } from "../header/Header"
import axios from "axios";
import apis from "../apis/ApiEndPoints";
import { toast } from "react-toastify";

export const ReceptionList = ()=>{
    const inititalState = {
        receptionList: null
    }    
    const reducer = (state,action)=>{
      if(action.type=="set-reception-list"){
        return {...state,receptionList:action.payload}
      }
    }
    const [data,dispatch] = useReducer(reducer,inititalState);
    useEffect(()=>{
        loadReceptionList();
    },[]);

    const loadReceptionList = async ()=>{
       try{ 
        let token = sessionStorage.getItem("token");
        let response = await axios.get(apis.receptionList,{
            headers: { Authorization: `Bearer ${token}` }
        });
        if(response.data.status){
          dispatch({type:"set-reception-list",payload:response.data.data});
        }
        else
          toast.error("Oops! something went wrong...");
       }
       catch(err){
        console.log(err);
       } 
    }
    return <>
       <div className="hero_area">
        <Header/>
       </div>
       <table className="table">
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
            {data.receptionList?.map((receptionObj,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{receptionObj.id}</td>
                <td>{receptionObj.name}</td>
                <td>{receptionObj.phoneNumber}</td>
                <td>{receptionObj.password}</td>
                <td>{receptionObj.raddress}</td>
                <td>Doctor</td>
                <td colSpan="2">
                    <button className="btn btn-danger">Delete</button>
                    <button className="btn btn-info ml-2">Edit</button>
                </td>
                
            </tr>)}
        </tbody>
       </table>
    </>
}