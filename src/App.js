import React, { Component } from 'react';
import './App.css';
import { Header } from './header.js';
import { Body } from './body.js';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
