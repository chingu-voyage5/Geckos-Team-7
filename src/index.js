import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk';
import {BrowserRouter, browserHistory} from 'react-router-dom';

import App from './components/App';
import setAuthorizationToken from './components/utils/setAuthorizationToken';
import reducer from './reducers'
// import {login, successLogin} from './actions/authActions.js'
import {addMsg, delMsg} from './actions/flashMessages'
const store = createStore(
  reducer, compose(applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f=> f
));

console.log(store);
function logger() {
  console.log(store.getState())
}
store.subscribe(logger);
console.log(store.getState());
store.dispatch(addMsg({type:'success',text:'Hello'}));
store.dispatch(addMsg({type:'error',text:'WhatsUp'}));
//store.dispatch(login( {"email":"foot@bar.com", "password":"123456"}))//just to test


// So that ones a user is logged in, successive refreshes persist the token
if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(successLogin(localStorage.token));
}


ReactDOM.render(
  <Provider store={store}>
    {/*<BrowserRouter history={browserHistory}>*/}
    <App/>
    {/*</BrowserRouter>*/}
  </Provider>
  , document.getElementById("app"));
