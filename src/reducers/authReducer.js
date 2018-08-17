import {LOGIN_SUCCESS,LOGOUT} from '../actions/types';

let token = localStorage.getItem('token');
console.log("Token is", token)
// const initialState = token ? { loggedIn: true, token } : {};
const initialState = {loggedIn:false, token:''}
//this is important else a lot of the fields will be undefined

const authReducer=(state = initialState, action) => {
    switch (action.type) {
    case LOGIN_SUCCESS:
        return {
        loggedIn: true,
        token: action.token,
        }
    case LOGOUT:
        return {loggedIn:false, token:''}
    default:
        return state
    }
}

export default authReducer;