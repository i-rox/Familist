import React, { Component } from 'react';
import './Service.css';
/* 
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); */

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

  getUserById(id)
  {
    let users=JSON.parse(localStorage.getItem('users')); 
    for(let i=0;i<users.length;i++)
    {
      if(users[i].id==id)
      {
        return users[i];
      }
    }
   alert("user not found- error");
  }

  signIn(e)
  {
    if(localStorage.getItem('users')==null)
    {
      alert("any user exist");
      return;
    }  
    let users=JSON.parse(localStorage.getItem('users')); 
    let user={username:localStorage.getItem('username'), pass:localStorage.getItem('password')};
    for(let i=0;i<users.length;i++)
    {
      if(users[i].pass==user.pass&&users[i].username==user.username)
      {
        alert("this is the user!!!");
        return;
      }
    }
    alert("not exist:(");    
  }

  signUp()
  {
    let users=[];
    if(localStorage.getItem('users')!=null)
    {
      users=JSON.parse(localStorage.getItem('users'));
    }   
    let newUser={username:localStorage.getItem('username'), pass:localStorage.getItem('password'),id:1};
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    alert("check details&/n enter to all groups");  
  }

  returnGroups()
  {
    
    if(localStorage.getItem('groups')==null)
    {
      alert("any group exist");
      return;
    }  
    let groups=JSON.parse(localStorage.getItem('groups')); 
    let user=this.getUserById(1);//{username:localStorage.getItem('username'), pass:localStorage.getItem('password')};
    let myGroup=[];
    for(let i=0;i<groups.length;i++)
    {
      if (groups[i].pass==user.pass&&groups[i].username==user.username) {
          myGroup.push(groups[i]);
       }
    }
    return myGroup;
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
