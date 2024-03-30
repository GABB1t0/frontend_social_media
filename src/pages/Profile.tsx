import Friends from './Profile-Pages/Friends';
import Photos from './Profile-Pages/Photos';
import About from './Profile-Pages/About';
import TimeLine from './Profile-Pages/TimeLine';
import { useParams } from 'react-router-dom';

import ProfileBanner from '../components/Profile/ProfileBanner';
import MenuSecundary from '../components/Profile/MenuSecundary';



const Profile = () => {

  let { section } = useParams<{ section?: string }>();

  return (
    <>
      
        
      <div>
        <ProfileBanner />
          
        {section != 'TimeLine' && <MenuSecundary section={section}/>}
        
        <div>
          {section == 'TimeLine' && <TimeLine/> }
          {section == 'Friends' && <Friends/> }
          {section == 'Photos' && <Photos/> }
          {section == 'About' && <About/> }
        </div>        
      </div>
      
    </>
  );
};

export default Profile;