import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../types";

export const useRouter = (route:RoutesApp) => {
    const navigate = useNavigate()
    navigate(route)
}