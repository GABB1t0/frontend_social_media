import { Navigate } from "react-router-dom";
import { TypeWithKey } from "../models/type-with-key"

export const getValidationError = (errorStatus:number,errorMessage:string) => {
    let result: string | undefined;

    switch (errorStatus) {
        case 401:
            result = window.location.href = '/login';
            break;
        case 403:
            result = window.location.href = '/EmailVerification';
            break;
        case 404:
            alert("404 not found");
            break
        case 422:
            if (errorMessage == "The email has already been taken."){
                alert("El correo ya esta en uso");
            }else{
                alert("Correo o contraseña invalida");
            }
            
            break;
        case 500:
            alert("Error interno del servidor");
            result = window.location.href = '/Login';
            break;
        
        default:
            // Handle other error status codes
            result = errorMessage;
            console.log(errorMessage);
            break;
    }

    return result;
}