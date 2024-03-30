/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const ProfileBanner = () =>{


  /* const handleClick = (data) =>{
        pageSelected(data)
        
    } */
    
  return(
    <>
      <div className = "flex flex-col content-center  bg-white shadow-md mb-5" >

        <div className = "" >
          <img src="https://live.staticflickr.com/2857/10509570106_5a0699853b_c.jpg" alt="cover Photo" className="rounded-none	aspect-[16/9] md:w-full md:aspect-[16/6]"/>
        </div>

        

        <div className="mx-auto flex relative h-44 justify-center md:justify-start md:w-11/12  ">

        

          <div className="flex flex-col self-end pb-5 gap-2 md:w-full	">

            <div className='flex justify-center md:justify-center md:w-full md:gap-3'>
              <div className= "absolute -top-16 inset-x-0 flex items-center justify-center sm:-top-20 md:static">

                <img src='/src/assets/img/blank-profile-picture.jpg' alt="Profile Photo" className=" size-32 rounded-full sm:size-36 md:size-40" />

              </div>

              <div className='w-full flex justify-center  md:w-4/5 md:self-center md:items-center md:justify-between '>
                <p className='hidden text-4xl font-semibold md:flex'>Gabriel Antuarez</p>

                <button className= "bg-red-500 w-2/4 rounded-3xl p-1 text-white  gap-3 flex justify-center hover:scale-110 hover:bg-red-600 md:h-8 md:w-28">
                  <PersonAddIcon/>
                  Add
                </button>
              </div>

              
            </div>

            

              
            <ul className='flex flex-row gap-2 text-sm md:self-center md:gap-8 md:text-lg'>
              <li className='font-semibold  transition hover:text-red-400' >
                <Link to='/Profile/TimeLine'>
                  Timeline
                </Link>
              </li>
                            
              <li className='font-semibold  transition hover:text-red-400' >
                <Link to='/Profile/About'>
                  About
                </Link>
              </li>

              <li className='font-semibold  transition hover:text-red-400' >
                <Link to='/Profile/Photos'>
                  Photos
                </Link>
              </li>

              <li className='font-semibold  transition hover:text-red-400' >
                <Link to='/Profile/Friends'>
                  Friends
                </Link>
              </li>  
            </ul>
          </div>    
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;