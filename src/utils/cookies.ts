import Cookies from "universal-cookie"

const cookie = new Cookies;

export const getCookie = ():string|undefined  => {
    const token:string|undefined = cookie.get('cookie_api_social_media_session')
    return token
}

type PropsToken = {token:string, maxAge?:number}
export const setCookie = ({token, maxAge = 60}: PropsToken):void => { 
    cookie.set('cookie_api_social_media_session', token, { maxAge : maxAge }); 
}