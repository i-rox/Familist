import React, { Component } from 'react';
import logo from './logo.svg';
import './About.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todo from './todo/Todo';

class About extends Component {
  constructor() {
    super();

  }

  myclick(that) {
    this.props.parentMethod();
  }

  render() {
    return (
      <div onClick={this.myclick.bind(this)}>Hello Child</div>
    );
  }

}


export default About;
