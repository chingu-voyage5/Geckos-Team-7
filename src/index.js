import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducer from './reducers'
import {addItem, delItem, login} from './actions/actions.js'
const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

console.log(store);
function logger() {
  console.log(store.getState())
}
store.subscribe(logger);
console.log(store.getState());
store.dispatch(login( {"email":"foot@bar.cm", "password":"12345"}))

//following is just to test my post api with authentication
import axios from 'axios'
window.axios = axios;
//note axios variable is available only on / and not on any other url

/*
const url = '/api/pins';
fetch(url)
.then(res=>{console.log("fetching data");return res.json()})
.then(data=>{
  console.log(data);
})
*/

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById("app"));
