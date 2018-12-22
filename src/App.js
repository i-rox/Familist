import Button from '@material-ui/core/Button';

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Menu from './manu/Menu';
import Todo from './todo/Todo';
import Login from './login/Login';
import ResetPassword from './login/ResetPassword';
import NewTask from './newTask/NewTask';
import NewGroup from './login/NewGroup';
import ManageGroup from './login/ManageGroup';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Menu />
       
          <Route path="/Home" component={Home} />
          <Route path="/Todo" component={Todo} />
          <Route path="/About" component={About} />
          <Route path="/NewTask" component={NewTask} />
          <Route path="/Login" component={Login} />
          <Route path="/ResetPassword" component={ResetPassword} /> 
          <Route path="/NewGroup" component={NewGroup} /> 
          <Route path="/ManageGroup" component={ManageGroup} />
        </main>
      </Router>
     
    );
  }
}

export default App;
