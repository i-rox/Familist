import React, { Component } from 'react';
import './Task.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Task extends Component {
  render() {
    return (
      <div className="task1">
      {this.props.vggalue.name}
      <button className="isDone" onClick={this.props.myClick}>
       isdone
      </button>
      </div>
    );
  }
}

export default Task;
