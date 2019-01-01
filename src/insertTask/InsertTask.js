import React, { Component } from 'react';
import './InsertTask.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Service from "../service/Service"
import Todo from '../todo/Todo';

const service = new Service();

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      desc: '',
      _id:'',
    }
  }
  //onInit
  componentWillMount() {
    this.setState({ arr: service.getList() });
  }
  handleChange(key, event) {
    let obj = {};
    obj[key] = event.target.value;
    //add obj to the constructor
    this.setState(obj);
  }
  handleSubmit(event) {
    let obj = {};
    obj.name = this.state.name;
    obj.desc = this.state.desc;
    obj._id = this.state._id;
   this.setState({obj:service.insertItem(obj) });
    // let path = '../newTodo/NewTodo';
    // this.props.history.push(path);
    alert(this.props.arr);
    this.props.history.push('../newTodo/NewTodo');
  }
  render() {
    return (
      <div className="wrapp1" >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="wrapp2">
          <input placeholder="id" value={this.state._id}
             onChange={this.handleChange.bind(this, '_id')}></input>
            {this.state._id}
          </div>
          <div className="wrapp2">
            <input placeholder="name" value={this.state.name}
            onChange={this.handleChange.bind(this, 'name')}></input>
            {this.state.name}
          </div>
          <div className="wrapp2">
            <input placeholder="desc" onChange={this.handleChange.bind(this, 'desc')} ></input>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default NewTodo;
