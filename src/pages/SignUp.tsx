import { client} from "../api/client";
import { InputSesion } from "../components/ui/InputSession";
import { Link } from "react-router-dom";
import { 
  SUPPORTED_ROUTES,
  nameCookieSessionApp,
  ROUTES_API as routesApi
} from "../config";
import { setCookie } from "../utils/cookies.ts";
import { useEffect, useState } from "react";
import { useRouter } from "../hooks/useRouter";
import { Data } from "../utils/LoginApiResponse-types.ts";
import { useVerifySesion } from "../hooks/useVerifySesion.ts";

const SignUp: React.FC = () => {
  const clients = client();
  const [logged, setLogged] = useState<boolean>(false)
  const { redirectToHome } = useRouter()

  const { searchingToken } = useVerifySesion();

  useEffect(()=>{
    if(logged) redirectToHome()
  },[logged])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await clients.post(routesApi.signUp(), formData);
      const  data  = res.data as Data
      const { token } = data
      setCookie(nameCookieSessionApp,token,1000)
      setLogged(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    { searchingToken &&
         <div className="h-screen w-full flex justify-center ">
         <div className="bg-white w-72 h-96 flex flex-col  mx-auto my-auto justify-center gap-4">
           <p className="text-2xl font-bold text-center">Registrarse</p>
           <form onSubmit={handleSubmit} className="flex flex-col justify-center w-4/5 mx-auto gap-4">
             <div className="flex flex-col">
               <InputSesion name="name" type="text" placeholder="Ingrese Nombre" required={false} />
               <InputSesion name="lastname" type="text" placeholder="Ingrese Apellido" required={false} />
               <InputSesion name="email" type="email" placeholder="Ingrese Correo" required={false} />
               <InputSesion name="password" type="password" placeholder="Ingrese Contraseña" required={false} />
               <InputSesion name="password_confirmation" type="password" placeholder="Confirmar Contraseña" required={false} />
             </div>
             
             <button type="submit" className="bg-[#fc6232] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >Registrarse</button>
             <p className="text-center">Ya tienes cuenta? <Link to={SUPPORTED_ROUTES.login()} className="text-[#fc6232]">Inicia Sesion</Link></p>
           </form>
         </div>
       </div>
      }
    </>
  );
}

export default SignUp;