import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import WrapperSuspense from "../components/WrapperSuspense";
import NotFound from "../components/errors/NotFound";
import { client } from "../api/client";
import { ROUTES_API, nameCookieSessionApp } from "../config";
import { getCookie } from "../utils/cookies";

const Login = lazy(() => import('../pages/Login'))
const SignUp = lazy(() => import('../pages/SignUp'))
const Profile = lazy(() => import('../pages/Profile'));
const Friends = lazy(() => import('../pages/Profile-Pages/Friends'));
const About  = lazy(() => import('../pages/Profile-Pages/About'));
const Photos = lazy(() => import('../pages/Profile-Pages/Photos'));
const EmailVerification = lazy(() => import('../pages/EmailVerification'));
const Home = lazy(() => import('../pages/Home'));

const apiClient = client();

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <WrapperSuspense />,
        errorElement:<NotFound/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'signup',
                element:<SignUp/>
            },
            {
                index:true,
                loader: async() => {
                    console.log('pidieron el Home')
                    const tkn = getCookie(nameCookieSessionApp);
                    if(tkn === undefined) window.location.href = '/login';
                    return true;                   
                },
                element: <Home/>,
            },
            {
                path:'/EmailVerification', 
                element:<EmailVerification />
            },
            {
                path:'/profile/:id/',
                element:<Profile/>,
                loader: async ({params}) => {

                    console.log('pidieron el Profile')
                    const tkn = getCookie(nameCookieSessionApp);
                    if(tkn === undefined) window.location.href = '/login';

                    let data = await apiClient.get(ROUTES_API.findUser(`${params.id}`))
                    .then(response => response.data)
                    .catch( error => error)

                    if(data.status == 404){
                        throw {statusText: "Not Found",  status: 404 };
                    }

                    if(data.status == 401){
                        window.location.href = '/login';
                    }

                    if(data.status == 500){
                        throw { statusText: "error server",  status: 500 };
                    }

                    return data ; 
                },
                children : [
                    {
                        path:"friends", 
                        element:<Friends/>,
                    },
                    {
                        path:"about", 
                        element:<About />,
                        
                    },
                    {
                        path:"photos", 
                        element:<Photos />,
                    } 
                ]
            }
        ]
    }
]);
               