import axios from 'axios';
import { ADD_PIN, DELETE_PIN } from './types';

export function loadPins() {
  const url = '/api/pins'
  return (dispatch) => {
    return axios.get(url).then(res=>{
      console.log(res);
    })
  }
}

//Asynch; adds pin to backend; needs authentication
//Header has been set by setAuthorizationToken
export function createPin(data) {
    const url = '/api/pins'
    return dispatch=> {
      return axios.post(url, data).then(
        res=>{
          console.log("response for create pin is", res);
          //we need a pins global state.
          //which contains All the pins. Right now we have less pins 
          //so can afford to have all pins as Dashboard gets rendered or mounted 
          //can dispatch addPin to pins global state here
        }
      )
    }
  }

//Asynch; removes pin from backend; authentication
//Header has been set by setAuthorizationToken
export function removePin(data) {

}

//These are for adding pins to state in store
export function addPin(pin) {
  return {
    type: ADD_PIN,
    pin
  }
}

export function delPin(id) {
  return {
    type: DELETE_PIN,
    id
  }
}