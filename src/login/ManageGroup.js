import React, { Component } from 'react';
import './ManageGroup.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Input extends React.Component {
  render() {
    return <div className='Input'>
              <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autocomplete='false'/>
              <label for={ this.props.name } ></label>
           </div>
  }

}
class ManageGroup extends Component {
    
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback   
    this.signIn = this.signIn.bind(this);
  }

  

  signIn() {
    alert("check details&/n enter to all groups");
  }
  render() {
    return (      
      <div className="App-header">     
              
          <h3>Manage Group</h3>
          <a href="/Test">add users</a>
        
      </div>       
    );
  }
}

export default ManageGroup;
