import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Treatment } from "./components/treatment/Treatment";
import { OurDoctor } from "./components/doctor/OurDoctor";
import { Contact } from "./components/contact/Contact";
import { SignIn } from "./components/doctor-signin-signup/SignIn";
import { Signup } from "./components/doctor-signin-signup/Signup";
import 'react-toastify/dist/ReactToastify.css';
import { DashBoard } from "./components/dashboard/DashBoard";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { ReceptionList } from "./components/dashboard/ReceptionList";
import { AddReception } from "./components/dashboard/AddReception";
import axios from "axios";
import apis from './components/apis/ApiEndPoints';
import { useDispatch, useSelector } from "react-redux";
import { fetchReception, setReceptionList } from "./components/redux-config/ReceptionSlice";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
function App() {
  
  return <>
  <ToastContainer/>
  <Routes>
    <Route path="/" element={<Home/>}/>
   
    <Route path="/about" element={<About/>}/>
    <Route path="/treatment" element={<Treatment/>}/>
    <Route path="/doctor" element={<OurDoctor/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<ProtectedRoute><DashBoard/></ProtectedRoute>}/>
    <Route path="/reception-list" element={<ProtectedRoute><ReceptionList/></ProtectedRoute>}/>
    <Route path="/add-reception" element={<ProtectedRoute><AddReception/></ProtectedRoute>}/> 
  </Routes>
  </>
}

export default App;
