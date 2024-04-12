import './App.css'
import { Home } from './pages/Home'
import { Route, Routes} from 'react-router-dom';
import Profile from './pages/Profile';
import Friends from './pages/Profile-Pages/Friends';
import About from './pages/Profile-Pages/About';
import Photos from './pages/Profile-Pages/Photos';
import { SavePost } from './pages/SavePosts';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import { EmailVerification } from './pages/EmailVerification';
import { useVerifySesion } from './hooks/useVerifySesion';

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
  const { token, isSearchedToken } = useVerifySesion() 

  return (
    <>
      <div className='w-full'>
          <Routes>
            {/* {Rutas publicas} */}
            <Route path={'/login'} element={<Login />} />
            <Route path={"/signup"} element={<SignUp />} />
            <Route path="/SavePosts" element={<SavePost />} />
            
            {/* Rutas privadas */}
              <Route element={<ProtectedRoute isSearchedToken={isSearchedToken} isAllowed={token !== undefined}/>} >
                
                <Route path={"/"} element={<Home />} />
                <Route path="/EmailVerification" element={<EmailVerification />} />
                <Route path="/:id/" element={<Profile />}>
                  <Route path="friends" element={<Friends />} />
                  <Route path="about" element={<About />} />
                  <Route path="photos" element={<Photos />} />
                </Route>
              </Route>
             <Route path='*' element={<p>No existe esta pagina</p>}/> 
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