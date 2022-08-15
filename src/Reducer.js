import { combineReducers } from 'redux'
import { loginReducer } from './componenet/LoginPage/reducer'
import { signUpReducer } from './componenet/SignUp/reducer'

export const reducer = combineReducers({
    login : loginReducer,
    signUp : signUpReducer,
})