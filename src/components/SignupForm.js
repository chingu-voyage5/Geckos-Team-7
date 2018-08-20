import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from './TextFieldGroup';
import validateRegisterInput from '../validations/register';
import signupRequest from '../actions/signupActions';
import {addMsg} from '../actions/flashMessages';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            password:'',
            password2:'',
            isLoading: false,
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    isValid() {
        const {errors, isValid} = validateRegisterInput({
            name:this.state.name, 
            email: this.state.email,
            password: this.state.password,
            password2:this.state.password2
        });
        this.setState({errors:errors});
        return isValid;
    }
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        const {name, email, password, password2} = this.state;
        //validate on FE. 
        //if passes then: isLoading true and
        //dispatch asycn action to signup
        //deal with server response:success/failure and re-route, display msg etc
        console.log("Should validate signup form now");

        if (this.isValid()) {
            //form field are valid so make axios request to api
            this.setState({isLoading:true, errors: {}});

            console.log("Make BE request and handle with response");
            this.props.signupRequest({name, email, password, password2})
              .then((res)=>{
                //display success msg and reroute
                console.log("res is", res);
                console.log("display flash message");
                this.props.addMsg({
                  type: 'success',
                  text: 'Signup successful'
                });
                // console.log("this.context", this.context.router.history)
                this.context.router.history.push('/');
              }, (err)=>{
                console.log("There is error", err);
                //Mostly land in err when user with that email exists
                this.setState({isLoading:false, 
        errors:{submit:"This email is registered. Please register with another email"}});
              })
        }

    }
    render() {
        const {name, email, password, password2, isLoading, errors} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup 
                field='name'
                value={name}
                label='Name'
                error={errors.name}
                type='string'
                onChange={this.onChange}
              />

              <TextFieldGroup 
                field='email'
                value={email}
                label='Email'
                error={errors.email}
                type='email'
                onChange={this.onChange}
              />

              <TextFieldGroup 
                field='password'
                value={password}
                label='Password'
                error={errors.password}
                type='password'
                onChange={this.onChange}
              />

              <TextFieldGroup 
                field='password2'
                value={password2}
                label='Confirm Password'
                error={errors.password2}
                type='password'
                onChange={this.onChange}
              />
              <div className="form-group has-error">
                    {/*Message displayed after response from server*/}
                    <span className="help-block has-error">{errors.submit}</span>
                </div>
              <button className="btn btn-primary btn-lg" disabled={isLoading}>
              Signup</button>

            </form>
        )
    }
}


SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}


export default connect(null, {signupRequest, addMsg})(SignupForm);