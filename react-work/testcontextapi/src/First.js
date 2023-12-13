import { useContext } from "react"
import { Second } from "./Second"
import { MessageContext } from "./App"

export const First = ({data})=>{
    const {message,counter,setCounter} = useContext(MessageContext);
    return <>
      <h1>First Component....{message}</h1>
      <button onClick={()=>setCounter(counter+1)}>First : ({counter})</button>
      <hr/>
      <Second data={data}/>
    </>
}