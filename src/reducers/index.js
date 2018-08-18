import {combineReducers} from 'redux';
import authReducer from './authReducer';
import pinsReducer from './pinsReducer';
import flashReducer from './flashMsgReducer';

export default combineReducers({
  auth: authReducer,
  pins: pinsReducer,
  flashMsgs: flashReducer
})
