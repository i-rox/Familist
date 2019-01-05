import React, { Component } from 'react';
import '../newTask/NewTask.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Try5 from './Try5';
import Try4 from './Try4';

class Try3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    }
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };
  render() {
    const myName = "rivka";
    return (
      <div className="newTask1">

        <Try5 click={this.toggleShow} />
        {this.state.isShow ? <Try4 my={myName} /> : null}
      </div>
    );
  }
}

export default Try3;
