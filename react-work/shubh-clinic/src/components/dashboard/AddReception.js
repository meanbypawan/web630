import { useState } from "react"
import { Header } from "../header/Header"
import axios from "axios";
import apis from '../apis/ApiEndPoints';
export const AddReception = ()=>{
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword]  = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [raddress,setRAddress] = useState();
    const save = async (event)=>{
       event.preventDefault();
       try{ 
         let token = sessionStorage.getItem("token");
         let response = await axios.post(apis.saveReception,{name,email,password,phoneNumber,raddress},{
            headers: { Authorization: `Bearer ${token}` }
         });
         console.log(response.data);
       }
       catch(err){
        console.log(err);
       }
    }
    return <>
      <div className="hero_area">
        <Header/>
      </div>
      <section className="book_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={save}>
              <h4>
                Sign <span>Up</span>
              </h4>
              <div className="form-row ">
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Name </label>
                  <input onChange={(event) => setName(event.target.value)} type="text" className="form-control" id="inputPatientName" placeholder="Enter name" />
                </div>
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Phone number </label>
                  <input onChange={(event) => setPhoneNumber(event.target.value)} type="number" className="form-control" id="inputPatientName" placeholder="Enter phone number" />
                </div>
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Email </label>
                  <input onChange={(event) => setEmail(event.target.value)} type="text" className="form-control" id="inputPatientName" placeholder="Email id" />
                </div>

              </div>
              <div className="form-row ">
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Password </label>
                  <input onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" id="inputPatientName" placeholder="Enter password" />
                </div>
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Password </label>
                  <input onChange={(event) => setRAddress(event.target.value)} type="text" className="form-control" id="inputPatientName" placeholder="Enter address" />
                </div>
              </div>
              <div className="btn-box">
                <button type="submit" className="btn ">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
}