import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchChargers } from '../../actions/chargerActions';
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
      timeRequired: 30,
         chargerID : this.props.match.params.chargerId
    }
}

handleDateChange = date => {
  this.setState({ selectedDate: date });
};

handleTimeAdded = press => {
  let newTime = this.state.timeRequired + 30;
  this.setState({ timeRequired: newTime});
}

handleTimeRemoved = press => {
  if(this.state.timeRequired > 0){

  let newTime = this.state.timeRequired - 30;
  this.setState({ timeRequired: newTime});
  }
}




componentWillMount()
{
  
  this.props.fetchChargers();
  
}
    

  render() {

    const { selectedDate } = this.state;

    let jsonData = this.props.chargers;
    var chargerObject;
    for(var i = 0; i < jsonData.length; i++)
    {
      
      if (jsonData[i].chargerID == this.state.chargerID) {
        chargerObject = jsonData[i];
        
      }
    }

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
        <Button variant="contained" color="secondary" >
        Book Now
      </Button>
      
        </div>

        


      )
  }
}
const mapStateToProps = state => ({
  chargers: state.chargers.chargers
});


export default connect(mapStateToProps, { fetchChargers })(ChargerPage);