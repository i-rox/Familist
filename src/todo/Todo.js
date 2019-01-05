import React, { Component } from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Task from '../task/Task';
import NewTask from '../newTask/NewTask'
import About from '../About';
import Service from '../service/Service';

const service = new Service();
class Todo extends Component {

  constructor(props) {
    super(props);
    this.createNewTask = this.createNewTask.bind(this);
    this.state = {
      arr: [
        { name: 'aaa ', _id: "22" },
        { name: 'bbb', _id: "33" },
        { name: 'ccc', _id: "44" }],
      fromChild: "",


    };
  }

  componentWillMount() {
    this.initData();
  }

  initData() {
    debugger
    this.setState({ arr: service.getList() });
  }

  myCallback = (fromChild) => {
    this.setState({ fromChild: fromChild });
  }

  someMethod() {
    console.log('bar');
  }

  change(value) {
    debugger
    this.setState({ x: value });
  }
  changeHandler() {
    debugger
  }

  prepareNewTask(i, n) {
    i = n;
  }
  createTask(arr2) {
    this.state.arr.push(arr2)
    this.setState(this.state)
  }
  createNewTask() {
    //let path = '../newTask/NewTask';
    let path = '../newTodo/NewTodo';
    this.props.history.push(path);
  }
  markTaskAsDone(id) {
    let arr;
    arr = this.state.arr.filter(function (obj, i) {
      if (obj._id !== id) {
        return obj;
      }
    });
    this.setState({
      arr: arr
    });
  }
  prepareNewTask() {
    let task = { name: 'kkk', id: '99' }
    //this.state.arr2.name="colo"
    this.state.arr2 = task
    this.setState(this.state)

    // this.state.CreateTask(this.state.arr2)
  }
  renderTask(key) {
    debugger
    if (this.state.arr[key]) {
      return (
        <Task value={this.state.arr[key]} myClick={() => { this.markTaskAsDone(this.state.arr[key]._id) }} />
      );
    }
    return null;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App-header">
        <h3>TODO list</h3>
        <List >
          {this.renderTask(0)}
          {this.renderTask(1)}
          {this.renderTask(2)}
          <button onClick={this.createNewTask}>new</button>
          <a href="./NewTask">new task</a>          
        </List>
      </div>
    );
  }
}

export default Todo;