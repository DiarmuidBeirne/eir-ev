import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/bookingActions';
import { createBooking } from '../../actions/bookingActions'
import Map from '../chargerPage/Map';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker } from 'material-ui-pickers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AppHeader from '../AppHeader';




class userBookingPage extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
      selectedDate: new Date(),
      timeRequired: 60,
         bookingID : this.props.match.params.bookingId,
         bookingObject: {}
    };
    
}

// handleDateChange = date => {
//   this.setState({ selectedDate: date });
// };

// handleTimeAdded = press => {
//   let newTime = this.state.timeRequired + 15;
//   this.setState({ timeRequired: newTime});
// }

// handleTimeRemoved = press => {
//   if(this.state.timeRequired > 0){

//   let newTime = this.state.timeRequired - 15;
//   this.setState({ timeRequired: newTime});
//   }
// }

// handleBooking = press => {
//   const min = ((this.state.selectedDate.getMinutes() == 0) ? this.state.selectedDate.getMinutes().toString() + "0" : this.state.selectedDate.getMinutes().toString());
//   const booking = {
//       addressLine1: this.state.chargerObject.addressLine1,
//       addressLine2: this.state.chargerObject.addressLine2,
//       addressLine3: this.state.chargerObject.addressLine3,
//       bookingID: Math.floor(Math.random() * 9999) + 1000,
//       chargerCode: 1234,
//       chargerID: this.state.chargerID,
//       chargerType: this.state.chargerObject.chargerTypeName,
//       cost: "0",
//       customerID: 3004,
//       duration: this.state.timeRequired,
//       lat: this.state.chargerObject.lat,
//       long: this.state.chargerObject.long,
//       powerUsed: 0,
//       startDate: this.state.selectedDate.getDate(),
//       startHour: this.state.selectedDate.getHours(),
//       startMinute: min,
//       startMonth: this.state.selectedDate.getMonth() + 1,
//       startYear: this.state.selectedDate.getFullYear(),
//       status: "booked"
//     }

//     this.props.createBooking(booking);
  
// }




componentWillMount()
{
  
  this.props.fetchBookings();
  let jsonData = this.props.bookings;
    var chargerObject;
    for(var i = 0; i < jsonData.length; i++)
    {
      
      if (jsonData[i].bookingID == this.state.bookingID) {
        this.setState({ bookingObject: jsonData[i]});
        
      }
    }
  
}
    

  render() {

    const { selectedDate } = this.state;
    const { bookingObject} = this.state;
    

      return (
        <div>
          <AppHeader/>
          <Map lat={bookingObject.lat} lng={bookingObject.long}/>
          <br></br>
          <Paper  elevation={3}>
        <Typography variant="h5" component="h3">
          Charger Type: {bookingObject.chargerType}
        </Typography>
        
      </Paper>
      <br></br>
      <Paper  elevation={1}>
        <Typography variant="h5" component="h5">
         Date: {bookingObject.startDate}{"/"}{bookingObject.startMonth}{"/"}{bookingObject.startYear}
        </Typography>
        
        <Divider variant="middle" />
        <Typography variant="h5" component="h5">
         Time: {bookingObject.startHour}{":"}{bookingObject.startMinute}
        </Typography>
        
        
        

      </Paper>

<br></br>
      <Paper  elevation={1}>
        <Typography variant="h6" component="h6">
          Address
        </Typography>
        <Typography component="p">
        {bookingObject.addressLine1}<br/>
        {bookingObject.addressLine2}<br/>
        {bookingObject.addressLine3}</Typography>
        <Divider variant="middle" />
        
        <Typography variant="h8" component="h8">
          Status: {bookingObject.status} 
        </Typography>
        

      </Paper>
        
<div>
      
      </div>
      <br></br>
      <h1>
        <Button variant="contained" color="secondary" onClick={this.handleBooking}>
        Start Now
      </Button>
      </h1>
      
        </div>

        


      )
  }
}
const mapStateToProps = state => ({
  bookings: state.bookings.bookings
});


export default connect(mapStateToProps, { fetchBookings, createBooking})(userBookingPage);