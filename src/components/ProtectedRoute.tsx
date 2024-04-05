import { ReactNode } from "react"
import { routesApp } from "../utils/types.d"
import { Navigate, Outlet } from "react-router-dom"

type Props = {isAllowed:boolean, redirecTo?:routesApp, children?:ReactNode }

const ProtectedRoute = ({isAllowed, redirecTo = 'login', children }: Props) => {
  if(!isAllowed){
    return <Navigate to={redirecTo}/> 
  }
  return children ? children : <Outlet/>
}

export default ProtectedRoute