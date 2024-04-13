import { useEffect, useState } from "react";
import { getCookie } from "../utils/cookies";
import { nameCookieSessionApp } from "../config";
import { useLocation } from "react-router-dom";
import { useRouter } from "./useRouter";
import { SUPPORTED_ROUTES as routes } from "../config";

interface StateToken{
    token?:string
}

export const useVerifySesion = () => {

  const location = useLocation()
  const { redirectToHome } = useRouter()
  
  useEffect(() => {
    //Recuperamos el token
    let tkn = getCookie(nameCookieSessionApp);
    
    if(
      location.pathname === routes.login() && tkn !== undefined ||
      location.pathname === routes.signUp() && tkn !== undefined){
      redirectToHome()
    }
  },[])

  
} 

// useEffect(() => {
//   //Recuperamos el token
//   let tkn = getCookie(nameCookieSessionApp);
//   setToken(tkn as StateToken)
//   setIsSearchedToken(true)
  
//   if(tkn !== undefined && location.pathname === routes.login()){
//     redirectToHome()
//   }
  
//   if(tkn === undefined){
//     if(location.pathname === routes.login() || location.pathname === routes.signUp()){
//       setIsSearchedToken(false)
//       return
//     } 
//       return redirectToLogin()
//   } 
// },[location, useLocation])

// return {
//   token,
//   isSearchedToken
// }