import React , {Component} from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';

class AddImg extends Component{
    constructor(props){
        super(props);
        this.state ={title:'',url:''}
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleChange(e, { name, value }) {
        this.setState({ [name]: value });
    }
    onSubmit(e){
        const {title, url } = this.state;
        const { history } = this.props;
        console.log(this.state);
    }

    render() {
        return (
          <Grid>
            <Header>
              <title>Add an image</title>
            </Header>
    
            <Grid.Column width={6} />
            <Grid.Column width={4}>
              <Form  onSubmit={this.onSubmit}>
                <Header as="h1">Add an image</Header>
                <Form.Input
                  inline
                  label="Title"
                  name="img-title"
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

