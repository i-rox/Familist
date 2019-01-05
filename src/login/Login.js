/* import React, { Component } from 'react';
import MyGroups from './MyGroups';
import NewGroup from './NewGroup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Input extends React.Component {
   
  constructor(props)
  {
    super(props);
    localStorage.setItem('password','');
    localStorage.setItem('username','');    

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
class SignUp extends Component {
  
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  constructor(props) {
    super(props); 
    this.state = {
      isShow: true,
      users:{}
    };
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
   // this.setState({showPopup:false})
  }
  
  render() {
    return (      
        
      <div className="App-header">   
        <div className='SignUp'>  
        <a href="./Login">Sign In</a>      
          <h3>Sign Up</h3>   
          
          <form onSubmit='this.signUp(e)' >
            <Input type='email' name='username' placeholder='username' />
            <Input type='password' name='password' placeholder='password' />
            
            <button>Sign Up</button>
            
          </form>
          <a href="./ResetPassword">forgot password?</a>
        </div>
        </div>
      
      
    );
 
  }
}
class SignIn extends Component {
    
  constructor(props) {
    super(props); 
   
    this.state = {
      users:{}
             
    };
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
    
  render() {
    return (      
      <div className="App-header">   
        
        <a href="./SignUp">New to Familist? Sign up!</a>
        <div className='Login'>       
          <h3>Sign In</h3>   
          <form>
            <Input type='email' name='username' placeholder='username' />
            <Input type='password' name='password' placeholder='password' />                  
          </form>
          <button onClick={(e)=>this.signIn(e)}>Sign In</button> 
          <a href="./ResetPassword">forgot password?</a>
        </div>
       </div>       
    );
  }
}

class Login extends Component {
    
  constructor(props) {
    super(props); 
    this.state = {
      showPopup: false,
      users:{},
      num: 1
    };
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  handleRouteChange(event) {
    const destination = event.newURL;
    // check the URL string, or whatever other condition, to determine
    // how to set internal state.
    if(this.state.num==1)
    {
      this.setState({ num: 1 });
    }
    
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleRouteChange, false);
  }

  handle(){
    if(this.state.num == 1){
     return <NewGroup/>
    }else if(this.state.num == 4){
      // window.location.href = "Test";
      return <MyGroups/>
     
    }
    else if(this.state.num == 3){
      return 
    }
    else {
      return <SignUp num={this.state} />
    }
  }
 
  render() {
    return (      
      <div className="App-header">   
        { this.state.num == 1? <NewGroup></NewGroup>: <MyGroups/>
    }
        <SignIn num={this.state.num}/>      
      </div>       
    );
  }
}





export default Login;
 */