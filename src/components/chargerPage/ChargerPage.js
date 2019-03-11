import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchChargers } from '../../actions/chargerActions';
import { createBooking } from '../../actions/bookingActions'
import Map from './Map';
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




class ChargerPage extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
      selectedDate: new Date(),
      timeRequired: 60,
         chargerID : this.props.match.params.chargerId,
         chargerObject: {}
    };
    
}

handleDateChange = date => {
  this.setState({ selectedDate: date });
};

handleTimeAdded = press => {
  let newTime = this.state.timeRequired + 15;
  this.setState({ timeRequired: newTime});
}

handleTimeRemoved = press => {
  if(this.state.timeRequired > 0){

  let newTime = this.state.timeRequired - 15;
  this.setState({ timeRequired: newTime});
  }
}

handleBooking = press => {
  const min = ((this.state.selectedDate.getMinutes() == 0) ? this.state.selectedDate.getMinutes().toString() + "0" : this.state.selectedDate.getMinutes().toString());
  const booking = {
      addressLine1: this.state.chargerObject.addressLine1,
      addressLine2: this.state.chargerObject.addressLine2,
      addressLine3: this.state.chargerObject.addressLine3,
      bookingID: Math.floor(Math.random() * 9999) + 1000,
      chargerCode: 1234,
      chargerID: this.state.chargerID,
      chargerType: this.state.chargerObject.chargerTypeName,
      cost: "0",
      customerID: this.props.User.userID,
      duration: this.state.timeRequired,
      lat: this.state.chargerObject.lat,
      long: this.state.chargerObject.long,
      powerUsed: 0,
      startDate: this.state.selectedDate.getDate(),
      startHour: this.state.selectedDate.getHours(),
      startMinute: min,
      startMonth: this.state.selectedDate.getMonth() + 1,
      startYear: this.state.selectedDate.getFullYear(),
      status: "booked"
    }
    
    this.props.createBooking(booking);
  
}




componentWillMount()
{
  
  this.props.fetchChargers();
  let jsonData = this.props.chargers;
    var chargerObject;
    for(var i = 0; i < jsonData.length; i++)
    {
      
      if (jsonData[i].chargerID == this.state.chargerID) {
        this.setState({ chargerObject: jsonData[i]});
        
      }
    }
  
}
    

  render() {
    
    const { selectedDate } = this.state;
    const { chargerObject} = this.state;
    

      return (
        <div>
          <Map lat={chargerObject.lat} lng={chargerObject.long}/>
          <br></br>
          <Paper  elevation={3}>
        <Typography variant="h5" component="h3">
          Charger Type: {chargerObject.chargerTypeName}
        </Typography>
        
      </Paper>
<br></br>
      <Paper  elevation={1}>
        <Typography variant="h6" component="h6">
          Address
        </Typography>
        <Typography component="p">
        {chargerObject.addressLine1}<br/>
        {chargerObject.addressLine2}<br/>
        {chargerObject.addressLine3}</Typography>
        <Divider variant="middle" />
        
        <Typography variant="h8" component="h8">
          €{chargerObject.costPerHour} per hour
        </Typography>
        

      </Paper>
        <br></br>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker value={selectedDate} onChange={this.handleDateChange} disablePast={true} minutesStep={15}/>
      </MuiPickersUtilsProvider>
      <br></br>
<div>
      <Fab color="primary" aria-label="Add" onClick={this.handleTimeAdded}>
        <AddIcon />
      </Fab> <h2>{this.state.timeRequired} mins</h2><Fab color="primary" aria-label="Add" onClick={this.handleTimeRemoved} >
        <RemoveIcon />
      </Fab> 
      </div>
      <br></br>
        <Button variant="contained" color="secondary" onClick={this.handleBooking}>
        Book Now
      </Button>
      
        </div>

        


      )
  }
}
const mapStateToProps = state => ({
  chargers: state.chargers.chargers,
  User: state.user.user 
});


export default connect(mapStateToProps, { fetchChargers, createBooking})(ChargerPage);