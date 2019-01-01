import React, { Component } from 'react';
import './EditTask.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Service from '../service/Service'

const service = new Service();
class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id1: '',
      arr: ''
    }
  }
  componentWillMount() {
    debugger
    // alert({this.props.location.state.id});
    // this.setState({id1:this.props.location.state.id});
    // alert(this.props.id1);
    this.setState({ arr: JSON.parse(localStorage.getItem('objForEdit')) });
    this.setState({ id1: JSON.parse(localStorage.getItem('IdForEdit')) });
    //this.setState({arr:)
    debugger
  }
  // {this.state.id1}
  render() {
    return (

      <div className="editTask1">
        {this.state.id1}
        {this.state.arr.name}
        <div className="editTask2">
          id
      <input id="name" placeholder="id" >{this.state.id1}</input>
        </div>

      </div>
    );
  }
}
export default EditTask;
