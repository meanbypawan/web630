import { Component } from "react";

export default class TableComponent extends Component{
    sayHello = ()=>{
        window.alert("Hello Friends....");
    }
    sayGoodMorning = ()=>{
        window.alert("Good Morning Friends...");
    }
    passingMessage = (message)=>{
        window.alert(message);
    }
    removeRecord = (id)=>{
        window.alert(id);
    }
    render(){
        let studentList = [
            {
                id: 1001,
                name: "ABC",
                branch: "CS",
                mobile: 9009111222
            },
            {
                id: 1002,
                name: "DEF",
                branch: "IT",
                mobile: 9009111333
            },
            {
                id: 1003,
                name: "GHI",
                branch: "EC",
                mobile: 9009111444
            },
            {
                id: 1004,
                name: "JKL",
                branch: "CS",
                mobile: 9009111555
            },
            {
                id: 1005,
                name: "MNO",
                branch: "IT",
                mobile: 9009111666
            },
            {
                id: 1006,
                name: "PQR",
                branch: "EC",
                mobile: 9009111777
            }
        ];
        return <>
          <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>BRANCH</th>
                    <th>MOBILE</th>
                    <th>REMOVE</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map((student,index)=><tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.branch}</td>
                    <td>{student.mobile}</td>
                    <td><button onClick={()=>{this.removeRecord(student.id)}} className="btn btn-outline-danger">REMOVE</button></td>
                </tr>)}
            </tbody>
          </table>
          <hr/>
          <button onClick={this.sayHello} className="ml-2 btn btn-success">Say Hello</button>
          <button onClick={this.sayGoodMorning} className="ml-2 btn btn-secondary">Say good morning</button>
          <button onClick={()=>{this.passingMessage('Welcome')}} className="btn btn-warning ml-2">Passing Message</button>
        </>
    }
}