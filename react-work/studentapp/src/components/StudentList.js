import { Component } from "react";
import dataList from "./Data.js";
export default class StudentList extends Component{
    constructor(){
        super();
        this.state = {
            studentList : dataList
        }
    }
    removeRecord = (roll)=>{
       if(window.confirm("Are you sure ?")){ 
        let index =  this.state.studentList.findIndex((student)=>student.roll == roll);
        this.state.studentList.splice(index,1);
        this.setState({studentList: [...this.state.studentList]});
       }
    }
    render(){
        return <>
          <hr/>
          <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Roll</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Mobile</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.studentList.map((student,index)=><tr key={index}>
                        <td>{student.roll}</td>
                        <td>{student.name}</td>
                        <td>{student.branch}</td>
                        <td>{student.mobile}</td>
                        <td><button onClick={()=>this.removeRecord(student.roll)} className="btn btn-outline-danger">Remove</button></td>
                    </tr>)}
                </tbody>
            </table>
          </div>
        </>
    }
}