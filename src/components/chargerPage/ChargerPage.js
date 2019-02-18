import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCharger } from '../../actions/chargerActions';




class ChargerPage extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
         chargerID : this.props.match.params.chargerId
    }
}

componentWillMount()
{
  let id = this.props.match.params.chargerId
  this.props.fetchCharger(id);
  
}
    

  render() {
    
    let ID = this.state.chargerID;
      return <p>Charger ID: {ID}</p>
      
      
  }
}
const mapStateToProps = state => ({
  chargers: state.chargers.chargers
});


export default connect(mapStateToProps, { fetchCharger })(ChargerPage);