import React from 'react';
import TextFieldGroup from './TextFieldGroup';
import validateLoginInput from '../validations/login';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            errors:{},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        const {name, value} = e.target;
        this.setState({ [name]: value });
        console.log(this.state);
    }
    isValid() {
        const {errors, isValid } = validateLoginInput(this.state);

        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("Check FE and then try and submit");
        if (this.isValid()) {
            this.setState({errors:{}, isLoading:true});
        }
        
    }
    render() {
        const {errors, email, password, isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <TextFieldGroup
                  field="email"
                  label="Email"
                  value={email}
                  error={errors.email}
                  onChange={this.onChange}
                  type={email}
                />

                <TextFieldGroup
                  field="password"
                  label="Password"
                  value={password}
                  error={errors.password}
                  onChange={this.onChange}
                  type='password'
                />
                <div className="form-group">
                  <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
                </div>
            </form>
        )
    }
}

export default LoginForm;