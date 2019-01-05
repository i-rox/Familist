import React, { Component } from 'react';
import MyGroups from './MyGroups';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Input extends React.Component {
   
  constructor(props)
  {
    super(props);

    this.state = {
        fields: {},
        errors: {}
    }
  }
  handleChange(field, e)
  {         
    localStorage.setItem(field,e.target.value)
  }
  
  render() {
    return <div className='Input'>
              <input name={ this.props.name } onChange={this.handleChange.bind(this,  this.props.name)} type={ this.props.type }  placeholder={ this.props.placeholder } required autocomplete='false'/>
              <label for={ this.props.name }  ></label>
           </div>
  }

}
class Login extends Component {
    
  constructor(props) {
    super(props); 
    this.state = {
      showPopup: false,
      users:{}
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
     
    });
  }

  signIn(e) { 
    if(localStorage.getItem('users')==null)
    {
      alert("any user exist");
      return;
    }  
    let users=JSON.parse(localStorage.getItem('users')); 
    let user={username:localStorage.getItem('username'), pass:localStorage.getItem('password')};
    for(let i=0;i<users.length;i++)
    {
      if(users[i].pass==user.pass&&users[i].username==user.username)
      {
        alert("this is the user!!!");
        return;
      }
    }
    alert("not exist:(");
   
    
  }      
   

  
  signUp()
  {
    let users=[];
    if(localStorage.getItem('users')!=null)
    {
      users=JSON.parse(localStorage.getItem('users'));
    }   
    let newUser={username:localStorage.getItem('username'), pass:localStorage.getItem('password')};
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    alert("check details&/n enter to all groups");
  }
 
  render() {
    return (      
      <div className="App-header">     
        <div className='Login'>       
          <h3>Sign In</h3>   
           <a href="./SignUp">New to Familist? Sign up!</a>
          <form >
            <Input type='email' name='username' placeholder='username' />
            <Input type='password' name='password' placeholder='password' />
            <button onClick={(e)=>this.signIn(e)}>Sign In</button>
            <button onClick={(e)=>this.signUp(e)}>Sign Up</button>
            
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
