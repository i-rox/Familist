/* /* import React, { Component } from 'react';
import './NewTask.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NewTask extends Component {
  //constructor(props){
    //super(props);
    //this.state={
     // arr2:{name:'',_id:''},
   // }
 // }
  //<button onClick={this.prepareNewTask()}>create</button>
  //onClick={()=>{this.CreateTask(this.state.arr2)} }
  render() {
    return (
     <div className="newTask1">
      <div className="newTask2">
      gfh
      <input id="name" placeholder="name" ></input>
      </div>
      <div className="newTask2">
      ddddfd
      <input id="id" placeholder="id"></input>
      </div>
      <div className="newTask2"></div>
      <div className="newTask2"></div>
      <div className="newTask2"></div>
      <div></div>
  <button >create</button>
      
     </div>
    );
  }
}

export default NewTask;
 */
/*import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  button: {
  
  },
});

const priorities = [
  {
    value: '1',
    label: 'high',
  },
  {
    value: '2',
    label: 'medium',
  },
  {
    value: '3',
    label: 'low',
  },
];

const contacts = [
  {
    value: '1',
    label: 'Yair',
  },
  {
    value: '2',
    label: 'Nechama',
  },
  {
    value: '3',
    label: 'Shira',
  },
];


class NewTask extends React.Component {
  state = {
    name: '',
    priority: '',
    assignedTo:''  
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
 
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          label="Task Name"
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)} 
          variant="outlined"       
        />
          <TextField
          id="outlined-number"
          label="todo"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classNames(classes.margin, classes.textField)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
          <TextField
          select
          label="Priority"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.priority}
          onChange={this.handleChange('priority')}
          variant="outlined"
          >
          {priorities.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          
        </TextField>
        <TextField
          id="outlined-full-width"
          label="Description"
          style={{ margin: 8 }}
          placeholder="shopping for Shabbat"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
       
        <TextField              
          label={<LocationOnIcon />}
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)} 
          variant="outlined"       
        >
        </TextField>
         <TextField
          select
          label="Assigned To"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.assignedTo}
          onChange={this.handleChange('assignedTo')}
          variant="outlined"
          >
          {contacts.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          
        </TextField>
        <TextField
          select
          label="Priority"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.priority}
          onChange={this.handleChange('priority')}
          variant="outlined"
          >
          {priorities.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          
        </TextField>
        <Button
         className={classNames(classes.margin, classes.button)} variant="outlined" className={classes.button}>create</Button>
        <Button className={classNames(classes.margin, classes.button)}  variant="outlined" className={classes.button}>
        save in repository
      </Button>
      </div>
    );
  }
}

NewTask.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewTask); */

import React, { Component } from 'react';
import './NewTask.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Service from "../service/Service"
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const service = new Service();

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      desc: '',
      _id:'',
      priority:''
    }
  }
  //onInit
  componentWillMount() {
    this.setState({ arr: service.getList() });
  }

  handleChange = prop => event => {
    let obj = {};
    obj[prop]=event.target.value;
    this.setState(obj);   
  };
 
handleSubmit(event) {
  let obj = {};
  obj.name = this.state.name;
  obj.desc = this.state.desc;
  obj.id = this.state.id;
  obj.priority = this.state.priority;
   this.setState({obj:service.insertItem(obj) });
   this.props.history.push('/ToDoList')
}
  render() {
    return (
      <div className="wrapp1" >
        <form onSubmit={this.handleSubmit.bind(this)}>
        <TextField
          label="Task Name"
          id="simple-start-adornment"
          className=''
          variant="outlined"       
        />
          <TextField
          id="outlined-number"
          label="todo"
          value={this.state.age}
          onChange={this.handleChange('priority')}
          type="number"
          className=''
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
          <div className="wrapp2">
          <input placeholder="id" value={this.state.id}
            onChange={this.handleChange('id')}></input>
            {this.state.id}
          </div>
          <div className="wrapp2">
            <input placeholder="name" value={this.state.name}
            onChange={this.handleChange('name')}></input>
            {this.state.name}
          </div>
          <div className="wrapp2">
            <input placeholder="desc" onChange={this.handleChange('desc')} ></input>
          </div>         
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default NewTask;
