import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './App';


// import Home from './components/Home/Home';

// import HelloWorld from './components/HelloWorld/HelloWorld';

// import './styles/styles.scss';

render((
//   <Router>
//     <App>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/helloworld" component={HelloWorld}/>
//         <Route component={NotFound}/>
//       </Switch>
//     </App>
//   </Router>
<App/>
), document.getElementById('app'));





