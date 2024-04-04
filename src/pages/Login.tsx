import { InputSesion } from "../components/ui/InputSession";
import { client } from "../api/client";
import Cookies from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Global } from "@emotion/react";
import { AxiosResponse } from "axios";







export const Login: React.FC = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  
  const alertClass = error ? "flex text-red-600" : "hidden"

  const endPoint = "auth/login";
  const clients = client();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const formData = new FormData(e.currentTarget);
    /* const data = Object.fromEntries(formData);
    console.log(data); */
    const res: string | any = await clients.post(endPoint, formData);
    console.log(res)


      if(res.status == 200 ){
        const {token} = res.data;
        const cookie = new Cookies();
        //Guardar el token en la cookie
        cookie.set('cookie_api_social_media_session', token);

        //verificar email
        const tokenVerificar = cookie.get('cookie_api_social_media_session');
        const endPointVerificar = "user";
        const resVerificar: string | any = await clients.get(endPointVerificar,tokenVerificar);

        if(resVerificar.status == 200){
          navigate('/Home')
        }else{
          navigate('/EmailVerification')
          alert(resVerificar)
          
        }

      }else{
        setError(true)
        setMessage(res)
      }
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