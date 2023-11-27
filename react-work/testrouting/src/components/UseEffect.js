import { useEffect, useState } from "react";
import Header from "./Header";

export default function UseEffect(){
    const [counter,setCounter] = useState(500);
    const [evenCounter, setEvenCouter] = useState(0);
    useEffect(()=>{
        console.log("useEffect 1st flever");
    });
    useEffect(()=>{
        //
        console.log("useEffect with [] array");
    },[]);
    useEffect(()=>{
        console.log("3rd Flever..");
        return ()=>{
            console.log("useEffect with clean up code");
        }
    },[]);
    useEffect(()=>{
      console.log("Hello Friends....");
    },[evenCounter]);
    return <>
      <Header/>
      <hr/>
      <h1>Use Effect Hooks</h1>
      <br/>
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
      <button onClick={()=>setEvenCouter(evenCounter+2)}>Even Counter : {evenCounter}</button>
    </>
}