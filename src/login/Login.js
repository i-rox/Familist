import React, { Component } from 'react';
import './Login.css';
import MyGroups from './MyGroups';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Input extends React.Component {
  signIn(e)
  {
    alert(e.target.value);
  }
  render() {
    return <div className='Input'>
              <input onBlur={(e)=>this.signIn(e)} type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autocomplete='false'/>
              <label for={ this.props.name }  ></label>
           </div>
  }

}
class Login extends Component {
    
  constructor(props) {
    super(props); 
    this.state = {
      showPopup: false,
      userName:'',
      password:''
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
     
    });
  }

  signIn() {
    alert("check details&/n enter to all groups");
    
    
  }
  render() {
    return (      
      <div className="App-header">     
        <div className='Login'>       
          <h3>Sign In</h3>
          <form onSubmit={this.signIn}>
            <Input type='text' name='username' placeholder='username' />
            <Input type='password' name='password' placeholder='password' />
            <button onClick={this.togglePopup.bind(this)}>Sign In</button>
            <button onClick={(e)=>this.signIn(e)}>Sign Up</button>
            
          </form>
          <a href="./ResetPassword">forgot password?</a>
        </div>
        {this.state.showPopup ? 
          <MyGroups></MyGroups>
          : null
        }
      </div>       
    );
  }
}

export default Login;
