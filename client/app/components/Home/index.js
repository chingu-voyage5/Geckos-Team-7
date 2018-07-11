import React from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import store from 'store';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import Gallery from '../HomePage';
import AddImg from '../AddImg';
import isLoggedIn from '../../helpers/is_logged_in';


const handleLogout = history => () => {
  store.remove('loggedIn');
  history.push('/login');
};


const Home = ({history}) => {
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      

      <Sidebar as={Menu} inverted visible vertical width="thin" icon="labeled">
      <Link to="/homepage">
        <Menu.Item name="home">
          <Icon name="home" />
         Home
        </Menu.Item>
        </Link>
        <Link to="/my-wall">
        <Menu.Item name="my-wall">
          <Icon name="picture" />
         My Wall
        </Menu.Item>
        </Link>
        <Menu.Item name="logout" onClick={handleLogout(history)}>
          <Icon name="power" />
          Logout
        </Menu.Item>
        <Link to="/new-img">
      <Menu.Item name="new-img">
        <Icon name="plus" />
        Add an image
      </Menu.Item>
    </Link>
      </Sidebar>
      <div >
        <Route path="/homepage" component={Gallery}/>
        <Route path="/new-img" component={AddImg}/>
      </div>
    </div>
  );
};

export default Home;
