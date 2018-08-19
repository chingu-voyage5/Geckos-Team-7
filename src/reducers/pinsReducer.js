import { ADD_PIN, DELETE_PIN, LOADING_DATA, LOADED_DATA, LOADING_FAILURE } from "../actions/types";

const defaultState = {pins:[], loading: false, error: false};//do we load initial data here?

const pinsReducer = (state=defaultState, action) => {
    switch(action.type) {
        case LOADING_DATA:
          return Object.assign({}, state, {loading:true, error:false});
        case LOADED_DATA:
          return Object.assign({}, state, {loading:false, error:false, pins:[...state.pins, ...action.pins]});
        case LOADING_FAILURE:
          return Object.assign({}, state,{loading:false, error:true})
        case ADD_PIN:
          return Object.assign({}, state, {pins:[...state.pins,action.pin]})//break it into smaller parts here. 
          //Will need the id of pin that was created
        case DELETE_PIN:
          let newPins = state.pins.filter((pin)=> {
            return pin.id!==action.id
          })
          return Object.assign({}, state, {pins:newPins}); 
        default:
          return state;
    }
}

export default pinsReducer;