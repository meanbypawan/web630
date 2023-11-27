import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import UseEffect from './components/UseEffect';
import ProductList from './components/ProductList';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='useEffect' element={<UseEffect/>}/>
      <Route path='/product-list' element={<ProductList/>}/>
    </Routes>
  </>
}

export default App;
