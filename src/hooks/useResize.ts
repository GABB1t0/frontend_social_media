import { useEffect,  useState } from 'react';

const useResize = () =>{
  const [cols,setCols] = useState(0);

  const funcion = (param) => {
        
    const parametros = {
      400 : 2,
      600 : 3,
      820 : 4,
      1024 : 5
    };

    return parametros[param];
  };
    
    
  useEffect(()=>{

    const handleResize = () => {
      let windowWidth = window.innerWidth;
            
      if(windowWidth < 400){
                
        setCols(funcion(400));

      }else if(windowWidth < 600){
                
        setCols(funcion(600));

      }else if(windowWidth < 820){
                
        setCols(funcion(820));

      }else if(windowWidth < 1024){
            
        setCols(funcion(1024));
      }else{
        setCols(7);
      }
    };

    window.addEventListener('resize',handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);
    
  return cols;
};

export default useResize;