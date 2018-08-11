import {ADD_ITEM, DELETE_ITEM} from '../actions/types';

const defaultState = [{
  title:"Hello Kitty", url:"", numLike:2, numReshare:1
},{
  title:"Cute kitty", url:"", numLike:1, numReshare:0
}];
const items = (state=defaultState, action)=> {
  switch (action.type) {
    case ADD_ITEM:
      return [...state,action.item];
    case DELETE_ITEM:
      return state.slice(0,index).concat(state.slice(index+1));
    default:
     return state;
  }
}

export default items;
