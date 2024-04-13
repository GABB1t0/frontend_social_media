import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Suspense, lazy } from 'react';
import Loader from '../components/Loader';

const TimeLine = lazy( () => import('./Profile-Pages/TimeLine'))
const ProfileBanner = lazy( () => import('../components/Profile/ProfileBanner'))

const Profile = () => {

  const { id } = useParams();
  const location = useLocation()

  return (
    <>
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
    </>
  );
  
};

export default Profile;

{/* <div>
      {
        !dataUser
          ?
          <Loader/>
          :
          <>
            <ProfileBanner data={dataUser} />
            {
              
              location.pathname.includes('about') ||
              location.pathname.includes('photos') ||
              location.pathname.includes('friends')
                ?   
                <Outlet/>
                :
                <Timeline/>   
            }
          </>
      }
      </div> */}
