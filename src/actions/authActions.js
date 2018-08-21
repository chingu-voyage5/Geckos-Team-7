import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from './types';
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';


//Asych action creator to login user
function login({email, password}) {
  const url = '/api/users/login';
  console.log("email is", email);
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    //mode: 'no-cors',
    body: JSON.stringify({ email, password })
};
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    //dispatch(requestLogin(email))

    return fetch(url, config)
      .then(response =>{
        console.log("response is", response);
        if (!response.ok) {
          console.log("Wiping login slate clear in case of re-login");
          localStorage.clear('token');
          dispatch(failureLogin("Failure"));//So as to reset store auth creds
          //if logged in person tries to log in as some other user
          return Promise.reject("Password and email do not match")//uncomment
        } 
        return response.json()
            }).then(data =>  {
              console.log("data returned on login", data);
              const token = data.token;
              console.log("token is", token);
          // If login was successful at the server side
          // then do 3 things: 
          // Set the token in local storage
          // Set Authorization headers
          // Set the token in redux store.  
          //setting something in local storage and deleting something 
          //from local storage should always be done in asynch action creator
          localStorage.setItem('token', token);
          localStorage.setItem('id', data.id);
          //if a user refreshes page, we still want access to loggedIn user info hence id also saved
          setAuthorizationToken(token);
          dispatch(successLogin(data.id))// Dispatch the success action
      })//.catch(err => console.log("Error: ", err))
  }
  
}

/*
function login(data) {
  const url = '/api/users/login'
  return dispatch=> {
    return axios.post(url, data).then(
      res=>{
        const token = res.data.token;
      }
    )
  }
}
*/

//this again is asynch because localStorage related stuff
// thus pass dispatch to it.
function logout() {
  return (dispatch)=> {
    localStorage.clear('token');
    localStorage.clear('id');
    setAuthorizationToken(false);
    dispatch(requestLogout());
  }
}

//following are used by the asych login action creator. 
// Just successLogin is also used by index.js
// function requestLogin(user) { 
//   return { type: LOGIN_REQUEST, user } 
// }
function successLogin(id) { 
  return { type: LOGIN_SUCCESS, id } 
}

function failureLogin(error) { 
  return { type: LOGIN_FAILURE, error } 
}

function requestLogout() {
  return {
    type: LOGOUT
  }
}

export {login, successLogin, logout};
