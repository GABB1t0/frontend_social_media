import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../types";

export const useRouter = () => {
    
    const navigate = useNavigate()

    const redirectToHome = () => {
        navigate('/')
    }

    const redirectToLogin = () => {
        navigate('/login')
    }

    const redirectToProfile = (user:number) => {

    }

    return {
        redirectToHome,
        redirectToLogin
    }
}