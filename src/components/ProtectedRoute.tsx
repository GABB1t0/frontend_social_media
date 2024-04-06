import { ReactNode } from "react"
import { RoutesApp } from "../types.d"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { SUPPORTED_ROUTES } from "../config"

type Props = {isAllowed:boolean, redirecTo?:RoutesApp, children?:ReactNode, isSearchedToken:boolean }

const ProtectedRoute = ({isAllowed, redirecTo = SUPPORTED_ROUTES.login() , children, isSearchedToken }: Props) => {

  if(!isSearchedToken) return

  if(!isAllowed){
    return <Navigate to={redirecTo}/> 
  }

  return children ? children : <Outlet/>
}

export default ProtectedRoute