import {LOGIN_SUCCESS,LOGOUT, LOGIN_FAILURE} from '../actions/types';

let token = localStorage.getItem('token');
console.log("Token is", token)
// const initialState = token ? { loggedIn: true, token } : {};
const initialState = {loggedIn:false, id:''}
//this is important else a lot of the fields will be undefined

const authReducer=(state = initialState, action) => {
    switch (action.type) {
    case LOGIN_SUCCESS:
        return {
        loggedIn: true,
        id: action.id,
        }
    case LOGIN_FAILURE:
        return {loggedIn:false, id:''}
    case LOGOUT:
        return {loggedIn:false, id:''}
    default:
        return state
    }
}

export default authReducer;