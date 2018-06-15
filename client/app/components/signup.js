import React, { Component } from 'react';
import {Modal,Form, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap/lib';

export class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      email:'',
      password:''
    }
  }
  

  render(){
       if(!this.props.isOpen){
            return null;
        }
        return(
            <div className="static-modal">
                <Modal.Dialog>
                <Form >
                    <Modal.Header>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
            <Modal.Body>
            
            <FormGroup >
                <ControlLabel>First Name:</ControlLabel>
                <FormControl id = "firstname"
                            value = {this.state.firstname} 
                            onChange={(e) => this.setState({firstname: e.target.value})}
                             placeholder="Enter your first name" required/>
                
            
            </FormGroup>
            <FormGroup>
                <ControlLabel>Last Name:</ControlLabel>
                <FormControl id = "last name" 
                            value = {this.state.lastname} 
                            onChange={(e) => this.setState({lastname: e.target.value})}
                            placeholder="Enter your last name" required/>
                
            
            </FormGroup>
             <FormGroup >
                <ControlLabel>Email Address:</ControlLabel>
                <FormControl id = "email" 
                            type= "email"
                            value = {this.state.email} 
                            onChange={(e) => this.setState({email: e.target.value})}
                            validations="isEmail"
                            validationerror="This is not a valid email"
                            placeholder="Enter your email" required/>
                
            
            </FormGroup>
             <FormGroup>
                <ControlLabel>Password:</ControlLabel>
                <FormControl id = "password"
                pattern="^(?=.*\d)(?=.*[a-z]).{6,15}$"
                title="Password must be at least 6 characters, no more than 15 characters, and must include at least one lower case letter and one numeric digit"
                type='password' 
                
                            value = {this.state.password} 
                            onChange={(e) => this.setState({password: e.target.value})}
                            placeholder="Enter your password" required/>
                
            
            </FormGroup>
           
             </Modal.Body>

                    <Modal.Footer>
                     <Button className="btn-primary" type="submit">Sign Up</Button>
                     <Button onClick={this.props.onClose}>Close</Button>
                     <div>Have an account already? </div>
                     <Button onClick={this.props.switchToLogIn}>Log In here</Button>
            </Modal.Footer>
            </Form>
                </Modal.Dialog>
            
            </div>
            );
    }
}
