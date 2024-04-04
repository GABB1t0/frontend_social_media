import { http} from '../interceptors/axios.interceptor';

type conf = { 
  headers?: {}
}

export type bodyRequest = {body?:FormData}

export const client = () =>  {
  
  const get = async (endPoint:string, conf:conf = {})=> {

    const config = {
      headers : {...conf?.headers},
    }
    
    return http.get(endPoint, config)
  }

  const post = async (endPoint:string, body:bodyRequest, conf:conf = {})=> {

    const config = {
      headers : {...conf?.headers},
    }

    return http.post(endPoint, body, config)
  }

  const put = async (endPoint:string, body:bodyRequest = {}, conf:conf = {})=> {

    const config = {
      headers : {...conf?.headers},
    }

    return http.put(endPoint, body, config)
  }

  const del = async (endPoint:string, conf:conf = {})=> {

    const config = {
      headers : {...conf?.headers},
    }

    return http.delete(endPoint, config)
  }

  return {get, post, put, del}

}





