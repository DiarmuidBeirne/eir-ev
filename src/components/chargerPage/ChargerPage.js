import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchChargers } from '../../actions/chargerActions';
import Map from './Map';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



class ChargerPage extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
         chargerID : this.props.match.params.chargerId
    }
}

componentWillMount()
{
  
  this.props.fetchChargers();
  
}
    

  render() {
    let jsonData = this.props.chargers;
    var chargerObject;
    for(var i = 0; i < jsonData.length; i++)
    {
      console.log(jsonData[i].chargerID);
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