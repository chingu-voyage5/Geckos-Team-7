import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


import TextFieldGroup from './TextFieldGroup';
import validateLoginInput from '../validations/login';
import {login} from '../actions/authActions';

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
            console.log("errors", errors)
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("the props passed on",typeof this.props.login);
        console.log("Check FE and then try and submit");
        if (this.isValid()) {
            this.setState({errors:{}, isLoading:true});
            ////when we use axios param sent as: login({email:this.state.email, password:this.state.password})
            // //+rest too as per axios
            // this.props.login({email:this.state.email, password:this.state.password}).then(
            //     (res)=>{console.log("this functions will execute to reroute");this.context.router.push("/")},
            //     (err)=>{console.log("this functions will execute to display erro");this.setState({err:this.props.err, isLoading:false})}
            // )
            //fetch params sent as login(this.state.email, this.state.password)
            this.props.login(this.state.email, this.state.password).then(
                (res)=>{console.log("this functions will execute to reroute");
                //this.context.router.push("/")},
                console.log(history)
                console.log(this.props.history)
                console.log(this.props.browserHistory)
                // browserHistory.push('/')},
                return this.props.history.push('/')},
                //<Redirect to="/" />},
                (err)=>{console.log("this functions will execute to display error: ",err);
                this.setState({errors:{submit:err}, isLoading:false})}
            )
            //if login successful, save token (or email) in state and reroute 
            //if login unsuccessful, display msg
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
                <div className="form-group has-error">
                    {/*Message displayed after response from server*/}
                    <span className="help-block has-error">{errors.submit}</span>
                </div>
                <div className="form-group">
                  
                  <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
                </div>
            </form>
        )
    }
}


// LoginForm.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }


function mapStateToProps(state) {
    return {
      user : state
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      login: (email,password)=>dispatch(login({email,password}))
    }
  }
  
export default connect(null, mapDispatchToProps)(withRouter(LoginForm));
//   export default connect(null, { login })(LoginForm);//if no mapDispatchToProps then can use this
