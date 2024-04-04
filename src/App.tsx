import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Outlet, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Friends from './pages/Profile-Pages/Friends';
import About from './pages/Profile-Pages/About';
import Photos from './pages/Profile-Pages/Photos';
import TimeLine from './pages/Profile-Pages/TimeLine';
import { SavePost } from './pages/SavePosts';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import { SUPPORTED_ROUTES } from './utils/constants';
import { useEffect, useState } from 'react';
import { getCookie } from './utils/cookies';

interface StateToken{
  token?:string
}

function App () {

  const [token, setToken] = useState<StateToken>();

  useEffect(() => {
    //Recuperamos el token
    let tkn = getCookie();
    setToken(tkn as StateToken)
  },[])

  return (
    <>
    <div className='w-full h-screen'>
        <Routes>
          {/* {Rutas publicas} */}
          <Route path={SUPPORTED_ROUTES.login} element={<Login />} />
          <Route path={SUPPORTED_ROUTES.signUp} element={<SignUp />} />

          {/* Rutas privadas */}
          <Route element={<ProtectedRoute isAllowed={token !== undefined}/>} >
            <Route path={SUPPORTED_ROUTES.home} element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:section" element={<Profile />} />
            <Route path="/Profile-Pages/Friends" element={<Friends />} />
            <Route path="/Profile-Pages/About" element={<About />} />
            <Route path="/Profile-Pages/Photos" element={<Photos />} />
            <Route path="/Profile-Pages/TimeLine" element={<TimeLine />} />
            <Route path="/SavePosts" element={<SavePost />} />
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