import {combineReducers} from 'redux';
import authReducer from './authReducer';
import items from './items';

export default combineReducers({
  auth: authReducer,
  items: items
})
