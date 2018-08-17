import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addMsg} from '../actions/flashMessages'

export default function(ComposedComponent) {
    class Authenticate extends React.Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.addMsg({
                    type: 'error',
                    text: "You need to login to access this page"
                })
                this.context.router.history.push('/');
            }
        }
        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated)
            this.context.router.history.push('/');
        }
        render() {
            console.log("this.props in Authenticate", this.props);
            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        addMsg: PropTypes.func.isRequired
    }

    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }

    const mapStateToProps=(state)=>{
        return {
            isAuthenticated: state.auth.loggedIn
        };
    }
    return connect(mapStateToProps, {addMsg})(Authenticate);
}