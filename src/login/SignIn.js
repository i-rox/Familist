import React, { Component } from 'react';
import Service from '../service/Service';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import './Login.css';

const service = new Service();

class SignIn extends Component {
    
  constructor(props) {
    super(props);    
    this.state = {
      users:{},
      password: '',
      username: '',
      showPassword: false,
    
      };
  }

  
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    localStorage.setItem([prop],event.target.value)
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };


  render() {
    return (      
      <div className="App-header">           
        <a href="./SignUp">New to Familist? Sign up!</a>
        <div className='form'>       
          <h3>Sign In</h3>   
          <form className='login'>
          <FormControl>
          <InputLabel htmlFor="adornment-password">Username</InputLabel>
          <Input
            id="username"
            type='email'
            value={this.state.username}
            onChange={this.handleChange('username')}           
          />
        </FormControl>
        <br></br>
        <FormControl>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <br/>  <br/>
            <button onClick={(e)=>service.signIn(e)}>Sign In</button>                 
          </form>
        
          <a href="./ResetPassword">forgot password?</a>
        </div>
       </div>       
    );
  }
}
export default SignIn;