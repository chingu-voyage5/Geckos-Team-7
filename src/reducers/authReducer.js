import {LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT} from '../actions/types';

let token = localStorage.getItem('token');
console.log("Token is", token)
const initialState = token ? { loggedIn: true, token } : {};

const authReducer=(state = initialState, action) => {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
        loggingIn: true,
        user: action.user,
        error:''
        };
    case LOGIN_SUCCESS:
        return {
        loggedIn: true,
        token: action.token,
        error: ''
        };
    case LOGIN_FAILURE:
        return {
          error: action.error
        };
    // case userConstants.LOGOUT:
    //     return {};
    case LOGOUT:
        return {loggedIn:false, token:''}
    default:
        return state
    }
}

export default authReducer;