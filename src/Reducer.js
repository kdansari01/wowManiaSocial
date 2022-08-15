import { combineReducers } from 'redux'
import { loginReducer } from './componenet/LoginPage/reducer'

export const reducer = combineReducers({
    login : loginReducer,
})