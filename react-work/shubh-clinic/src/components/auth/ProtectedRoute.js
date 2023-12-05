import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Auth"

export const ProtectedRoute = ({children})=>{
  if(isLoggedIn())
    return children;
  else
    return <Navigate to="/"/>
}