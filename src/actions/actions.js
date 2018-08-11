import {ADD_ITEM, DELETE_ITEM, LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAILURE} from './types';
import axios from 'axios';

const url = '/api/users/login'
// const url = 'http://localhost:5001/api/users/login';


const addItem = (item)=>{
  return {
    type: ADD_ITEM,
    item
  }
}

const delItem = (index)=>{
  return {
    type: DELETE_ITEM,
    index
  }
}


//Asych action creator to login user
function login({email, password}) {
  console.log("email and password is", email, password);
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    //mode: 'no-cors',
    body: JSON.stringify({ email, password })
};
// let config = {
//   method: 'POST',
//   headers: { 'Content-Type':'application/x-www-form-urlencoded' },
//   body: JSON.stringify({ email, password })
// }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(email))

    return fetch(url, config)
      .then(response =>{
        console.log("response is", response);
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          //dispatch(failure(user.message))//uncomment
          //return Promise.reject(user)//uncomment
          dispatch(failureLogin("Password and email do not match"));
          //return Promise.reject()
          return Promise.reject("Password and email do not match")//comment out
        } 
        return response.json()//.then(user => ({ user, response }))
            }).then(data =>  {
              const user = data.token;
              console.log(user);
          // If login was successful, set the token in local storage
          localStorage.setItem('user', JSON.stringify(user));//uncomment
          // Dispatch the success action
          dispatch(successLogin(user))//uncomment
      }).catch(err => console.log("Error: ", err))
  }
  
}

//following are used by the asych login action creator
function requestLogin(user) { 
  return { type: LOGIN_REQUEST, user } 
}
function successLogin(user) { 
  return { type: LOGIN_SUCCESS, user } 
}
function failureLogin(error) { 
  return { type: LOGIN_FAILURE, error } 
}

export {addItem, delItem, login};
