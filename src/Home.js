import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Home.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App-header"> 
      
        <a href="/Login">Sign In</a>
        <a href="/NewGroup">New Group</a>
      </div>
    );
  }
}

export default Home;
