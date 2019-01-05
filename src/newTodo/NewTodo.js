import React, { Component } from 'react';
import './NewTodo.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Task from '../task/Task';
import NewTask from '../newTask/NewTask'
import About from '../About';
import Service from '../service/Service';
import EditTask from '../editTask/EditTask';

const service =new Service();
class NewTodo extends Component {

  constructor(props) {
    super(props);
    this.createNewTask = this.createNewTask.bind(this);
    this.state = {
      idForEdit:'have to be number !!',
      arr: {},
    };
  }
  //service
componentWillMount() {
  // let arr;
     //arr=
     debugger
     this.setState({ arr: service.getList()});
    debugger
  }
  createNewTask() {
    let path = '../insertTask/InsertTask';
    this.props.history.push(path);
  }
  editTask(key){
    debugger
    service.getIdForEdit(key);
    let path='../editTask/EditTask';
    this.props.history.push(
      path
    //   {
    //   pathname:path,
    //   state:{id:key},
    // }
    );

  }
  markTaskAsDone(id){
    let arr;
    debugger
    arr=this.setState({arr:service.markTaskAsDone(id)});
  }
 
  renderTask(key) {
    debugger
   // if (this.state.arr[key]) {
      return (
        <div>
        <Task vggalue={key}
          myClick={() => { this.markTaskAsDone(key._id) }}  
          myEditClick={()=>{this.editTask(key._id)}}/>
          
          </div>
      );
   // }
    return null;
  }  
  someMethod(){
    alert("parent");
  }
  render() {
    // for (let i=0;i<service.getList.length;i++)
    // {
    //   this.renderTask(i)
    // }
    return (
      <div className="wrapp1">
    { this.state.arr.map(item=>
     this.renderTask(item))
     }
        {/* {this.renderTask(0)}
        {this.renderTask(1)}
        {this.renderTask(2)}
        {this.renderTask(3)}
        {this.renderTask(4)} */}

        <button onClick={this.createNewTask}>new</button>
        <EditTask parentMethod={this.someMethod}></EditTask>
      </div>
    );
  }

}


export default NewTodo;
