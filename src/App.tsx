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
import { EmailVerification } from './pages/EmailVerification';

function App () {
  
  return (
    <>
      <div className='w-full'>
          <Routes>
            {/* {Rutas publicas} */}
            <Route path={'/login'} element={<Login />} />
            <Route path={"/signup"} element={<SignUp />} />
            <Route path="/SavePosts" element={<SavePost />} />
            
            {/* Rutas privadas */}
            <Route path={"/"} element={<Home />} />
            <Route path="/EmailVerification" element={<EmailVerification />} />
            <Route path="/:id/" element={<Profile />}>
              <Route path="friends" element={<Friends />} />
              <Route path="about" element={<About />} />
              <Route path="photos" element={<Photos />} />
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