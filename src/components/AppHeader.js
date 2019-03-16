import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import red from '@material-ui/core/colors/red';

const redcolor = red[500];


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

class AppHeader extends React.Component {
  state = {
    admin: (this.props.usertype == "admin"),
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
    const { admin, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        
        <AppBar position="static" color="white" elevation={8}>
          <Toolbar>
          <NavLink to="/chargerListings">
            <IconButton className={classes.menuButton} color="secondary" aria-label="home">
              <HomeIcon />
            </IconButton>
            </NavLink>
            
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Eir Ev
            </Typography>
            
            
              <div>
               
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="primary"
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
                {admin && (
                  <NavLink to="/admin">
                  <MenuItem onClick={this.handleClose}>Owner Portal</MenuItem>
                  </NavLink>
                  )}
                  <NavLink to="/profile">
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  </NavLink>
                  
                  <NavLink to="/">
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </NavLink>
                </Menu> 
              </div>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);