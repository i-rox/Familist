import React, { Component } from 'react';
import './NewTask.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NewTask extends Component {
  //constructor(props){
    //super(props);
    //this.state={
     // arr2:{name:'',_id:''},
   // }
 // }
  //<button onClick={this.prepareNewTask()}>create</button>
  //onClick={()=>{this.CreateTask(this.state.arr2)} }
  render() {
    return (
     <div className="newTask1">
      <div className="newTask2">
      gfh
      <input id="name" placeholder="name" ></input>
      </div>
      <div className="newTask2">
      ddddfd
      <input id="id" placeholder="id"></input>
      </div>
      <div className="newTask2"></div>
      <div className="newTask2"></div>
      <div className="newTask2"></div>
      <div></div>
  <button >create</button>
      
     </div>
    );
  }
}

export default NewTask;
