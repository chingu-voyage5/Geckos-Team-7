import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        console.log(this.props);
        this.props.logout();
    }
    render() {
        
        const loggedIn = this.props.loggedIn;
        console.log("Logged In in navbar is: ", loggedIn);
        console.log("Use a proper initial state to rectify this");
        const loggedInNav = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/pin">Pin Image</Link></li>
                <li><Link to="/myPins">My Pins</Link></li>
                <li><a href="#" onClick={this.handleClick}>Logout</a></li>
            </ul>
        );
        const guestNav = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        );
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Picterest</Link>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                  </div>
                  <div className="collapse navbar-collapse" id="myNavbar">
                    {loggedIn?loggedInNav:guestNav}
                  </div>
                </div>
                <div>
                </div>
            </nav>
            )
    }
    
}
const mapStateToProps = (state)=> {
    console.log("state in navbar is", state)
    return {
        loggedIn : state.auth.loggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: ()=>dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);