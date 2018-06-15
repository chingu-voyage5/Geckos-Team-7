import React, {Component} from 'react';
import {Modal, Form, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap/lib';

//import {axios} from 'axios';

export class Login extends Component{
    constructor(props){
        super(props);
        this.state = {username:'',
        password:''
        }
        this.handleUserNameChange=this.handleUserNameChange.bind(this)
        this.handlePassChange=this.handlePassChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
     
    
    handleUserNameChange(e){
        this.setState({username:e.target.value});
        
    }
    handlePassChange(e){
        this.setState({password:e.target.value});
        
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.username, this.state.password
        )
    }
    
    
    render(){
       
        
         if(!this.props.isOpen){
            return null;
        }
        return(
            
            <div className="static-modal">
            
                <Modal.Dialog>
                <Form>
                    <Modal.Header>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
            <Modal.Body>
            
            <FormGroup>
                <ControlLabel>Username:</ControlLabel>
                <FormControl id = "username" 
                            value = {this.state.username} 
                            onChange={this.handleUserNameChange}
                             placeholder="Enter you username" required/>
                
            
            </FormGroup>
            <FormGroup>
                <ControlLabel>Password:</ControlLabel>
                <FormControl id = "password" 
                            type="password"
                            value = {this.state.password} 
                            onChange={this.handlePassChange}
                            placeholder="Enter you password" required/>
            </FormGroup>
     
            
            
           
         
              
            </Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.handleSubmit} type="submit" className='btn-primary'>Login</Button>
                     
            <div>New to Pinterest?</div>
            <Button onClick={this.props.switchToSignUp} className="btn-primary">Register!</Button>
            <Button onClick={this.props.onClose}>Close</Button>
            </Modal.Footer>
            </Form>
                </Modal.Dialog>
                
            </div>
           
            );
    }
}