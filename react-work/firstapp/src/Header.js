import { Component } from "react";
import './Header.css';
class Header extends Component{
    render(){
        return <header>
            <span className="menu-link active">Home</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="menu-link">About us</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="menu-link">Contact us</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="menu-link">Login</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="menu-link">Register</span>
        </header>
    }
}

export default Header;