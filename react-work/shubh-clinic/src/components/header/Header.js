import { Link, useNavigate } from "react-router-dom"
import { isLoggedIn } from "../auth/Auth"

export const Header = ()=>{
    const navigate = useNavigate();
    const signout = ()=>{
      sessionStorage.clear(); 
      navigate("/");
    }
    return <header className="header_section">
      <div className="header_top">
        <div className="container">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt=""/>
            </a>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>
            {isLoggedIn() ? <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/add-reception">Add Receptionist <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/reception-list"> Reception List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">Appointment List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">Profile</Link>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container">
                 <i className="fa fa-user" aria-hidden="true"></i>
                  <span onClick={signout}>
                    Sign-out
                  </span>
                <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div> : <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about"> About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/treatment">Treatment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/doctor">Doctors</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="testimonial.html">Testimonial</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link"to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container">
                <Link to="/signin">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Sign-in
                  </span>
                </Link>
                <Link to="/signup">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Sign Up
                  </span>
                </Link>
                <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>}
            
          </nav>
        </div>
      </div>
    </header>
}