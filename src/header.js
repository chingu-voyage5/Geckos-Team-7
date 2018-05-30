import React, { Component } from 'react';
import { Logo } from './logo';
import { SearchBar } from './searchBar.js';

export class Header extends React.Component {
    render() {
        return (
          <div id="header">
            <Logo/>
            <SearchBar/>
            <div>Link Home</div>
            <div>Link Profile</div>
            <div>Notifications</div>
            <div>More</div>
          </div>
        );
      }
}   