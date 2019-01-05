//import React, { Component } from 'react';
//import Button from 'material-ui/Button';

//import withLayout from '../lib/withLayout';
//import { styleLoginButton } from '../components/SharedStyles';

/* const Test1 = () => (
  <div style={{ textAlign: 'center', margin: '0 20px' }}>
   {/*  <Head>
      <title>Log in to Builder Book</title>
      <meta name="description" content="Login page for builderbook.org" />
    </Head> }
    <br />
    <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: '400' }}>Log in</p>
    <p>You’ll be logged in for 14 days unless you log out manually.</p>
    <br />
    <button variant="raised" href="/auth/google">
      <img src={ require('../images/82.jpg') } alt="Log in with Google" />
      &nbsp;&nbsp;&nbsp; Log in with Google
    </button> 
  </div>
);

export default Test1;*/





 
/* import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from 'react-router-dom';
import {  Container, Row, Col } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Input from 'reactstrap/lib/Input';

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
      this.setState({num:2})
    }      
      
    render() {
      return (      
        <div className="App-header">   
          
          <a href="./SignUp">New to Familist? Sign up!</a>
          <div className='Login'>       
            <h3>Sign In</h3>   
            <form onSubmit={(e)=>this.signIn(e)}>
              <Input type='email' name='username' placeholder='username' />
              <Input type='password' name='password' placeholder='password' />
              <button>Sign In</button>               
            </form>
            <a href="./ResetPassword">forgot password?</a>
          </div>
         </div>       
      );
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
   
class Test1 extends React.Component {

   constructor(props){
      super(props);
      this.state = {
           active:'FIRST'
       }
       this.handleClick = this.handleClick.bind(this);
      }

   handleClick() {
       let active = this.state.active;
       let newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
       this.setState({
           active: newActive
       });
   }

   render(){     
      return ( 
         <Container>
           <div>
               {this.state.active === 'FIRST' ? (
                   <SignIn active='SECOND'></SignIn>
               ) : this.state.active === 'SECOND' ? (
                   <SignUp active='SECOND' ></SignUp>
               ) : null}
               <button type="button" onClick={this.handleClick}>
                   Toggle
               </button>
           </div>
           </Container>
           )
   };
}

export default Test1;
//export default Parent;
 */

//import Head from 'next/head';
