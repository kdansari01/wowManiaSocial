import { SET_IS_SIGNUP } from "./constatn";

const initialState = {
//   firstname: "",
//   lastname: "",
//   username: "",
//   dob: "",
//   email: "",
//   password: "",

   isSignUp:false
};



export const signUpReducer=(state = initialState,action)=>{
    switch(action.type){
        case SET_IS_SIGNUP:
        return {
            ...state,
            isSignUp:action.payload
        }
        default:
            return state
    }

}
