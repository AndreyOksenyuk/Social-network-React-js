import { followedAPI, userAPI, updateProfileApi } from '../api'
import { stopSubmit } from 'redux-form';

const ADD_POST = 'profile-reduser/ADD-POST';
const NEW_POST = 'profile-reduser/NEW-POST';
const LIKE = 'profile-reduser/LIKE';
const DIS_LIKE = 'profile-reduser/DIS-LIKE';
const USER_PROFILE = 'profile-reduser/USER_PROFILE'
const SET_FOLLOWED_USER = 'profile-reduser/SET-FOLLOWED-USER'
const GET_USER_STATUS = 'profile-reduser/GET_USER_STATUS'
const CHANGE_MY_STATUS = 'profile-reduser/CHANGE_MY_STATUS'
const SET_MY_PHOTOS = 'profile-reduser/SET_MY_PHOTOS'
const FOLLOWED_TOGLE = 'profile-reduser/FOLLOWED_TOGLE'
const SET_IS_PUT_DATA = 'profile-reduser/SET_IS_PUT_DATA'
const SET_DISABLE_BTN = 'profile-reduser/SET_DISABLE_BTN'
const SET_USERID_PROFILE = 'profile-user-id/SET_USERID_PROFILE'
const DELETE_POST_PROFILE = 'profile-reduser/DELETE_POST_PROFILE'
const EDIT_MESSAGE_PROFILE_POST = 'profile-reduser/EDIT_MESSAGE_PROFILE_POST'
const SET_EDIT_POST = 'profile-reduser/SET_EDIT_POST'

let initialState = {
   User: {},
   userStatus: null,
   followedUser: null,
   newPostText: '',
   text: 0,
   isPutData: null,
   disableBtn: null,
   userId: null,
   posts: [{
      id: 1,
      user: 'User test',
      message: 'My first post!)',
      edit: false,
      date: '13.07.2020',
      like: {
         status: true,
         count: 3,
      },
      disLike: {
         status: false,
         count: 0,
      }
   },],
}

let PROFILE_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let d = new Date()
         let month = 1 + d.getUTCMonth()
         let date = d.getDate() + '.' + month + '.' + d.getFullYear()
         let newPost = {
            id: Date.now(),
            user: action.name,
            avatar: action.avatar,
            message: action.post,
            date: date,
            edit: false,
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
            posts: [newPost, ...state.posts],
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
            User: { ...action.user }
         }
      case SET_FOLLOWED_USER:
         return {
            ...state,
            followedUser: action.follow
         }
      case FOLLOWED_TOGLE:
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
      case SET_MY_PHOTOS:
         return {
            ...state,
            User: { ...state.User, photos: { ...action.photos } }
         }
      case SET_IS_PUT_DATA:
         return {
            ...state,
            isPutData: action.boolean,
         }
      case SET_DISABLE_BTN:
         return {
            ...state,
            disableBtn: action.boolean,
         }
      case SET_USERID_PROFILE:
         return {
            ...state,
            userId: action.id,
         }
      case DELETE_POST_PROFILE:
         return {
            ...state,
            posts: state.posts.filter(e => e.id !== action.id)
         }
      case EDIT_MESSAGE_PROFILE_POST:
         return {
            ...state,
            posts: state.posts.map(post => post.id === action.id
               ? { ...post, message: action.message }
               : post
            )
         }
      case SET_EDIT_POST:
         return{
            ...state,
            posts: state.posts.map(post => {
               return post.id === action.id 
               ? {...post, edit: action.boolean} 
               : post
            })
         }
      default:
         return state;
   }
}

export let actionCreatorAddPost = (post, avatar, name) => ({
   type: ADD_POST,
   post, avatar, name
})
export let actionCreatorChangePost = (text) => ({
   type: NEW_POST,
   text: text,
})
export let actionCreatorLike = (index) => ({
   type: LIKE,
   index: index,
})
export let actionCreatorDisLike = (index) => ({
   type: DIS_LIKE,
   index: index,
})
export let setUserProfile = (user) => ({
   type: USER_PROFILE,
   user: user,
})
export let setFollowedUser = (follow) => ({
   type: SET_FOLLOWED_USER,
   follow,
})
export let FollowToggle = () => ({
   type: FOLLOWED_TOGLE,
})
export let UserStatus = (status) => ({
   type: GET_USER_STATUS,
   status
})
export let changeValueMyStatus = (status) => ({
   type: CHANGE_MY_STATUS,
   status,
})
let setMyPhotos = (photos) => ({
   type: SET_MY_PHOTOS,
   photos,
})
let setIsPutData = (boolean) => ({
   type: SET_IS_PUT_DATA,
   boolean
})
let setDisableBtn = (boolean) => ({
   type: SET_DISABLE_BTN,
   boolean
})
export const setUserIdProfile = (id) => ({
   type: SET_USERID_PROFILE,
   id
})

export const deletePostProfileAC = (id) => ({
   type: DELETE_POST_PROFILE,
   id
})
export const setEditMessagePostAC = (id, message) => ({
   type: EDIT_MESSAGE_PROFILE_POST,
   id, message
})
export const setEditPostAC = (boolean, id) => ({
   type: SET_EDIT_POST,
   boolean, id
})


export const getUserProfileThankCreator = (userId) => async (dispatch) => {
   await dispatch(setIsPutData(true))
   await userAPI.getUserProfile(userId).then(data => dispatch(setUserProfile(data)));
   dispatch(setIsPutData(false))
}

export const getFollowThankCreator = (userId) => (dispatch) => {
   followedAPI.getFollow(userId).then(data => dispatch(setFollowedUser(data)));
}

export const getUserStatus = (userId) => (dispatch) => {
   userAPI.getUserStatus(userId).then(data => dispatch(UserStatus(data)));
}

export const saveMyPhotoTC = (photo) => (dispatch) => {
   updateProfileApi.putMyPhoto(photo).then(data => {
      if (data.resultCode === 0) {
         dispatch(setMyPhotos(data.data.photos))
      }
   })
}

export const saveMyDataTC = (data, userId) => async (dispatch) => {
   await dispatch(setDisableBtn(true))
   await updateProfileApi.putMyData(data).then(response => {

      if (response.data.resultCode === 0) {
         userAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
            dispatch(setIsPutData(true))
            dispatch(stopSubmit('UserEditForm', { _error: undefined }))
         });
      }
      else {
         dispatch(stopSubmit('UserEditForm', { _error: response.data.messages[0] }))
      }
   })
   dispatch(setDisableBtn(false))
   setTimeout(() => {
      dispatch(setIsPutData(false))
   }, 5000);
}

export default PROFILE_REDUCER;