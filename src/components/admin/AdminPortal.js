import React, { Component } from 'react'

import CustomListItem from './CustomListItem';
import PropTypes from "prop-types";
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchChargers } from '../../actions/chargerActions';
import BottomNavbar from './BottomNavbar';
import styled from "styled-components";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import EuroIcon from '@material-ui/icons/EuroSymbol';
import { Button } from '@material-ui/core';
import AppHeader from '../AppHeader';


const NavContainer = styled.main`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const extendedIcon = styled.main`
    position: fixed;
    
    width: 200px;
`;



class List extends Component {
  
  

componentWillMount() {
    
    this.props.fetchChargers();
    
    
}

changeViewMode = (value) => {
  this.setState({ value });
};

  render() {
    
      const list = this.props.chargers.map((listItem) => (
          <div>
          <CustomListItem key={listItem.chargerID} listItem={listItem}/>
          <Divider variant="inset" />
          </div>
      ));
        
        const viewMode = <div><h3>Admin Portal</h3></div>;
      return (
        <div>
          <AppHeader/>
          {viewMode}
          <br></br>
          <Paper  elevation={10}>
        <Typography variant="h6" component="h6" color="primary">
          Overview
        </Typography>
        </Paper>
        <br></br>
        <h5>This Week you've earned</h5>
        <Button variant="contained" color="secondary">€6.00</Button>
        <br></br>
        <br></br>
        <h5>This Month you've earned</h5>
        <Button variant="contained" color="primary">€15.00</Button>
        <br></br>
        
        <br></br>
          <Paper  elevation={10}>
        <Typography variant="h6" component="h6" color="primary">
          Bookings to Approve
        </Typography>
        </Paper>
        <br></br><br></br>
        <h5>No Bookings to Approve!</h5>
        <br></br><br></br>
        <Paper  elevation={10}>
        <Typography variant="h6" component="h6" color="primary">
          Upcoming Bookings
        </Typography>
        </Paper>
        <br></br><br></br>
        <h5>No Upcoming Bookings</h5>
        <br></br><br></br>
        
        
        
          
          <NavContainer>
          <BottomNavbar changeView={this.changeViewMode}/>
          </NavContainer>
        </div>
      );
      
      
  }
}




List.propTypes = {
  chargers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  chargers: state.chargers.chargers
});




export default connect(mapStateToProps, { fetchChargers })(List);