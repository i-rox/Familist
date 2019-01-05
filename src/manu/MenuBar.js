 import React, { Component } from 'react';
import './Menu.css';
/*import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {  NavItem, Navbar, NavLink, Nav } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Menu extends Component {
  render() {
    return (   
       
        <AppBar position="static">
        
          <Toolbar> <Link to="/Login">Login</Link>
          </Toolbar>
   
            <Toolbar>
              <Link to="/ManageGroup">ManageGroup</Link>
            </Toolbar>
          <Toolbar>
              <Link to="/NewTodo">NewTodo</Link>
            </Toolbar>
          <Toolbar>
              <Link to="/InsertTask">InsertTask</Link>
            </Toolbar>
            <Toolbar>
              <Link to="/Try3">try3</Link>
            </Toolbar>
          <Toolbar>
              <Link to="/Try1">try1</Link>
            </Toolbar>
            <Toolbar>
              <Link to="/Home">Home</Link>
            </Toolbar>
            <Toolbar>
              <Link to="/Todo">Todo</Link>
            </Toolbar>
            <Toolbar>
              <Link to="/About">About</Link>
            </Toolbar>
            <Toolbar>
              <Link to="/details">Details</Link>
            </Toolbar>
          
          <hr />

        </AppBar>
        
      
    );
  }
}


export default Menu;
 */

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuBar extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              FamiList
            </Typography>
            <Link to="/details">Details </Link>
            <Link to="/Login">Login </Link>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><Link to="/Profile">Profile</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
