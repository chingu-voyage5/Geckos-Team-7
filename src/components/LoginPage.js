import React from 'react';
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
    render() {
        console.log("this.props.history", this.props.history)
        return (
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                {/*<LoginForm history={this.props.history}/>*/}
                {/*We have used WithRouter for LoginForm hence can drop passing history*/}
                {/*Or could just use context. Then wouldn't need withRouter*/}
                <LoginForm/>
              </div>
            </div>
        )
    }
}

export default LoginPage;