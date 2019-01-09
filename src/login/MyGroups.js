import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Service from '../service/Service';
import Button from '@material-ui/core/Button';


const service = new Service();

class MyGroups extends Component {
  
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

  }
  
  render() {
    return (      
      <div className="App-header">              
      <h3>My Groups</h3>
      <List>
       {service.returnGroups().map(item => {
         return ( <ListItem alignItems="flex-start"><Button onClick={() => { this.props.history.push('/Contacts') }}>
           <ListItemAvatar>
            <Avatar alt="groupLogo" src={ require('../images/82.jpg') } />
          </ListItemAvatar></Button>
           <ListItemText 
            primary={item.name}
            secondary={
              <React.Fragment>
                <Typography component="span" color="textPrimary">
                {item.description}
                </Typography>                
              </React.Fragment>
            } />
           </ListItem>)
      })}       
    </List>
    </div>       
    );
  }
}

export default MyGroups;
