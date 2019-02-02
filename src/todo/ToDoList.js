import React, { Component } from 'react';
import './Todo.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Todo from './Todo';
import Service from '../service/Service';
import ToDoPerUser from './ToDoPerUser';
import PropTypes from 'prop-types';

const service = new Service();

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class ToDoList extends Component {

  constructor(props) {
    super(props);    
    this.state = {
      value: 0,
    };
  }
  
  createNewTask() {
    let path = '../NewTask';
    this.props.history.push(path);
  }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="root">
      <AppBar position="static" color="default" className="appBar">
        <Tabs value={value} className="appBar" onChange={this.handleChange.bind(this)} >
          <Tab label="Group Tasks" />
          <Tab label="My Tasks" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><ToDoPerUser></ToDoPerUser></TabContainer>}
      {value === 1 && <TabContainer><Todo></Todo></TabContainer>}
      <Button variant="contained" color="primary" onClick={this.createNewTask.bind(this)}>
          new
        </Button>
    </div>
    );
  }  
}

export default ToDoList;