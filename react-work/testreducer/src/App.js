import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import { FirstExample } from './components/FirstExample';
import { SecondExample } from './components/SecondExample';
import { ThirdExample } from './components/ThirdExample';
import { FourthExample } from './components/ForuthExample';
/*
   operation to be perfomed on counter state
     increment
     decrement  -----> action :-  action is object having two properties {type,payload}
     
     action :-  {type:'increment', payload: input}

     dispatch(action)
*/
function App() {
  return <>
    {/* <FirstExample/> */}
    {/* <SecondExample/> */}
    {/* <ThirdExample/> */}
    <FourthExample/>
  </>
}

export default App;
