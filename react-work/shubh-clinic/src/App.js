import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Treatment } from "./components/treatment/Treatment";
import { OurDoctor } from "./components/doctor/OurDoctor";
import { Contact } from "./components/contact/Contact";
import { SignIn } from "./components/doctor-signin-signup/SignIn";
import { Signup } from "./components/doctor-signin-signup/Signup";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/treatment" element={<Treatment/>}/>
    <Route path="/doctor" element={<OurDoctor/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<Signup/>}/>
  </Routes>
  </>
}

export default App;
