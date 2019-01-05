import React, { Component } from 'react';
import './Menu.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h6>menu</h6>
        <div>
          <ul>
          <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/ManageGroup">ManageGroup</Link>
            </li>
          <li>
              <Link to="/NewTodo">NewTodo</Link>
            </li>
          <li>
              <Link to="/InsertTask">InsertTask</Link>
            </li>
            <li>
              <Link to="/Try3">try3</Link>
            </li>
          <li>
              <Link to="/Try1">try1</Link>
            </li>
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
          </ul>
          <hr />

        </div>
      </div>
    );
  }
}


export default Menu;
