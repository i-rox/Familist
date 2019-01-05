import React, { Component } from 'react';
import '../newTask/NewTask.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Try2 extends Component {
  constructor() {
    super();
  }

  buttonClick(){
    debugger
    this.props.sendData(this.state.textString);
}

  render() {
    return (
      <div>
<div>{this.props.my}</div>

      </div>
    );
  }
}

export default Try2;
