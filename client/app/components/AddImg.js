import React , {Component} from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';

import {axios, post} from 'axios';

class AddImg extends Component{
    constructor(props){
        super(props);
        this.state ={title:'',url:''}
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleChange(e, { name, value }) {
      // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [name]: value });
    }
    onSubmit(e){
        const { history } = this.props;
     
      e.preventDefault();
      // get our form data out of state
      const {title, url } = this.state;
       //post the form obj to the api backend and render the img on homepage and mywall
      // axios.post('/api/addnewimg', { title, url })
      //   .then((result) => {
      //     //access the results here....
      //     console.log(result);
      //   });
        history.push('/homepage');//redirect to homepage
        
    }

    render() {
        return (
          <Grid>
            <Header>
              <title>Add an image</title>
            </Header>
    
            <Grid.Column width={6} />
            <Grid.Column width={4}>
              <Form onSubmit={this.onSubmit} >
                <Header as="h1">Add an image</Header>
                <Form.Input
                  inline
                  label="Title"
                  name="title"
                  onChange={this.handleChange} required
                />
                <Form.Input
                  inline
                  label="URL"
                  type="url"
                  name="url"
                  onChange={this.handleChange} required
                />
                
      <Form.Button type="submit">Add</Form.Button>
               
              </Form>
              
            </Grid.Column>
          </Grid>)

}
}
    


export default AddImg;

