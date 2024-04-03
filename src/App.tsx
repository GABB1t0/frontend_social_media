import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Friends from './pages/Profile-Pages/Friends';
import About from './pages/Profile-Pages/About';
import Photos from './pages/Profile-Pages/Photos';
import TimeLine from './pages/Profile-Pages/TimeLine';
import { SavePost } from './pages/SavePosts';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

function App () {
  return (
    <>
   <div className='w-full h-screen'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:section" element={<Profile />} />
          <Route path="/Profile-Pages/Friends" element={<Friends />} />
          <Route path="/Profile-Pages/About" element={<About />} />
          <Route path="/Profile-Pages/Photos" element={<Photos />} />
          <Route path="/Profile-Pages/TimeLine" element={<TimeLine />} />
          <Route path="/SavePosts" element={<SavePost />} />
        </Routes>
      </div>
    </>
  )
}

export default App
