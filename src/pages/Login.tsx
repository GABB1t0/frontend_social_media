import { InputSesion } from "../components/ui/InputSession";
import { client } from "../api/client";
import { Link, useNavigate } from 'react-router-dom';
import { FC, useState } from "react";
import { setCookie } from "../utils/cookies";
import { useRouter } from "../hooks/useRouter";
import { 
  SUPPORTED_ROUTES as routesApp, 
  nameCookieSessionApp, 
  ROUTES_API as routesApi
} from '../config';

;

export const Login: FC = () => {
  const [error,setError] = useState(false);

  const clients = client();
  const navigate = useNavigate();
  const alertClass = error ? "flex text-red-500" : "hidden";

  const message = error ? "Usuario o contraseña incorrectos" : "";
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const res: any = await clients.post(routesApi.login(), formData);
    console.log(res)
    const {token} = res;
    setCookie(nameCookieSessionApp,token,1000)
    /* useRouter(routesApp.home()) */

    const resVerified = await clients.get(routesApi.userLogged())
    console.log(resVerified)

    if(resVerified. === true){
      useRouter(routesApp.home())
    }else if{
      navigate("/EmailVerification")
    }
    //handle error resVerified

    
    


  }
  
  return (
    <div className="h-screen w-full flex justify-center ">
      <div className="bg-white w-72 h-96 flex flex-col  mx-auto my-auto justify-center gap-4">
        <p className="text-2xl font-bold text-center">Iniciar Sesion</p>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center w-4/5 mx-auto gap-4">
          <div className="flex flex-col">

            <p className={alertClass}>{message}</p>
            <label htmlFor="email">Correo Electronico</label>
            <InputSesion name="email" type="email" placeholder="Ingrese Correo" required={true} />
            <label htmlFor="password">Contraseña</label>
            <InputSesion name="password" type="password" placeholder="Ingrese Contraseña" required={true} />
          </div>
          <button type="submit" className="bg-[#fc6232] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >Iniciar Sesion</button>
          <p className="text-center">No tienes cuenta? <Link to="/SignUp" className="text-[#fc6232]">Registrate</Link></p>
        </form>
      </div>
    </div>
  );
}