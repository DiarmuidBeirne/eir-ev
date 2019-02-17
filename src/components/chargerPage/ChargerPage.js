import React, { Component } from 'react'



import Divider from '@material-ui/core/Divider';



class ChargerPage extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
         chargerID : this.props.match.params.chargerId
    }
}


    

  render() {
    
    let ID = this.state.chargerID;
      return <p>Charger ID: {ID}</p>
      
      
  }
}


export default ChargerPage;