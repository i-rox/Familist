import React, { Component } from 'react';
//import './NewGroup.css';
import './Login.css';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Service from '../service/Service'

const service = new Service();

class NewGroup extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      groupname: '',
      password:'',
      description:''      
    }
  }

  handleSubmit(event){
    let groupDetails = {};
    groupDetails.groupname = this.state.groupname;
    groupDetails.password = this.state.password;
    groupDetails.description = this.state.description;
    service.createGroup(groupDetails);  
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    return (      
      <div className="App-header">     
        <div className='main'>       
          <h3>New Group</h3>
          <form onSubmit={this.handleSubmit.bind(this)} className='form'>
            <FormControl margin="normal" required fullWidth >
              <Input type='text' name='groupname' placeholder='group name' onChange={this.handleChange('groupname')}/>
            </FormControl> 
            <FormControl margin="normal" required fullWidth>
              <Input type='password' name='password' placeholder='password' onChange={this.handleChange('password')}/>
            </FormControl>
             <FormControl margin="normal" fullWidth>
              <Input type='text' name='description' placeholder='description' onChange={this.handleChange('description')}/>  
            </FormControl>         
            <button>Create</button>
          </form>
        </div>
      </div>       
    );
  }
}

export default NewGroup;
