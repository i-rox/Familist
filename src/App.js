import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Menu from './manu/MenuBar';
import Todo from './todo/Todo';
import NewTask from './newTask/NewTask';
import EditTask from './editTask/EditTask';
import ShowTask from './showTask/ShowTask';
import NewGroup from './login/NewGroup';
import ManageGroup from './login/ManageGroup';
import Test from './login/Test';
import Test1 from './login/Test1';
import MyGroups from './login/MyGroups';
import SignUp from './login/SignUp';
import Album from './todo/Album';
import Login from './login/Login';
import ResetPassword from './login/ResetPassword';
import SignIn from './login/SignIn';
import Contacts from './login/Contacts';
import Typography from '@material-ui/core/Typography';
import Sort from './sort/Sort';
class App extends Component {
  constructor(props){
    super(props)
    this.setState={
      arrTry: [
        { name: 'aaa ', _id: "22" },
        { name: 'bbb', _id: "33" },
        { name: 'ccc', _id: "44" }],
    }
  }

  sendData() {
    console.log('bar');
  }

  render() {
   
    return (
      <div>
      <Router>
        <main>
          <Menu />
          <Route path="/Sort" component={Sort} />
          <Route path="/ShowTask" component={ShowTask} />
          <Route path="/EditTask" component={EditTask} />
          <Route path="/NewTask" component={NewTask} />
          <Route path="/Home" component={Home} />
          <Route path="/Todo" component={Todo}  />
          <Route path="/Album" component={Album}  />
          <Route path="/About" component={About} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/ResetPassword" component={ResetPassword} /> 
          <Route path="/NewGroup" component={NewGroup} /> 
          <Route path="/Test" component={Test} /> 
          <Route path="/Login" component={Login} /> 
          <Route path="/Test1" component={Test1} /> 
          <Route path="/ManageGroup" component={ManageGroup} />
          <Route path="/MyGroups" component={MyGroups} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Contacts" component={Contacts} />
        </main>
      </Router>
        {/* Footer */}
        <footer className="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
     </div> 
    );
  }
}


export default App;


