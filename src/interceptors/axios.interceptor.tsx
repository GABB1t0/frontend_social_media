import axios, { InternalAxiosRequestConfig } from "axios"
import { getCookie } from "../utils/cookies"
import { getValidationError } from "../utils/get-validation-error";
import { nameCookieSessionApp } from "../config";



const instance = axios.create({
    baseURL : 'http://127.0.0.1:8000/api'
})

const updateHeader = (request: InternalAxiosRequestConfig) => {
    const token = getCookie(nameCookieSessionApp);
    request.headers.Authorization = `Bearer ${token}`
    return request
}

instance.interceptors.request.use((request) => {
    if(request.url?.includes('login') || request.url?.includes('signUp')) return request
    return updateHeader(request)   
})

instance.interceptors.response.use(
    
    (response) => {
        return response
    },

    (error) =>{
    
        alert(getValidationError(error.code,error.response.status))
        if(error.response.status === 403) {
        }
        //console.log('error', getValidationError(error.code))
        return Promise.reject(error)
    }   
)
export const http = instance;
