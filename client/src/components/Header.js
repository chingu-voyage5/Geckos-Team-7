import React from 'react'

import '../styles/header.scss';
import {connect} from 'react-redux';

class Header extends React.Component {
  renderHeader(){
    console.log(this.props.auth);
    switch(this.props.auth) {
      case false:
        return <li><a href="/auth/twitter">Sign up Twitter</a></li>
      case null:
        return;
      default:
        return <li><a href="/api/logout">Logout</a></li>
    }
  }
  render() {
    //this.renderHeader();
    return (
      <nav className="header">
        {/*<a href="/auth/twitter">Sign up Twitter</a>*/}
        {this.renderHeader()}
      </nav>
    )
  }

}

const mapStateToProps =(state)=>{
  return {
    auth: state.auth
  }
}

const ConnectedHeader = connect(mapStateToProps)(Header);
export {ConnectedHeader}
//export default Header;
//export {Header};
