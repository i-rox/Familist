import React, { Component } from 'react';
import './MyGroups.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Input extends React.Component {
  render() {
    return <div className='Input'>
              <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autocomplete='false'/>
              <label for={ this.props.name } ></label>
           </div>
  }

}
class MyGroups extends Component {
    
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  signIn() {
    alert("check details&/n enter to all groups");
  }
  render() {
    return (      
      <div className="App-header">     
              
          <h3>My Groups</h3>
          <form onSubmit={this.signIn}>
            <Input type='text' name='username' placeholder='username' />
            <Input type='password' name='password' placeholder='password' />
            <button>Sign In</button>
          </form>
          <a href="./ResetPassword">forgot password?</a>
       
      </div>       
    );
  }
}

export default MyGroups;
