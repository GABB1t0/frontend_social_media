import { Outlet, useLoaderData } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Loader from '../components/Loader';
import useReduxHook from '../hooks/useReduxHook';
import { ROUTES_API } from '../config';
import { client } from '../api/client';
import { addUserProfile, removeUserProfile } from '../app/slices/userProfileSlice';
import { addUser } from '../app/slices/userSlice';
import { RootState } from '../app/store';

const Header = lazy(() => import('../components/Header'));
const TimeLine = lazy( () => import('./Profile-Pages/TimeLine'));
const ProfileBanner = lazy( () => import('../components/Profile/ProfileBanner'));

const Profile = () => {

  const dataLoader = useLoaderData();
  const { myUseSelector, dispatch } = useReduxHook();
  const apiClient = client();

  const userLogged = myUseSelector((state:RootState) => state.user);
  const userProfile = myUseSelector((state:RootState) => state?.userProfile);
  
  const setDataUserProfile = (data) => {
    dispatch(addUserProfile(data[0]));
  }
  
  const setDataUserLogged = (data) => {
    dispatch(addUser(data[0]));
  }

  const fetchData = (request) => {
    Promise.all(request)
      .then(response => {
      //Guardamos datos en el store
        setDataUserLogged(response[0].data)
      })
      .catch(err => {
        //Guardamos el componente a mostrar tras ocurrir el error
        
      })
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const request = [];
    setDataUserProfile(dataLoader);
    
    //Verificamos si los datos del usuario logueado se encuentran en el estado global
    if(userLogged.entities === undefined){
      const fetchUserLogged = apiClient.get(ROUTES_API.userLogged(),signal);
      request.push(fetchUserLogged)
    }

    //FetchData
    fetchData(request)

    return () => {
      abortController.abort()
      dispatch(removeUserProfile())
    }
  },[])

  return (
    <>
      {
        <div id='infiniteScroll' style={{overflow:'auto', height:'100vh'}}>
          <Header navBlock={false}/>
          <Suspense fallback={<div><Loader/></div>}>
            {
              <div>
                {
                  userProfile.entities &&
                  <>
                    <ProfileBanner />
                    {
                      location.pathname.includes('about') ||
                      location.pathname.includes('photos') ||
                      location.pathname.includes('friends')
                        ?   
                        <Outlet/>
                        :
                        <TimeLine/> 
                    }
                  </> 
                }
              </div>      
            }
          </Suspense>
        </div> 
      }
    </>
  );
  
};

export default Profile;


