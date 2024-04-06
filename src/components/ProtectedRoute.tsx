import { ReactNode } from "react"
import { RoutesApp } from "../types.d"
import { Navigate, Outlet } from "react-router-dom"
import { SUPPORTED_ROUTES } from "../config"

type Props = {isAllowed:boolean, redirecTo?:RoutesApp, children?:ReactNode }

const ProtectedRoute = ({isAllowed, redirecTo = SUPPORTED_ROUTES.login() , children }: Props) => {
  if(!isAllowed){
    return <Navigate to={redirecTo}/> 
  }
  return children ? children : <Outlet/>
}

export default ProtectedRoute