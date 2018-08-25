import { ADD_PIN, DELETE_PIN, LOADING_DATA, LOADED_DATA, LOADING_FAILURE, ADD_TO_LIKES, REMOVE_FROM_LIKES } from "../actions/types";

const defaultState = {pins:[], loading: false, error: false};//do we load initial data here?

const pinsReducer = (state=defaultState, action) => {
    switch(action.type) {
        case LOADING_DATA:
          return Object.assign({}, state, {loading:true, error:false});
        case LOADED_DATA:
          return Object.assign({}, state, {loading:false, error:false, pins:[...state.pins, ...action.pins]});
          //return action.pins;
        case LOADING_FAILURE:
          return Object.assign({}, state,{loading:false, error:true})
        case ADD_PIN:
          return Object.assign({}, state, {pins:[...state.pins,action.pin]})//break it into smaller parts here. 
          //Will need the id of pin that was created
        case DELETE_PIN:
          {
            const newPins = state.pins.filter((pin)=> {
              return pin.id!==action.id
            })
            return Object.assign({}, state, {pins:newPins}); 
          }
        case ADD_TO_LIKES:
          {
            const newPins = state.pins.map((pin)=> {
              if (pin.id===action.id) {
                return {...pin, likes: [...pin.likes,action.userId]}
              }
              return pin;
            })
            return {...state,
              pins: newPins
            }
          }
        case REMOVE_FROM_LIKES: 
          { 
            const newPins = state.pins.map((pin)=>{
              if (pin.id===action.id) {
                const filtered =  pin.likes.filter((like)=>like!==action.userId);
                console.log("filtered pins is", filtered);
                return {...pin,likes:filtered};
              }
              return pin;
            })
            console.log("new pins is", newPins)
            return {...state,
              pins: newPins
            }
          }
        default:
          return state;
    }
}

export default pinsReducer;