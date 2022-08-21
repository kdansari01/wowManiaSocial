import { SET_IS_LOGIN, SET_USER } from "./constants"

const initialState = {
    isLoggedIn : false,
    user:{}
}

export const loginReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_IS_LOGIN:
            return {
                ...state,
                isLoggedIn:action.payload
            }
        case SET_USER:
            return {
                ...state,
                user:action.payload,
            }
        default:
            return state
    }
}

