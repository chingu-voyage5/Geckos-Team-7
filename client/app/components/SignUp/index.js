import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import store from 'store';
import {Link } from 'react-router-dom';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state ={fullname:'',username:'',email:'',password:'',error:false}
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleChange(e, { name, value }) {
        this.setState({ [name]: value });
    }
    onSubmit(e){
        const {fullname, username, email, password } = this.state;
        //pull history from props
        const { history } = this.props;
        this.setState({ error: false });
        console.log("You have signed up")
        console.log(this.state);
    }

    render() {
        const { error } = this.state;
    
        return (
          <Grid>
            <Header>
              <title>Sign Up Here!</title>
            </Header>
    
            <Grid.Column width={6} />
            <Grid.Column width={6}>
              <Form  error={error} onSubmit={this.onSubmit}>
                <Header as="h1">Sign Up</Header>
                <Form.Input
                  inline
                  label="FullName"
                  name="fullname"
                  onChange={this.handleChange} required
                />
                <Form.Input
                  inline
                  label="UserName"
                  type="text"
                  name="username"
                  onChange={this.handleChange} required
                />
                <Form.Input
                  inline
                  label="Email"
                  type="email"
                  name="email"
                  onChange={this.handleChange} required
                />
                <Form.Input
                  inline
                  label="Password"
                  type="password"
                  name="password"
                  onChange={this.handleChange} required
                />
                <Form.Button type="submit">Sign Up</Form.Button>
               
              </Form>
              <div>Have an account already?</div>
                <Link to="/login">Log in here!</Link>
            </Grid.Column>
          </Grid>)
}
}

export default SignUp;