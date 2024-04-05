import { endPointApi, routesApp } from "./types.d"

export const ROUTES_API =  {
    userLogged: () => '/user',
    imagesUser: (user:number) => `/user/view/${user}/images`,
    updateImageUser: (optionImage:number) => `/user/updateImageUser/${optionImage}`,
    updateFieldUser: (user:number) => `/user/${user}/update`,
    searchPostsUser: (user:number) => `/posts/${user}`,
    createPost: ():endPointApi => '/posts/store',
    updatePost: (post:number) => `/posts/${post}/update/`,
    destroyPost: (post:number) => `/posts/${post}/destroy`,
    searchComment: (id_post:number) => `/post/${id_post}/comments`,
    createComment: (idRecord:number,model:number) => `/post/comment/store/${idRecord}/${model}`,
    updateComment: (id_comment:number) => `/post/comment/${id_comment}/update`,
    destroyComment: (id_comment:number) => `/post/comment/${id_comment}/destroy`,
    createReaction: (user:number, idRecord:number, model:number) => `/reaction/Post/store/${user}/${idRecord}`,
    destroyReaction: (reaction:number) => `/reaction/${reaction}/destroy`,
    findFriends: (user:number) => `/friends/${user}/findFriends`,
    findAllMyRequestFriend: () => '/friends/friendRequest',
    findUsersToRecommend: () => '/friends/findUsersToRecommend',
    sendRequestFriend: (recipient:number) => `/friends/${recipient}/request`,
    acceptRequestFriend: (friendRequest:number) => `/friends/${friendRequest}/accept`,
    destroyFriendshipRelationship: (user:number) => `/friends/${user}/destroy`,
    login: ():endPointApi => 'auth/login',
    signUp: ():endPointApi => 'auth/register',
    verificationEmailSend: () => 'auth/email/verification-notification'
}

export const SUPPORTED_ROUTES = {
    home: ():routesApp => '/',
    profile: ():routesApp => '/profile',
    login: ():routesApp => '/login',
    signUp: ():routesApp => '/signUp'
}