import React , {Component} from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';


class AddImg extends Component{
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        

    }

    handleChange(e, { name, value }) {
      // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [name]: value });
    }
    
    render() {
        return (
          <Grid>
            <Header>
              <title>Add New Image</title>
            </Header>
    
            <Grid.Column width={6} />
            <Grid.Column width={4}>
              <Form onSubmit={this.props.onAddNewPic} >
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

