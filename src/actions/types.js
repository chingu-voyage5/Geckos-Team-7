const ADD_PIN = 'ADD_PIN';
const DELETE_PIN = 'DELETE_PIN';
const ADD_TO_LIKES = 'ADD_TO_LIKES';
const REMOVE_FROM_LIKES = 'REMOVE_FROM_LIKES';

const LOADING_DATA = 'LOADING_DATA';
const LOADED_DATA = 'LOADED_DATA';
const LOADING_FAILURE = 'LOADING_FAILURE';

const ADD_MSG = 'ADD_MSG';
const DELETE_MSG = 'DELETE_MSG';

//Not keeping logginIn and error in global state
//Making them local state of the form
//Hence removing these items from in here

// const LOGIN_REQUEST = 'LOGIN_REQUEST';
// const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';//so that if a user logs in from some other 
//credentials and it's a fail, all values should get reset. 
const LOGOUT = 'LOGOUT'
export {LOADING_DATA, LOADED_DATA, LOADING_FAILURE, ADD_PIN, DELETE_PIN, ADD_TO_LIKES, REMOVE_FROM_LIKES, ADD_MSG, DELETE_MSG, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT}
