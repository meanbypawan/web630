import { useDispatch, useSelector } from "react-redux"
import { incrementCounter } from "./MasterSlice";

export default function First(){
    const {counter} = useSelector((state)=>state.data);
    const dispatch = useDispatch();
    const increment = ()=>{
      dispatch(incrementCounter());
    }
    return <>
       <button onClick={increment}>{counter}</button>
    </>
}