//config get and post funticon with axios
import axios, {AxiosRequestConfig} from 'axios';


const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
})

interface Config {
  headers?: Record<string, string>;
}



export const client = () =>  {
  const get = async(url: string, token:string) => {
    try{
      const res = await api.get(url,{headers: { Authorization: `Bearer ${token}` }})
      return res

    }catch(error:any){

      if(error.response.status == 403 ){
        return "email no verificado"
      }else{
        return error.response.status + " " +error.response.data.message;
      }
      
    }
  }

  const post = async (endPoint:string, body:object = {}, config:AxiosRequestConfig={}) => {
    try{
      const res =  await api.post(endPoint, body, {headers: {...config.headers}})
      return res;
    }catch(error:any){

      if(error.response.status === 422){
        return "Email o contraseña invalida"
      }else{
        return error.response.status + " " +error.response.data.message;  
      }
      
      
    }
  }

  const put = (url: string) => {
    try{
      

    }catch(error){

    }
  }

  const del = (url: string) => {
    try{
      

    }catch(error){

    }
  }

  return {get, post, put, del}

}



export default api;




