import { http } from '../interceptors/axios.interceptor';
import { endPointApi } from '../types.d';

export const client = () =>  {
  
  const get = async (endPoint:endPointApi)=> {
    return http.get(endPoint)
  }

  const post = async (endPoint:endPointApi, body?:FormData)=> {
    return http.post(endPoint, body)
  }

  const put = async (endPoint:endPointApi, body?:FormData)=> {
    return http.put(endPoint, body)
  }

  const del = async (endPoint:endPointApi) => {
    return http.delete(endPoint)
  }

  return {get, post, put, del}
}





