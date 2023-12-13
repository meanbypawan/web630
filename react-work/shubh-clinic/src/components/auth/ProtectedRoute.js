import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Auth"
import { useSelector } from "react-redux";

export const ProtectedRoute = ({children})=>{
  const {isUserLoggedIn} = useSelector((state)=>state.user);
  if(isUserLoggedIn)
    return children;
  else
    return <Navigate to="/"/>
}