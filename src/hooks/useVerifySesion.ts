import { useEffect, useState } from "react";
import { getCookie } from "../utils/cookies";
import { nameCookieSessionApp } from "../config";
import { useLocation } from "react-router-dom";
import { useRouter } from "./useRouter";
import { SUPPORTED_ROUTES as routes } from "../config";

export const useVerifySesion = () => {

  const location = useLocation()
  const [searchingToken, setSearchingToken] = useState(false)
  const { redirectToHome, redirectToLogin } = useRouter()
  
  useEffect(() => {
    //Recuperamos el token
    let tkn = getCookie(nameCookieSessionApp);
    
    if(
      location.pathname === routes.login() && tkn !== undefined ||
      location.pathname === routes.signUp() && tkn !== undefined){
      setSearchingToken(true)
      return redirectToHome()
    }

    if(tkn === undefined){
      if( location.pathname === routes.login()  || location.pathname === routes.signUp() ){
        setSearchingToken(true)
        return
      }
      setTimeout(()=>redirectToLogin(),1000)
      return
    }

    setSearchingToken(true)
  },[])
  
  return {
    searchingToken
  }
} 
