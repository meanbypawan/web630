import { Header } from "../header/Header"

export const SignIn = ()=>{
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
                Sign <span>In</span>
              </h4>
              <div className="form-row ">
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Email Id </label>
                  <input type="text" className="form-control" id="inputPatientName" placeholder="Enter email id" />
                </div>
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Password </label>
                  <input type="password" className="form-control" id="inputPatientName" placeholder="Enter password" />
                </div>
              </div>
              <div className="btn-box">
                <button type="submit" className="btn ">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
}