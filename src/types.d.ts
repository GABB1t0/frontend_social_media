import { SUPPORTED_ROUTES } from "./config"

export type routesApp = '/'
    | '/login'
    | '/signUp'
    | '/profile'

export type endPointApi = `/user` 
    | `/user/view/${number}/images`
    | `/user/${number}/update`
    | `/posts/${number}`
    | `/posts/store`
    | `auth/login`
    | `auth/register`


// updatePost: (post:number) => `/posts/${post}/update/`,
// destroyPost: (post:number) => `/posts/${post}/destroy`,
// searchComment: (id_post:number) => `/post/${id_post}/comments`,
// createComment: (idRecord:number,model:number) => `/post/comment/store/${idRecord}/${model}`,
// updateComment: (id_comment:number) => `/post/comment/${id_comment}/update`,
// destroyComment: (id_comment:number) => `/post/comment/${id_comment}/destroy`,
// createReaction: (user:number, idRecord:number, model:number) => `/reaction/store/${user}/${idRecord}/${model}`,
// destroyReaction: (reaction:number) => `/reaction/${reaction}/destroy`,
// findFriends: (user:number) => `/friends/${user}/findFriends`,
// findAllMyRequestFriend: () => '/friends/friendRequest',
// findUsersToRecommend: () => '/friends/findUsersToRecommend',
// sendRequestFriend: (recipient:number) => `/friends/${recipient}/request`,
// acceptRequestFriend: (friendRequest:number) => `/friends/${friendRequest}/accept`,
// destroyFriendshipRelationship: (user:number) => `/friends/${user}/destroy`,
// login: () => 'auth/login',
// signUp: () => 'auth/register',
// verificationEmailSend:() => 'auth/email/verification-notification'