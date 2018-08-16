import React from 'react';
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
    render() {
        console.log("this.props.history", this.props.history)
        return (
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                {/*<LoginForm history={this.props.history}/>*/}
                <LoginForm history={this.props.history}/>
              </div>
            </div>
        )
    }
}

export default LoginPage;