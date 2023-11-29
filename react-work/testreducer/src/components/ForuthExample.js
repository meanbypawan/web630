import { useReducer } from "react"
const initialeState = [2,3,7,5,7,3,9,10];
const reducer = (state,action)=>{
   if(action.type=='even'){
      return state.filter((element)=>element%2==0);
   }
   else if(action.type == 'odd'){
    return state.filter((element)=>element%2==1);
   }
   else 
     return initialeState;
}
export const FourthExample = ()=>{
    const [arr,dispatch] = useReducer(reducer,initialeState);
    return <>
     <h1>Fourth Example</h1>
     <hr/>
     <center>
       <p>{arr.map((element,index)=><span>{element}&nbsp;&nbsp;</span>)}</p> 
       <button onClick={()=>dispatch({type:'even'})}>Filter Even</button>
       <button onClick={()=>dispatch({type:'odd'})}>Filter Odd</button>
       <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
     </center>
    </>
}