import { SUPPORTED_ROUTES } from "./config"

export type routesApp = '/'
    | '/login'
    | '/signUp'
    | '/profile'

export type endPointApi = '/user'
    | `/user/view/${number}/images`
    | `/user/${number}/update`
    | `/posts/${number}`
    | '/posts/store'
    | `/posts/${post}/update/`
    | `/posts/${post}/destroy`
    | `/post/${id_post}/comments`
    | `/post/comment/store/${idRecord}/${model}`
    | `/post/comment/${id_comment}/update`
    | `/post/comment/${id_comment}/destroy`
    | `/reaction/store/${user}/${idRecord}/${model}`
    | `/reaction/${reaction}/destroy`
    | `/friends/${user}/findFriends`
    | '/friends/friendRequest'
    | '/friends/findUsersToRecommend'
    | `/friends/${recipient}/request`
    | `/friends/${friendRequest}/accept`
    | `/friends/${user}/destroy`
    | 'auth/login'
    | 'auth/register'
    | 'auth/email/verification-notification'
