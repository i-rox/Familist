import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Contact.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


class Contact extends Component {
  
    render (){
      return(
        <ListItem alignItems="flex-start" id={this.props.id}>
          <ListItemAvatar>
            <Avatar alt="groupLogo" src={ require('../images/82.jpg') } />
          </ListItemAvatar>
          <ListItemText
            primary={ this.props.username }         
          />
        </ListItem>
    );
  }
}

export default Contact;