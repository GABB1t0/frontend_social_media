import { EndPointApi, RoutesApp } from "./types.d"

export const nameCookieSessionApp = 'cookie_api_social_media_session'

export const ROUTES_API =  {
    userLogged: ():EndPointApi => '/user',
    imagesUser: (user:number):EndPointApi => `/user/view/${user}/images`,
    updateFieldUser: (user:number):EndPointApi => `/user/${user}/update`,
    searchPostsUser: (user:number):EndPointApi => `/posts/${user}`,
    createPost: ():EndPointApi => '/posts/store',
    updatePost: (post:number):EndPointApi => `/posts/${post}/update/`,
    destroyPost: (post:number):EndPointApi => `/posts/${post}/destroy`,
    searchComment: (id_post:number):EndPointApi => `/post/${id_post}/comments`,
    updateComment: (id_comment:number):EndPointApi => `/post/comment/${id_comment}/update`,
    destroyComment: (id_comment:number):EndPointApi => `/post/comment/${id_comment}/destroy`,
    destroyReaction: (reaction:number):EndPointApi => `/reaction/${reaction}/destroy`,
    findFriends: (user:number):EndPointApi => `/friends/${user}/findFriends`,
    findAllMyRequestFriend: ():EndPointApi => '/friends/friendRequest',
    findUsersToRecommend: ():EndPointApi => '/friends/findUsersToRecommend',
    sendRequestFriend: (recipient:number):EndPointApi => `/friends/${recipient}/request`,
    acceptRequestFriend: (friendRequest:number):EndPointApi => `/friends/${friendRequest}/accept`,
    destroyFriendshipRelationship: (user:number):EndPointApi => `/friends/${user}/destroy`,
    login: ():EndPointApi => 'auth/login',
    signUp: ():EndPointApi => 'auth/register',
    logout: ():EndPointApi => 'auth/logout',
    verificationEmailSend: () => 'auth/email/verification-notification'
}

export const SUPPORTED_ROUTES = {
    home: ():RoutesApp => '/',
    profile: ():RoutesApp => '/profile',
    login: ():RoutesApp => '/login',
    signUp: ():RoutesApp => '/SignUp',
}