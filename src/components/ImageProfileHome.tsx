import Badge from "@mui/material/Badge"
import IconButton from "@mui/material/IconButton"
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import EditIcon from '@mui/icons-material/Edit';

export const ImageProfileHome = () => {
  return (
    <div className='bg-white shadow-lg rounded-md h-72 '>
      
      <div className='relative h-2/5'>
        <img src="https://criticalhits.com.br/wp-content/uploads/2021/11/rengoku-1.jpg" alt="MiamorRengoku" className=" rounded-t-md max-h-full w-full" />
        <div className='absolute top-[90px] inset-x-0 flex items-center justify-center xl:top-24'>
        <div className='relative'>
          <img src="../../src/assets/img/blank-profile-picture.jpg" className="rounded-full size-20" />
          
          
        </div>
        <div className='absolute top-12  translate-x-3/4 rounded-full size-9'> 
            <IconButton >
              <Badge  color="primary" >
                <CameraAltIcon fontSize="small"/>
              </Badge>
            </IconButton> 
          </div>

        </div>
    
        
      </div>
      
      <div className='mt-14'>
        
        <div className='px-5'>
          <h1 className="font-bold text-base text-center">Gabriel Antuarez</h1>
          <p className="text-xs text-gray-500 text-justify">Hola mi nombre es Manuel Blanco, soy Ingeniero en informatica, 
            me gusta la programacion, el boxeo y el cafe.</p>
        </div>

        <div className=''>
          <div>
            <IconButton >
              <Badge  color="primary">
                <EditIcon/>
              </Badge>
            </IconButton>
          </div>
        </div>
        
      </div>
    </div>
  );
}