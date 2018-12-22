import React, { Component } from 'react';
import './Menu.css';
import Home from '../Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Menu extends Component {
  render() {
    return (
      <div className="menu">
          
        <div>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Todo">Todo</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/ManageGroup">Manage Group</Link>
            </li>
          </ul>
          <hr />

        </div>
      </div>
    );
  }
}


export default Menu;
