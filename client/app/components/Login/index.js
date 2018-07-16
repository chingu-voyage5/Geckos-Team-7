import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
//import { Helmet } from 'react-helmet';
import store from 'store';
import {Link } from 'react-router-dom';
import './style.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={username:'',password:'',error:false}
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    handleChange(e, { name, value }) {
        this.setState({ [name]: value });
    }
    onSubmit(e){
        //pull username and password from state 
        const { username, password } = this.state;
        //pull history from props
        const { history } = this.props;
        this.setState({ error: false });
        if (!(username === 'chau' && password === 'tran')) {
            return this.setState({ error: true });}
            store.set('loggedIn', true);
            history.push('/homepage');
    }

    render() {
        const { error } = this.state;
    
        return (
          <div className="container">
          <Grid  >
    
            <Grid.Column width={6} />
            <Grid.Column width={4}>
              <Form  error={error} onSubmit={this.onSubmit}>
                <Header as="h1">Welcome to Pinterest Login</Header>
                {error && <Message
                  error={error}
                  content="That username/password is incorrect. Try again!"
                />}
                <Form.Input
                  inline
                  label="Username"
                  name="username"
                  onChange={this.handleChange}
                />
                <Form.Input
                  inline
                  label="Password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
                <Form.Button type="submit">Submit!</Form.Button>
               
              </Form>
              <div>Don't have an account? Sign Up here!</div>
                <Link to="/signup">Sign Up</Link>
            </Grid.Column>
          </Grid>
          </div>
        );
      }
}

export default Login;