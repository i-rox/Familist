import React, { Component } from 'react';
import '../newTask/NewTask.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Try2 from './Try2';

class Try1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: "true",
    };
  }

  buttonClick(){
    debugger
    this.props.sendData(this.state.textString);
}
toggleShow=()=>{
  this.setState(state=>({isShow:!state.isShow}));
}
  render() {
    const myName="rivka";
    return (
      <div className="newTask1">

{this.state.isShow?<Try2 my={myName} />:null}
<button onClick={this.toggleShow} type="button"></button>
        <div className="newTask2">
          name
           <input id="name" placeholder="name" ></input>
        </div>
        <div className="newTask2">
          id
            <input id="id" placeholder="id"></input>
        </div>
        <div className="newTask2"></div>
        <div className="newTask2"></div>
        <div className="newTask2"></div>
        <div></div>
        <button onClick={this.buttonClick.bind(this)}>create</button>

      </div>
    );
  }
}

export default Try1;
