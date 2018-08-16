import {ADD_MSG, DELETE_MSG} from './types';
export function addMsg(msg){
    return {
      type: ADD_MSG,
      msg
    }
  }
  
export function delMsg(index){
    return {
      type: DELETE_MSG,
      index
    }
  }
  