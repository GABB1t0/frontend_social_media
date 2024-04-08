import './App.css'

import { Home } from './pages/Home'
import { Outlet, Route, Routes, redirect, useLocation } from 'react-router-dom';
import Profile from './pages/Profile';
import Friends from './pages/Profile-Pages/Friends';
import About from './pages/Profile-Pages/About';
import Photos from './pages/Profile-Pages/Photos';
import TimeLine from './pages/Profile-Pages/TimeLine';
import { SavePost } from './pages/SavePosts';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import { SUPPORTED_ROUTES, nameCookieSessionApp } from './config';
import { useEffect, useState } from 'react';
import { getCookie } from './utils/cookies';
import { EmailVerification } from './pages/EmailVerification';
import { useRouter } from './hooks/useRouter';


interface StateToken{
  token?:string
}

/**
 * Descripcion del problema: Cuando se monta el componente APP se realiza la busqueda del token
 * Para posteriormente evaluar si el usuario puede acceder a las rutas protegidas en base a su existencia(Token).
 * 
 * Cuando se realiza un redireccionamiento que no obliga a renderizar nuevamente el componente APP, no se 
 * se ejecuta el codigo que extrae el token de las cookies para luego realizar la validacion, por lo que si el token vence, el usuario
 * podra acceder a las rutas protegidas hasta que se recargue completamente la pagina o realice una peticion al backend.
 * 
 * Objetivo: Integrar una nueva funcionalidad que se integre perfectamente con la ya existente para evaluar la validez del token cuando
 * se realice un redireccionamiento que no obligue a recargar la pagina 
 * 
 */

function App () {
  
  const [token, setToken] = useState<StateToken>();
  const [isSearchedToken, setIsSearchedToken ] = useState<boolean>(false)
  const location = useLocation()

  const { redirectToLogin, redirectToHome } = useRouter()
  
  useEffect(() => {
    //Recuperamos el token
    let tkn = getCookie(nameCookieSessionApp);
    
    setToken(tkn as StateToken)
    setIsSearchedToken(true)

    if(
      location.pathname === '/login' && tkn !== undefined ||
      location.pathname === '/SignUp' && tkn !== undefined){
      redirectToHome()
    }
  },[])

  useEffect(() => {
    //Recuperamos el token
    let tkn = getCookie(nameCookieSessionApp);
    setToken(tkn as StateToken)
    setIsSearchedToken(true)
    
    if(tkn !== undefined && location.pathname === '/login'){
      redirectToHome()
    }
    
    if(tkn === undefined){
      if(location.pathname === '/login' || location.pathname === '/SignUp'){
        setIsSearchedToken(false)
        return
      } 
        return redirectToLogin()
    } 
  },[location, useLocation])

  return (
    <>
    <div className='w-full '>
        <Routes>

          {/* {Rutas publicas} */}
          <Route path={SUPPORTED_ROUTES.login()} element={<Login />} />
          <Route path={SUPPORTED_ROUTES.signUp()} element={<SignUp />} />

          {/* Rutas privadas */}
          <Route element={<ProtectedRoute isSearchedToken={isSearchedToken} isAllowed={token !== undefined}/>} >
            <Route path={SUPPORTED_ROUTES.home()} element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:section" element={<Profile />} />
            <Route path="/Profile-Pages/Friends" element={<Friends />} />
            <Route path="/Profile-Pages/About" element={<About />} />
            <Route path="/Profile-Pages/Photos" element={<Photos />} />
            <Route path="/Profile-Pages/TimeLine" element={<TimeLine />} />
            <Route path="/SavePosts" element={<SavePost />} />
            <Route path="/EmailVerification" element={<EmailVerification />} />
          </Route>
      </Routes>
    </div>
    </>
  )
}

export default App


// <Route
// path="/"
// element={
// <>
//   <Header />
//   <Outlet /> {/* Renderiza las rutas secundarias anidadas aquí */}
// </>
// }
// >
// </Route>