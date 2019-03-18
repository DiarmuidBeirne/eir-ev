import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import CustomListItem from './CustomListItem';
import PropTypes from "prop-types";
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchChargers } from '../../actions/chargerActions';
import BottomNavbar from './BottomNavbar';
import styled from "styled-components";
import Button from '@material-ui/core/Button'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AppHeader from '../AppHeader';

const NavContainer = styled.main`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

class myChargers extends Component {
  
  

componentWillMount() {
    
    this.props.fetchChargers();
    
    
}

changeViewMode = (value) => {
  this.setState({ value });
};

  render() {
    const myChargers = [];
    const allChargers = this.props.chargers;
    for(var i = 0; i < allChargers.length; i++)
    {  //allBookings[i].ownerID == this.props.User.userID && 
      if (allChargers[i].owner == this.props.User.userID) {
        
        myChargers.push(allChargers[i]);
        
      }
    }


      console.log("user type=" + this.props.User.type);
      const chargerList = myChargers.map((listItem) => (
          <div>
          <CustomListItem key={listItem.chargerID} listItem={listItem}/>
          <Divider variant="inset" />
          </div>
      ));
        
        
      return (
        <div>
          <AppHeader usertype={this.props.User.type}/>
          <div><h3>Owner Portal </h3></div>
          <br></br>
          <Paper  elevation={10}>
        <Typography variant="h6" component="h6" color="primary">
          My Chargers
        </Typography>
        </Paper>
        
          {chargerList}
          <br></br>
          <NavLink to="/newCharger">
        <Button variant="contained" color="primary"  onClick={this.handleBookingApproveClick}>
        Add New Charger
      </Button>
      </NavLink>
          <NavContainer>
          <BottomNavbar changeView={this.changeViewMode}/>
          </NavContainer>
        </div>
      );
      
      
  }
}






const mapStateToProps = state => ({
  chargers: state.chargers.chargers,
  User: state.user.user
});




export default connect(mapStateToProps, { fetchChargers })(myChargers);