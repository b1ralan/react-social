import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 5},
        {id: 2, message: 'It\'s my first post', likeCount: 12},
    ],
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = action.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newPost, likeCount: 0}],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(post => post.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            debugger;
            console.log(action.photos)
            return {...state, profile: {...state.profile, photos: action.photos}}

        }
        default:
            return state;

    }
}
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));

}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch,getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        // const er = response.data.messages[0].split("Contacts->")
        // const err = er[1].slice(0,-1) ;

        dispatch(stopSubmit('editProfile',{ _error : response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
        //console.log(err)
    }
}

export default profileReducer;