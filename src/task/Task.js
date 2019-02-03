import React, { Component } from 'react';
import './Task.css';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NewTask from '../newTask/NewTask'
import About from '../About';
import Service from '../service/Service';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Task extends Component {
  state = {
    checked: [0],
  };
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  editTask(task) {
    debugger
    let path = '../showTask/ShowTask';
    this.props.history.push({
      pathname: path,
      state: task
    })
    //this.props.history.push(path);
  }/* 

  editTask(task) {
    debugger
    let path = '../editTask/EditTask';
    this.props.history.push({
      pathname:path,
      state:task
    });
  } */

  render() {
    return (
      <div className="App-header">
      <ListItem key={1} role={undefined} dense button>
       
  <ListItemText primary={this.props.value.name} secondary={this.props.value.priority}/>
 
  
    <IconButton aria-label="Delete">
      <DeleteIcon onClick={this.props.myClick} />
    </IconButton>
    <IconButton aria-label="Delete" onClick={()=>this.editTask(this.props.value)}>
    <EditIcon/>    
    </IconButton>
  <Checkbox onClick={this.handleToggle(1)}
    checked={this.state.checked.indexOf(1) !== -1}
    tabIndex={-1}
    disableRipple
  />
  </ListItem>
  </div>
    );
  }
}

export default withRouter(Task);
