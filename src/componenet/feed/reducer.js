import { SET_ALL_POSTS, DELETE_POST, SET_POST } from "./constants"

const initState = {
    posts:[],
}

export const postReducer = (state=initState, action)=>{
    switch(action.type){
        case SET_ALL_POSTS:
            return {
                ...state,
                posts:action.payload,
            }
        case SET_POST:
            return {
                ...state,
                posts:[action.payload, ...state.posts],
            }
        case DELETE_POST:
            return {
                ...state,
                posts:state.posts.filter(post=>post.id!==action.payload.id)
            }
        default:
            return state
    }
}