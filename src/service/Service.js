import React, { Component } from 'react';
import './Service.css';

class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {

      list: [
        { name: 'task1 ', _id: "11", desc: "" },
        { name: 'task2', _id: "22", desc: "" },
        { name: 'task3', _id: "33", desc: "" }

      ]
    };
  }
  //oninit react
  setList(l1) {
    //this.state.list = list;
    debugger
    this.setState = ({
      list: l1,
    });
  }

  getList() {
    if (localStorage.getItem('tasksList') === null) {
      debugger
      localStorage.setItem('tasksList', JSON.stringify(this.state.list));

    }
    debugger
    return JSON.parse(localStorage.getItem('tasksList'));
  }

  insertItem(obj) {
    debugger
    this.setState({
      list: this.state.list.push(obj),
    });
    localStorage.setItem('tasksList', JSON.stringify(this.state.list));
    return this.state.list;
  }

  markTaskAsDone(id) {
    let arr;
    arr = this.getList().filter(function (obj, i) {
      if (obj._id !== id) {
        return obj;
      }
    });
    this.setList(arr);
    return (arr);

  }
  getIdForEdit(id) {
    this.state.list.map(item => {
      if (item._id === id) {
        localStorage.setItem('objForEdit', JSON.stringify(item));
      }
    }
    )
debugger
    localStorage.setItem('IdForEdit', JSON.stringify(id));
    debugger

  }
  render() {
    return this.props.children;
  }

}
export default Service;
