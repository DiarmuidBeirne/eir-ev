import React, { Component } from 'react'

import CustomListItem from './CustomListItem';
import PropTypes from "prop-types";
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/bookingActions';
import BottomNavbar from './BottomNavbar';
import styled from "styled-components";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import EuroIcon from '@material-ui/icons/EuroSymbol';
import { Button } from '@material-ui/core';
import AppHeader from '../AppHeader';
import BookingItemToApprove from './BookingItemToApprove';
import BookingApprovedItem from './BookingApprovedItem';


const NavContainer = styled.main`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const extendedIcon = styled.main`
    position: fixed;
    
    width: 200px;
`;



class AdminPortal extends Component {
  
  

componentWillMount() {
    
  this.props.fetchBookings();    
    
}

changeViewMode = (value) => {
  this.setState({ value });
};

  render() {
    const bookingsToApprove = [];
    const approvedBookings = [];
    const allBookings= this.props.bookings;
    console.log(allBookings);
      for(var i = 0; i < allBookings.length; i++)
    {  
      if (allBookings[i].ownerID == this.props.User.userID && allBookings[i].bookingStatus === "Awaiting Approval") {
        bookingsToApprove.push(allBookings[i]);
      }
      if (allBookings[i].ownerID == this.props.User.userID && allBookings[i].bookingStatus === "Confirmed") {
        approvedBookings.push(allBookings[i]);
      }
    } 
    var that = this;
    var toApproveList = bookingsToApprove.map((listItem) => (
      <div>
      <BookingItemToApprove key={listItem.bookingID} listItem={listItem}/>
      <Divider variant="inset" />
      
      </div>

      
  ));

  var ApprovedList = approvedBookings.map((listItem) => (
    <div>
    <BookingApprovedItem key={listItem.bookingID} listItem={listItem}/>
    <Divider variant="inset" />
    
    </div>

    
));
      
        
        
      return (
        <div>
          <AppHeader usertype={this.props.User.type}/>
          <div><h3>Admin Portal</h3></div>
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
        {toApproveList}
        {toApproveList.length == 0 && (
                  <div><br></br><br></br>
                  <h5>No Bookings to Approve</h5>
                  <br></br><br></br></div>
                  )}
        
        <Paper  elevation={10}>
        <Typography variant="h6" component="h6" color="primary">
          Upcoming Bookings
        </Typography>
        </Paper>
        {ApprovedList}
        {ApprovedList.length == 0 && (
                  <div><br></br><br></br>
                  <h5>No Upcoming Bookings</h5>
                  <br></br><br></br></div>
                  )}
        
        
        
          
          <NavContainer>
          <BottomNavbar changeView={this.changeViewMode}/>
          </NavContainer>
        </div>
      );
      
      
  }
}






const mapStateToProps = state => ({
  bookings: state.bookings.bookings,
  User: state.user.user
});




export default connect(mapStateToProps, { fetchBookings })(AdminPortal);