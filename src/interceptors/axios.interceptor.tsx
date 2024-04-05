import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { getCookie } from "../utils/cookies"

const instance = axios.create({
    baseURL : 'http://127.0.0.1:8000/api'
})

const updateHeader = (request: InternalAxiosRequestConfig) => {
    const token = getCookie();
    request.headers.Authorization = `Bearer 12345678`
    request.headers.Accept = 'application/json'
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
        console.log('error', error)
        return Promise.reject(error)
    }   
)
export const http = instance;
