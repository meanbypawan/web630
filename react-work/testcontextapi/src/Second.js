import { useContext } from "react";
import { MessageContext } from "./App";
import { Third } from "./Third"

export const Second = ({data})=>{
    const {message,counter} = useContext(MessageContext);
    return <>
      <h1>Second Component....{message}</h1>
      <button>Second : ({counter})</button>
      <hr/>
      <Third data={data}/>
    </>
}