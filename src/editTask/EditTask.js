import React, { Component } from 'react';
import './EditTask.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Service from '../service/Service'

const service = new Service();
class EditTask extends Component {
  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this);
    this.state = {
      editId: '',
      editName: '',
      editDesc: '',
      editPriority: '',
      arr: JSON.parse(localStorage.getItem('objFromLocalStorage'))
    }
  }

  componentWillMount() {
    this.setState({ editName: this.state.arr.name });
    this.setState({ editDesc: this.state.arr.desc });
    this.setState({ editPriority: this.state.arr.priority });
  }

  handleChange(key, event) {
    let obj = {};
    obj[key] = event.target.value;
    //add obj to the constructor
    if (key === 'editName') {
      this.setState({ editName: event.target.value })
    }
    else {
      if (key === "editDesc") {
        this.setState({ editDesc: event.target.value })
      }
      else {
        if (key === "editPriority") {
          this.setState({ editPriority: event.target.value })
        }
      }
    }
  }
  saveChanges() {
    let obj = {};
    obj._id = this.state.arr._id;
    obj.name = this.state.editName;
    obj.desc = this.state.editDesc;
    obj.priority = this.state.editPriority;
    service.update(obj);
    this.props.history.push('../todo/Todo');
  }
  render() {
    return (

      <div className="editTask1"  >

        <div className="editTask2" >
          name :
        {this.state.editName}
          <input value={this.state.editName}
            onChange={this.handleChange.bind(this, 'editName')}></input>
        </div>

        <div className="editTask2">
          desc :
          <input id="desc" value={this.state.editDesc}
            onChange={this.handleChange.bind(this, 'editDesc')}></input>
        </div>

        <div className="editTask2">
          priority :
          <input id="priority" value={this.state.editPriority}
            onChange={this.handleChange.bind(this, 'editPriority')}></input>
        </div>
        <button onClick={this.saveChanges}>save</button>
      </div>
    );
  }
}
export default EditTask;
