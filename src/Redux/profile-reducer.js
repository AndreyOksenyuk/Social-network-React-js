import {followedAPI, userAPI} from '../api'

const ADD_POST = 'ADD-POST';
const NEW_POST = 'NEW-POST';
const LIKE = 'LIKE';
const DIS_LIKE = 'DIS-LIKE';
const USER_PROFILE = 'USER_PROFILE'
const SET_FOLLOWED_USER = 'SET-FOLLOWED-USER'
const GET_USER_STATUS = 'GET_USER_STATUS'
const CHANGE_MY_STATUS = 'CHANGE_MY_STATUS'

let initialState = {
   User: {},
   userStatus: null,
   followedUser: null,
   newPostText: '',
   text: 0,
      posts: [{
            id: 1,
            user: 'Andery',
            message: 'Hello how are you?',
            like: {
               status: true,
               count: 56,
            },
            disLike: {
               status: false,
               count: 3,
            }
         },
         {
            id: 2,
            user: 'Dimon',
            message: 'Hello! I am ok) And you?',
            like: {
               status: false,
               count: 8,
            },
            disLike: {
               status: false,
               count: 0,
            }
         },
         {
            id: 3,
            user: 'Ivan',
            message: 'My first posts...',
            like: {
               status: false,
               count: 5,
            },
            disLike: {
               status: true,
               count: 5,
            }
         },
         {
            id: 4,
            user: 'Ivan',
            message: 'Bye!',
            like: {
               status: false,
               count: 2,
            },
            disLike: {
               status: true,
               count: 7,
            }
         }
      ],
}

let  PROFILE_REDUCER = (state = initialState, action) => {
   switch(action.type){
      case ADD_POST: 
         let newPost = {
            id: Date.now(),
            user: 'User name',
            message: action.post,
            like: {
               status: false,
               count: 0,
            },
            disLike: {
               status: false,
               count: 0,
            }
         }
         return {
            ...state,
            posts: [newPost, ...state.posts ],
         }
      case NEW_POST: 
         return {
            ...state,
            newPostText: action.text,
         }

      case LIKE: 
         if (!state.posts[action.index].like.status) {
              return {
                 ...state,
                 ...state.posts[action.index] = {
                     ...state.posts[action.index], 
                     like: {
                        status: true,
                        count: state.posts[action.index].like.count + 1,
                     },
                     disLike: {
                        status: false,
                        count: state.posts[action.index].disLike.status === true 
                           ? state.posts[action.index].disLike.count - 1
                           : state.posts[action.index].disLike.count,
                     }
                 },
                 text: state.posts[action.index].like.count,
              }
         } else return {
               ...state,
               ...state.posts[action.index] = {
                  ...state.posts[action.index],
                  like: {
                     status: false,
                     count: state.posts[action.index].like.count - 1,
                  },
               },
               text: state.posts[action.index].like.count,
            }
      case DIS_LIKE: 
         if (!state.posts[action.index].disLike.status) {
              return {
                 ...state,
                 ...state.posts[action.index] = {
                     ...state.posts[action.index], 
                     disLike: {
                        status: true,
                        count: state.posts[action.index].disLike.count + 1,
                     },
                     like: {
                        status: false,
                        count: state.posts[action.index].like.status === true 
                           ? state.posts[action.index].like.count - 1
                           : state.posts[action.index].like.count,
                     }
                 },
                 text: state.posts[action.index].disLike.count,
              }
         } else return {
               ...state,
               ...state.posts[action.index] = {
                  ...state.posts[action.index],
                  disLike: {
                     status: false,
                     count: state.posts[action.index].disLike.count - 1,
                  },
                  
               },
               text: state.posts[action.index].disLike.count,
            }
      case USER_PROFILE:
         return {
            ...state,
            User: {...action.user}
         }
      case SET_FOLLOWED_USER:
         return {
            ...state,
            followedUser: action.follow
         }
      case 'FOLLOWED_TOGLE':
         return {
            ...state,
            followedUser: state.followedUser = !state.followedUser
         }
      case GET_USER_STATUS:
         return {
            ...state,
            userStatus: action.status
         }      
      case CHANGE_MY_STATUS:
         return {
            ...state,
            userStatus: action.status,
         }
      default:
         return state;
   }
}

export let actionCreatorAddPost = (post) => ({
   type: ADD_POST,
   post,
})
export let actionCreatorChangePost = (text) => ({
   type: NEW_POST,
   text: text,
})
export let actionCreatorLike = (index) => ({
   type: 'LIKE',
   index: index,
})
export let actionCreatorDisLike = (index) => ({
   type: 'DIS-LIKE',
   index: index,
})
export let setUserProfile = (user) => ({
   type: 'USER_PROFILE',
   user: user,
})
export let setFollowedUser = (follow) => ({
   type: 'SET-FOLLOWED-USER',
   follow,
})
export let FollowToggle = () => ({
   type: 'FOLLOWED_TOGLE',
})
export let UserStatus = (status) => ({
   type: 'GET_USER_STATUS',
   status
})
export let changeValueMyStatus = (status) => ({
   type: 'CHANGE_MY_STATUS',
   status,
})

export const getUserProfileThankCreator= (userId) => {
   return (dispatch) => {
      userAPI.getUserProfile(userId).then(data => dispatch(setUserProfile(data)));
   }
}
export const getFollowThankCreator= (userId) => {
   return (dispatch) => {
      followedAPI.getFollow(userId).then(data => dispatch(setFollowedUser(data)));
   }
}
export const getUserStatus= (userId) => {
   return (dispatch) => {
      userAPI.getUserStatus(userId).then(data => dispatch(UserStatus(data)));
   }
}


export default PROFILE_REDUCER;