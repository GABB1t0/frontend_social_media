import { http } from '../interceptors/axios.interceptor';
import { EndPointApi } from '../types.d';

export const client = () =>  {
  
  const get = async (endPoint:EndPointApi)=> {
    return http.get(endPoint)
  }

  const post = async (endPoint:EndPointApi, body?:FormData)=> {
    return http.post(endPoint, body)
  }

  const put = async (endPoint:EndPointApi, body?:FormData)=> {
    return http.put(endPoint, body)
  }

  const del = async (endPoint:EndPointApi) => {
    return http.delete(endPoint)
  }

  return {get, post, put, del}
}





