//config get and post funticon with axios
import axios from 'axios';

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
})



export const client = () =>  {
  const get = (url: string) => {
    try{


    }catch(error){

    }
  }

  const post = async (endPoint:string, body:object = {}, config:object={}) => {
    try{
      const res =  await api.post(endPoint, body, {headers: {...config.headers}})
      return res;
    }catch(error){
      return error.response
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




