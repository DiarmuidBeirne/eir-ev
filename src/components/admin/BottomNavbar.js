import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ListIcon from '@material-ui/icons/FormatListBulleted';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { NavLink } from 'react-router-dom';

const styles = {
  root: {
    width: 500,
  },
};

class BottomNavbar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    
    const { value } = this.state;

    return (
      
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
      >
      <NavLink to={"/admin"}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </NavLink>
      <NavLink to={"/myChargers"}>
        <BottomNavigationAction label="List" icon={<ListIcon />} />
        </NavLink>
        
      </BottomNavigation>
    );
  }
}


export default withStyles(styles)(BottomNavbar);