import {LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAILURE} from '../actions/types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const authReducer=(state = initialState, action) => {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
        loggingIn: true,
        user: action.user
        };
    case LOGIN_SUCCESS:
        return {
        loggedIn: true,
        user: action.user,
        error: ''
        };
    case LOGIN_FAILURE:
        return {
          error: action.error
        };
    // case userConstants.LOGOUT:
    //     return {};
    default:
        return state
    }
}

export default authReducer;