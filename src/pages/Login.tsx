import { InputSesion } from "../components/ui/InputSession";
import { client } from "../api/client";
import { Link } from 'react-router-dom';
import { FC, useEffect, useState } from "react";
import { getCookie, setCookie } from "../utils/cookies";
import { 
  SUPPORTED_ROUTES, 
  nameCookieSessionApp, 
  ROUTES_API as routesApi
} from '../config';
import { LoginAPIResponse } from "../utils/LoginApiResponse-types";
import { useRouter } from "../hooks/useRouter";


export const Login: FC = () => {

  const clients = client();
  const [logged, setLogged] = useState<boolean>(false)
  const { redirectToHome } = useRouter()

  useEffect(()=>{
    if(logged) redirectToHome()
  },[logged])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const res = await clients.post(routesApi.login(), formData) as LoginAPIResponse;
    const {token} = res.data;
    setCookie(nameCookieSessionApp,token,1000)
    setLogged(true)
  }
  
  return (
    <>
      <div className="h-full w-full flex justify-center ">
        <div className="bg-white w-72 h-96 flex flex-col  mx-auto my-auto justify-center gap-4">
          <p className="text-2xl font-bold text-center">Iniciar Sesion</p>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center w-4/5 mx-auto gap-4">
            <div className="flex flex-col">
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
    </>
    
  );
}