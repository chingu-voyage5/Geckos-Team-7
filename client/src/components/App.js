import React from 'react';
import {BrowserRouter, HashRouter, Route, browserHistory} from 'react-router-dom'

//import Header from './Header';
import {ConnectedHeader} from './Header';
//import Images from './Images';
// import Form from './Form';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import DashBoard from './DashBoard';
import SignupPage from './SignupPage';
import PinForm from './PinForm';
import MyPins from './MyPins';
import FlashMsgs from './FlashMsgs';
import requireAuth from '../utils/requireAuth';
import {loadPins} from '../actions/pinActions';
//import Form from '../containers/Form';

//import * as actions from '../actions/authActions'

//import ConnectedImages from '../containers/ConnectedImages';

import {connect} from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    this.props.loadPins();
  }
  render() {
    return (
      
      <div className="container">
        <BrowserRouter history={browserHistory}>
       
          <div>
            <NavBar/>
            <FlashMsgs/>
            {/*<Route exact path="/" component={ConnectedImages}/>*/}
            {/*<Route path="/form" component={Form}/>*/}
            <Route path='/' exact component={DashBoard}/>
            <Route path='/login' exact component={LoginPage}/>
            <Route path='/signup' exact component={SignupPage}/>
            <Route path='/pin' exact component={requireAuth(PinForm)}/>
            <Route path='/myPins' exact component={requireAuth(MyPins)}/>
          </div>
          </BrowserRouter>
      </div>
      
    )
  }

}

export default connect(null,{loadPins})(App);
// export default App;