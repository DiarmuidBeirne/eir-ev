import React, { Component } from 'react'

import BookingListItem from './bookingListItem';
import PropTypes from "prop-types";
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/bookingActions';
//import BottomNavbar from '../../chargerList/BottomNavbar';
import styled from "styled-components";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppHeader from '../AppHeader';


const NavContainer = styled.main`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

class List extends Component {
  
  

componentWillMount() {
    
    this.props.fetchBookings();

    
    
}

changeViewMode = (value) => {
  this.setState({ value });
};

  render() {
      const userBookingList = [];
      const allBookings= this.props.bookings;
      for(var i = 0; i < allBookings.length; i++)
    {
      console.log("User ID:" + this.props.User.userID);
      if (allBookings[i].customerID == this.props.User.userID) {
        userBookingList.push(allBookings[i]);
        
      }
    } 

      console.log("userList" + userBookingList);
      var liveList = userBookingList.map((listItem) => (
          <div>
          <BookingListItem key={listItem.chargerID} listItem={listItem}/>
          <Divider variant="inset" />
          </div>
      ));
        
      if(liveList.length === 0){
        liveList = 
        <div><br></br><br></br><h4>No Live Bookings</h4><br></br><br></br></div>;
      }
        //const viewMode = list;
      return (
        <div>
          <AppHeader usertype={this.props.User.type}/>
            <Typography variant="h5" component="h3">
          Profile of {this.props.User.firstname} {this.props.User.lastname}
        </Typography>
            <br></br>
             <Paper  elevation={6}>
        <Typography variant="h5" component="h3">
          Current/Live Bookings
        </Typography>
        
      </Paper>
      
      {liveList}
      
      
      <Paper  elevation={6}>
        <Typography variant="h5" component="h3">
          Previous Bookings
        </Typography>
        
      </Paper>
      <br></br><br></br><br></br><br></br>
      <h4>No Previous Bookings</h4>
          
          
        </div>
      );
      
      
  }
}




// List.propTypes = {
//   chargers: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
  bookings: state.bookings.bookings,
  User : state.user.user
  
});




export default connect(mapStateToProps, { fetchBookings })(List);