import { useReducer, useState } from "react";

const intialState = 500;
const reducer = (state,action)=>{
    switch(action.type){
        case "increment": 
           return state + action.payload;
        case "decrement": 
           return state - action.payload;    
    }
};
export const ThirdExample = ()=>{
    const [counter,dispatch] = useReducer(reducer,intialState);
    const [value,setValue] = useState(0);
    return <>
      <center>
        <p>{counter}</p>
         <input onChange={(event)=>setValue(event.target.value)} type="text" placeholder="Enter Any Number"/><br/><br/>
         <button onClick={()=>dispatch({type:'increment',payload:value*1})}>Increment</button>
         <button onClick={()=>dispatch({type:'decrement', payload:value*1})}>Decrement</button>
      </center>
    </>
}