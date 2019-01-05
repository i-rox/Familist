import React, { Component } from 'react';
import './Task.css';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
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
      <button className="isDone" onClick={this.props.myClick}>
       isdone
      </button>
      <button className="EditTask" onClick={this.props.myEditClick}>
      Edit
      </button>
    <Checkbox
    checked={this.state.checked.indexOf(1) !== -1}
    tabIndex={-1}
    disableRipple
  />
  <ListItemText primary={this.props.value.name} />
  <ListItemSecondaryAction>
    <IconButton aria-label="Comments">
      <CommentIcon />
    </IconButton>
  </ListItemSecondaryAction>
  </ListItem>
  </div>
    );
  }
}

export default Task;
