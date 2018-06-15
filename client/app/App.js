import React, { Component } from 'react';
import {NavBar} from './components/navbar.js';
import {AddPicModal} from './components/addPicModal.js';
import {Login} from './components/login.js';
import {SignUp} from './components/signup.js'
//import './App.css';
//can also use react-router to render modals


class App extends Component {
  constructor(props){
    super(props);
    this.state ={isOpenAddPic: false, isOpenLogIn: false, isOpenSignUp: false
      }
    this.toggleAddPicModal= this.toggleAddPicModal.bind(this)
    this.toggleLoginModal=this.toggleLoginModal.bind(this)
    this.toggleSignUpModal=this.toggleSignUpModal.bind(this)
    
    };
  
  
  toggleAddPicModal (){
    this.setState({ isOpenAddPic: !this.state.isOpenAddPic});
  };
  
  toggleLoginModal() {
    this.setState({ isOpenLogIn: !this.state.isOpenLogIn, isOpenSignUp: false});
  };
  
  toggleSignUpModal(){
    this.setState({ isOpenSignUp: !this.state.isOpenSignUp,isOpenLogIn: false});
  };
 
  
  render() {
     
    return (
      <div className="App">
      <NavBar showAddPicModal={this.toggleAddPicModal}
      showLoginModal={this.toggleLoginModal}
      showSignUpModal={this.toggleSignUpModal}/>
      
      <AddPicModal
                isOpen={this.state.isOpenAddPic}
                onClose={this.toggleAddPicModal}/>
      <Login isOpen={this.state.isOpenLogIn}
                onClose={this.toggleLoginModal}
                switchToSignUp={this.toggleSignUpModal}/>
                
      <SignUp isOpen ={this.state.isOpenSignUp}
      onClose={this.toggleSignUpModal}
     switchToLogIn={this.toggleLoginModal}/>
        
    
      </div>
    );
  }
}

export default App;