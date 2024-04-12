import { Outlet, useLocation, useParams } from 'react-router-dom';
import ProfileBanner from '../components/Profile/ProfileBanner';
import { Header } from '../components/Header';
import Timeline from './Profile-Pages/TimeLine';
import { useEffect, useState } from 'react';
import { client } from '../api/client';
import {
  ROUTES_API as routesApi
} from '../config'
import Loader from '../components/Loader';

const Profile = () => {

  const [loading, setLoading] = useState(false)
  const { id } = useParams();
  const location = useLocation()
  const clients = client()

  useEffect(() => {
    setLoading(true)
    Promise.allSettled([
      clients.get(routesApi.findUser(Number(id))),
      clients.get(routesApi.findFriends(Number(id)))
    ]).then( values => {
      setLoading(false)
      const [
        {value : v1},
        {value :v3},
      ] = values
    }).catch(error => {
      console.log(error)
      setLoading(false)
    })
  },[])

  return (
    <>
      <Header navBlock={false}/>
      <div>
      {
        loading
          ?
          <Loader/>
          :
          <>
            <ProfileBanner />
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
      </div>
    </>
  );
  
};

export default Profile;
