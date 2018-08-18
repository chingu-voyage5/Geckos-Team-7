import { ADD_PIN, DELETE_PIN } from "../actions/types";

const defaultState = [];//do we load initial data here?

const pinsReducer = (state=defaultState, action) => {
    switch(action.type) {
        case ADD_PIN:
          return [...state,action.pin]//break it into smaller parts here. 
          //Will need the id of pin that was created
        case DELETE_PIN:
          return state.filter((pin)=> {
              return pin.id!==action.id
          })
        default:
          return state;
    }
}

export default pinsReducer;