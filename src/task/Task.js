import React, { Component } from 'react';
import './Task.css';
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

  render() {
    return (
      <div className="App-header">
      <ListItem key={1} role={undefined} dense button onClick={this.handleToggle(1)}>
       <Checkbox
    checked={this.state.checked.indexOf(1) !== -1}
    tabIndex={-1}
    disableRipple
  />
  <ListItemText primary={this.props.value.name} secondary={this.props.value.priority}/>
 
  <ListItemSecondaryAction>
    <IconButton aria-label="Comments">
      <CommentIcon onClick={this.props.myShowClick}/>     
    </IconButton>
    <IconButton aria-label="Delete">
      <DeleteIcon onClick={this.props.myClick} />
    </IconButton>
    <IconButton aria-label="Delete">
    <EditIcon onClick={this.props.myEditClick}/>    
    </IconButton>
  </ListItemSecondaryAction>
  </ListItem>
  </div>
    );
  }
}

export default Task;
