import React from 'react';
import Home from './home';
import Login from './Login';
import SignUp from './SignUp';
import { Switch, Route } from 'react-router-dom';

const App = () => 
(<div className="app-routes">
<Switch>
  <Route path="/login" component={Login} />
  <Route path="/signup" component={SignUp} />
  <Route path="/" component={Home} />
</Switch>
</div>);

export default App;
