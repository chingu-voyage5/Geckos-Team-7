import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

//import Header from './Header';
import {ConnectedHeader} from './Header';
//import Images from './Images';
import Form from './Form';
import LoginPage from './LoginPage';
//import Form from '../containers/Form';

import * as actions from '../actions/actions'

//import ConnectedImages from '../containers/ConnectedImages';

import {connect} from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    //this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            {/*<Route exact path="/" component={ConnectedImages}/>*/}
            {/*<Route path="/form" component={Form}/>*/}
            <Route path='/' component={LoginPage}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }

}

export default connect(null,actions)(App);
