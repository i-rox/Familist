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
import NewTask1 from '../newTask/NewTask'
import About from '../About';
import Service from '../service/Service';
import EditTask from '../editTask/EditTask';
import ShowTask from '../showTask/ShowTask';
import Sort from '../sort/Sort';
import ToDoList from './ToDoList';
const service = new Service();
class Todo extends Component {

  constructor(props) {
    super(props);
    this.createNewTask = this.createNewTask.bind(this);
    this.checkboxPriority = this.checkboxPriority.bind(this);
    this.sortPriority = this.sortPriority.bind(this);
    this.state = {
      arr: {},
      priorityFilter: [
      ],
      temp: '',
    };
  }
  //service
  componentWillMount() {
    this.setState({ arr: service.getList() });
  }
  createNewTask() {
    let path = '../newTask/NewTask';
    this.props.history.push(path);
    ToDoList.props.history.push(path);
  }
  
  markTaskAsDone(id) {
    let arr;
    arr = this.setState({ arr: service.markTaskAsDone(id) });
  }

  renderTask(task) {
    debugger
    if (this.state.priorityFilter.length === 0 || this.filters(task) === 1) {
      return (
        <div>
          <Task value={task}
            myClick={() => { this.markTaskAsDone(task._id)}}
           />
        </div>
      );
    }
    else {
      debugger
      return null;
    }
  }

  someMethod() {
    alert("parent");
  }

  filters(key) {
    debugger
    let t = 0;
    this.state.priorityFilter.map(item => {
      if (key.priority === item.prt) {
        debugger
        t = 1;
        return t;
      }
    });
    return t;
  }
  removeFilterPriority(v) {
    let arr;
    arr = this.state.priorityFilter.filter(function (obj, i) {
      if (obj.prt !== v) {
        return obj;
      }
    });
    this.setState({ priorityFilter: arr });
    this.props.history.push('Todo');
  }

  addFilterPriority(v) {
    let obj = { prt: v };
    this.state.priorityFilter.push(obj);
    this.props.history.push('Todo');
  }

  checkboxPriority(event) {
    debugger
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const v = target.value;
    if (value == true) {
      this.addFilterPriority(v);
    }
    else {
      this.removeFilterPriority(v);
    }
  }

  sortPriority(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // v not in use !! 
    // please dont delete it!!
    const v = target.value;
    debugger
    if (value == true) {
      this.setState({
        arr: this.state.arr.sort(function (obj1, obj2) {
          return obj1.priority - obj2.priority;
        })
      })
    }
    else {
      debugger
      this.setState({
        arr: this.state.arr.sort(function (obj1, obj2) {
          return obj1._id - obj2._id ;
        })
      })
    }
    debugger
    this.props.history.push('./Todo');
  }
renderSort(){
  return (
    <Sort sortPriority={this.sortPriority}/>
  );
}
  render() {
    return (
      <div >
       
        <List >
        {this.state.arr.map(item =>
          this.renderTask(item))
        }
       {/*   */}
        {/* <label>
          priority 1 :
          <input name="prt1" value="1" type="checkbox" onChange={this.checkboxPriority} />
        </label>
        <br />
        <label>
          priority 2 :
          <input name="prt2" value="2" type="checkbox" onChange={this.checkboxPriority} />
        </label>
        <br />
        {this.renderSort()} */}
        
        </List >
      </div>
    );
  }
}

export default Todo;