import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ListIcon from '@material-ui/icons/FormatListBulleted';
import MapIcon from '@material-ui/icons/Map';

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
        <BottomNavigationAction label="List" icon={<ListIcon />} />
        <BottomNavigationAction label="Map View" icon={<MapIcon/>} />
      </BottomNavigation>
    );
  }
}


export default withStyles(styles)(BottomNavbar);