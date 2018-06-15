import React,{Component} from 'react';
 import {NavItem, Nav, Navbar} from 'react-bootstrap/lib';
 
 export class NavBar extends Component{
    
     render(){
     
         return(
             <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                  <a href="#brand">Pinterest</a>
                </Navbar.Brand>
                <Navbar.Toggle />
             </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Home
      </NavItem>
      <NavItem eventKey={2} href="#">
        My Wall
      </NavItem>
      <NavItem eventKey={3} href="#" onClick={this.props.showAddPicModal}>
      Add New Picture
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#" onClick={this.props.showLoginModal}>
        Login
      </NavItem>
      <NavItem eventKey={2} href="#" onClick={this.props.showSignUpModal}>
        Signup
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
             )
     }
 }
  

      