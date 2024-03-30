import { client} from "../api/client";
import { InputSesion } from "../components/ui/InputSession";
import { Link } from "react-router-dom";



export const SignUp: React.FC = () => {
  const endPoint = "auth/register";
  const clients = client();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const formData = new FormData(e.currentTarget);
    /* const data = Object.fromEntries(formData);
    console.log(data); */
    const res = await clients.post(endPoint, formData);
    console.log(res)

  }

  return (
    <div className="h-full w-full flex justify-center ">
      <div className="bg-white w-72 h-96 flex flex-col  mx-auto my-auto justify-center gap-4">
        <p className="text-2xl font-bold text-center">Registrarse</p>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center w-4/5 mx-auto gap-4">
          <div className="flex flex-col">
            
            <InputSesion name="name" type="text" placeholder="Ingrese Nombre" required={true} />
            <InputSesion name="lastname" type="text" placeholder="Ingrese Apellido" required={true} />
            <InputSesion name="email" type="email" placeholder="Ingrese Correo" required={true} />
            <InputSesion name="password" type="password" placeholder="Ingrese Contraseña" required={true} />
            <InputSesion name="password_confirmation" type="password" placeholder="Confirmar Contraseña" required={true} />
            
            
          </div>
          

          <button type="submit" className="bg-[#fc6232] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >Registrarse</button>

          <p className="text-center">Ya tienes cuenta? <Link to="/" className="text-[#fc6232]">Inicia Sesion</Link></p>
        </form>
      </div>
      
    </div>
  );
}