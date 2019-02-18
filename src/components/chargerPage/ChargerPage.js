import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchChargers } from '../../actions/chargerActions';
import Map from './Map';




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
        <h1>{chargerObject.chargerTypeName}</h1>
        <br/>
        <h3>{chargerObject.addressLine1}</h3>
        <h3>{chargerObject.addressLine2}</h3>
        <h3>{chargerObject.addressLine3}</h3>
        </div>

        


      )
  }
}
const mapStateToProps = state => ({
  chargers: state.chargers.chargers
});


export default connect(mapStateToProps, { fetchChargers })(ChargerPage);