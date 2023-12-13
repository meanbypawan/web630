import logo from './logo.svg';
import './App.css';
import { First } from './First';
import { createContext, useState } from 'react';

export const MessageContext = createContext();

function App() {
  const [counter,setCounter] = useState(50);
  return <>
    <h1>App Component....</h1>
    <hr/>
    <MessageContext.Provider value={{message:"Hello Firends...",counter:counter,setCounter:setCounter}}>
       <First data = "1000"/>
    </MessageContext.Provider>
  
  </>;
}

export default App;
