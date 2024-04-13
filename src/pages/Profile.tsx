import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Suspense, lazy } from 'react';
import Loader from '../components/Loader';
import { useVerifySesion } from '../hooks/useVerifySesion';

const TimeLine = lazy( () => import('./Profile-Pages/TimeLine'))
const ProfileBanner = lazy( () => import('../components/Profile/ProfileBanner'))

const Profile = () => {

  const { id } = useParams();
  const location = useLocation()

  const { searchingToken } = useVerifySesion()

  return (
    <>
      {
        searchingToken && <div id='infiniteScroll' style={{overflow:'auto', height:'100vh'}}>
          <Header navBlock={false}/>
          <Suspense fallback={<div><Loader/></div>}>
            <>
              <ProfileBanner id={`${id}`} />
              {
                location.pathname.includes('about') ||
                location.pathname.includes('photos') ||
                location.pathname.includes('friends')
                  ?   
                  <Outlet/>
                  :
                  <TimeLine id={`${id}`}/>   
              }
            </>
          </Suspense>
        </div> 
      }
    </>
  );
  
};

export default Profile;

