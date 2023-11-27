import { Link } from "react-router-dom";

export default function Header(){
    return <>
      <header>
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span>About us</span></Link>
        <Link to="/contact"><span>Contact us</span></Link>
        <Link to="/portfolio"><span>Portfolio</span></Link>
        <Link to="/gallery"><span>Gallery</span></Link>
        <Link to="/signin"><span>Sign in</span></Link>
        <Link to="/signup"><span>Sign up</span></Link>
        <Link to="/useEffect"><span>UserEffect</span></Link>
        <Link to="/product-list"><span>Product List</span></Link>
      </header>
    </>
}