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
import CircularProgress from '@material-ui/core/CircularProgress';




class userBookingPage extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
      bookingConfirmed: false,
      chargerLive: false,
         bookingID : this.props.match.params.bookingId,
         bookingObject: {}
    };
    
}






componentWillMount()
{
  
  this.props.fetchBookings();
  let jsonData = this.props.bookings;
    var chargerObject;
    for(var i = 0; i < jsonData.length; i++)
    {
      
      if (jsonData[i].bookingID == this.state.bookingID) {
        this.setState({ bookingObject: jsonData[i]});
        if(jsonData[i].bookingStatus == "Confirmed" || jsonData[i].bookingStatus == "Live")
    {
      this.setState({bookingConfirmed : true});
    }
    if(jsonData[i].bookingStatus == "Live")
    {
      this.setState({chargerLive : true});
    }
      }
    }
   
    
}

handleChargerStart = () => {
 

  fetch('https://dnm79kp5u9.execute-api.us-east-2.amazonaws.com/prod/-charger', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
      "bookingID" : this.state.bookingObject.bookingID,
      "newStatus" : "Live"
  })
}).then(res => res.json())
  .catch(error => console.log("error:" + error));

  this.setState({ chargerLive: true});
        
}

handleChargerStop = () => {
  

  fetch('https://dnm79kp5u9.execute-api.us-east-2.amazonaws.com/prod/-charger', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
      "bookingID" : this.state.bookingObject.bookingID,
      "newStatus" : "Confirmed"
  })
}).then(res => res.json())
  .catch(error => console.log("error:" + error));

  this.setState({ chargerLive: false});
        
}
    

  render() {

    const { chargerLive } = this.state;
    const { bookingObject} = this.state;
    const { bookingConfirmed } = this.state;
    

      return (
        <div>
          <AppHeader usertype={this.props.User.type}/>
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
          Status: {bookingObject.bookingStatus} 
        </Typography>
        

      </Paper>
        
<div>
      
      </div>
      <br></br>
      <h1>
        {bookingConfirmed && !chargerLive && (
        <Button variant="contained" color="primary" onClick={this.handleChargerStart}>
        Start Now
        </Button>)}
        {!bookingConfirmed && (
        <Button variant="contained" color="secondary" disabled >
        Start Now
        </Button>)}
        {chargerLive && (<div>
          <CircularProgress /><br></br>
        <Button variant="contained" color="secondary" onClick={this.handleChargerStop}>
        Stop Power
        </Button></div>)}
      </h1>
      
        </div>

        


      )
  }
}
const mapStateToProps = state => ({
  bookings: state.bookings.bookings,
  User: state.user.user
});


export default connect(mapStateToProps, { fetchBookings, createBooking})(userBookingPage);