import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Menu from './manu/Menu';
import Todo from './todo/Todo';
import NewTask from './newTask/NewTask';
import Try1 from './try/Try1';
import Try3 from './try/Try3';
//with service
import InsertTask from './insertTask/InsertTask';
import NewTodo from './newTodo/NewTodo';
import EditTask from './editTask/EditTask';
import NewGroup from './login/NewGroup';
import ManageGroup from './login/ManageGroup';
import Test from './login/Test';
import Login from './login/Login';
import ResetPassword from './login/ResetPassword';
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
      <Router>
        <main>
          <Menu />
          <Route path="/EditTask" component={EditTask} />
          <Route path="/NewTodo" component={NewTodo} />
          <Route path="/InsertTask" component={InsertTask} />
          <Route path="/Try1" component={Try1} />
          <Route path="/Try3" component={Try3} />
          <Route path="/Home" component={Home} />
          <Route path="/Todo" component={Todo}  />
          <Route path="/About" component={About} />
          <Route path="/NewTask" component={NewTask} />
          <Route path="/Login" component={Login} />
          <Route path="/ResetPassword" component={ResetPassword} /> 
          <Route path="/NewGroup" component={NewGroup} /> 
          <Route path="/Test" component={Test} /> 
          <Route path="/ManageGroup" component={ManageGroup} />
        </main>
      </Router>
      
    );
  }
}


export default App;
