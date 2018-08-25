import {ADD_MSG, DELETE_MSG} from '../actions/types'
const inititialState = [];
let msgId = 0;
const flashReducer = (state=inititialState, action)=> {
    switch(action.type) {
        case ADD_MSG:
          //could write state.concat(msg). but following 2 are clearer
        //   return state.concat({id: msgId++, type:action.msg.type, text:action.msg.text})
        return [...state, ({
            id: msgId++,
            type: action.msg.type,
            text: action.msg.text
        })]
        case DELETE_MSG:
          return state.filter((ele)=>ele.id!==action.index)
        default:
          return state;
    }
}

export default flashReducer;