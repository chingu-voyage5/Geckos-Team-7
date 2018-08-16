import {combineReducers} from 'redux';
import authReducer from './authReducer';
import items from './items';
import flashReducer from './flashMsgReducer';

export default combineReducers({
  auth: authReducer,
  items: items,
  flashMsgs: flashReducer
})
