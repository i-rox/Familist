import React, { Component } from 'react';
import Input from '../components/Input';
import Service from '../service/Service';

const service = new Service();

class SignUp extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {     
      users:{}
    };
  }
  
  
  
  render() {
    return (              
      <div className="App-header">   
        <div className=''>  
          <a href="./SignIn">Sign In</a>      
          <h3>Sign Up</h3>             
          <form onSubmit={(e)=>service.signUp(e)} >
            <Input type='email' name='username' placeholder='username' />
            <Input type='password' name='password' placeholder='password' />  
            <button>Sign Up</button>            
          </form>         
        </div>
      </div>     
    ); 
  }
}

export default SignUp;