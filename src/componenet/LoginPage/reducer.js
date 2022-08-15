import { SET_IS_LOGIN } from "./constants"


const initialState = {
    isLoggedIn : false,
}

export const loginReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_IS_LOGIN:
            return {
                ...state,
                isLoggedIn:action.payload
            }
        default:
            return state
    }
}

