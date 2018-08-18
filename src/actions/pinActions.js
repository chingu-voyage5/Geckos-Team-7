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
          //res.data has data about the pin added.
          //use that to dispatch(addPin) here itself
          console.log("response for create pin is", res);
          //we need a pins global state.
          //which contains All the pins. Right now we have less pins 
          //so can afford to have all pins as Dashboard gets rendered or mounted 
          //can dispatch addPin to pins global state here
          if (res.status===200) {
            const {_id, image, likes, sourceUrl, user} = res.data.pincreated;
            dispatch(addPin({id:_id, title:image, likes:likes, url:sourceUrl, userId:user}));
          }
            
        }
      )
    }
  }

//Asynch; removes pin from backend; authentication
//Header has been set by setAuthorizationToken
export function removePin(id) {
  const url = '/api/pins'
  axios.delete(url,{
    params:{id:id}
  }).then(
    res=>{
      console.log("response for deleting pin", res);
      //if pin has been deleted, dispatch a delPin to remove from store
      //if user not authorized, display message that can't del pin. 
      //del icon visible only when user views his own pins??
    }
  )
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