import { SUPPORTED_ROUTES } from "./config"

export type RoutesApp = '/'
    | '/login'
    | '/signup'
    | '/profile';

export type EndPointApi = '/user'
    | `find/${string}/user`
    | `/user/view/${string}/images`
    | `/user/${string}/update`
    | `/posts/${string}/${number}?page=${number}`
    | '/posts/store'
    | `/posts/${string}/update/`
    | `/posts/${string}/destroy`
    | `/post/${string}/comments`
    | `/post/comment/${string}/update`
    | `/post/comment/${string}/destroy`
    | `/reaction/${string}/destroy`
    | `/friends/${string}/findFriends`
    | '/friends/friendRequest'
    | '/friends/findUsersToRecommend'
    | `/friends/${string}/request`
    | `/friends/${string}/accept`
    | `/friends/${string}/destroy`
    | 'auth/login'
    | 'auth/register'
    | 'auth/logout'
    | 'auth/email/verification-notification'
    
