import { Component } from "react";
import "./App.css";
import StudentList from "./components/StudentList";
export default class App extends Component{
  render(){
    return <>
      <div className="container-fluid app-header">
         <h3>Student App</h3>
      </div>
      <StudentList/>
    </>
  }
}