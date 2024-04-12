import { SUPPORTED_ROUTES } from "./config"

export type RoutesApp = '/'
    | '/login'
    | '/signup'
    | '/profile';

export type EndPointApi = '/user'
    | `find/${number}/user`
    | `/user/view/${number}/images`
    | `/user/${number}/update`
    | `/posts/${number}?page=${number}`
    | '/posts/store'
    | `/posts/${number}/update/`
    | `/posts/${number}/destroy`
    | `/post/${number}/comments`
    | `/post/comment/${number}/update`
    | `/post/comment/${number}/destroy`
    | `/reaction/${number}/destroy`
    | `/friends/${number}/findFriends`
    | '/friends/friendRequest'
    | '/friends/findUsersToRecommend'
    | `/friends/${number}/request`
    | `/friends/${number}/accept`
    | `/friends/${number}/destroy`
    | 'auth/login'
    | 'auth/register'
    | 'auth/logout'
    | 'auth/email/verification-notification'
    
