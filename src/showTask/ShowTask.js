import React, { Component } from 'react';
import './ShowTask.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Service from '../service/Service';


const service = new Service();
class ShowTask extends Component {
  constructor(props) {
    super(props);
    this.backToList = this.backToList.bind(this);
    this.state = {
      id1: '',
      showObj: ''
    }
  }
  componentWillMount() {
    debugger
    // alert({this.props.location.state.id});
    // this.setState({id1:this.props.location.state.id});
    // alert(this.props.id1);
    this.setState({ showObj: JSON.parse(localStorage.getItem('objFromLocalStorage')) });
    //this.setState({ id1: JSON.parse(localStorage.getItem('IdForEdit')) });
    //this.setState({arr:)
    debugger
  }
  // {this.state.id1}
  backToList(){
    debugger
    let path = '../todo/Todo';
    this.props.history.push(path);   
  }
  render() {
    return (
      <div className="ShowTask">
        <div className="ShowTask1">
          name :
{this.state.showObj.name}
        </div>
        <div className="ShowTask1">
          desc :
{this.state.showObj.desc}
        </div>
        <div className="ShowTask1">
          priority :
          {this.state.showObj.priority}
        </div>
        <button onClick={this.backToList}>back to list</button>
      </div>
    );
  }
}
export default ShowTask;
