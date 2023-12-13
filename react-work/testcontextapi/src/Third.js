import { useContext } from "react";
import { MessageContext } from "./App";

export const Third = ({data})=>{
    const {message,counter} = useContext(MessageContext);
    return <>
      <h1>Third Component....{data}  {message}</h1>
      <button>Third : ({counter})</button>
    </>
}