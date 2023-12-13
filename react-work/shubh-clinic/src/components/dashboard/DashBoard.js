import { useSelector } from "react-redux"
import { Header } from "../header/Header"

export const DashBoard = ()=>{
    //let currentUser = JSON.parse(sessionStorage.getItem("current-user"));
    const {currentUser} = useSelector((state)=>state.user);
    return <>
      <div className="hero_area">
        <Header/>
      </div>
      <section className="book_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <h4>
                Profile
              </h4>
              <div className="form-row ">
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Id </label>
                  <input  type="text" className="form-control" id="inputPatientName" value={currentUser.id}/>
                </div>
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Phone number </label>
                  <input  type="number" value={currentUser.phoneNumber} className="form-control" id="inputPatientName" placeholder="Enter phone number" />
                </div>
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Email </label>
                  <input value={currentUser.email} type="text" className="form-control" id="inputPatientName" placeholder="Email id" />
                </div>

              </div>
              <div className="form-row ">
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Name </label>
                  <input  type="text" value={currentUser.name} className="form-control" id="inputPatientName" placeholder="Enter password" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
}