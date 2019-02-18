import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
import BoltIcon from '@material-ui/icons/OfflineBolt';
import { connect } from 'react-redux';
import { fetchChargers } from '../actions/chargerActions';
import { NavLink } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';
import styled from "styled-components";

const NavContainer = styled.main`
    position: fixed;
    bottom: 0;
    width: 100%;
`;
 
class Map extends Component {

    

    constructor(props) {
        
        super(props);
        
        this.state = { 
             
        }
    }
  
    componentWillMount() {
    
        this.props.fetchChargers();
        
        
    }
  
 
  render() {

    // let jsonData = this.props.chargerList;
    // var chargerLocations = [];
    // for(var i = 0; i < jsonData.length; i++)
    // {
    //   chargerLocations = chargerLocations + "{lat: " + jsonData[i].lat + ", lng: " + jsonData[i].lng + "}";
      
    // }
    console.log("runnings");
    console.log(this.props.chargers);

    let jsonData = this.props.chargers;
    var chargerObject;
    
    const locations = this.props.chargers.map((listItem) => (
        
        <BoltIcon
            lat={listItem.lat}
            lng={listItem.long}
          />
        
        
    ));
    
      let coOrd = {
          lat: 53.281032,
          lng: -9.057473
      }
     
    return (

        
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAzKE4Dk6IRvQR_W9Rkr8J3Lb3kxlGqM_I' }}
          defaultCenter={coOrd}
          defaultZoom={13}
        >
        
            {locations}
          
          
          
        </GoogleMapReact>
        <NavContainer>
          <BottomNavbar changeView={this.changeViewMode}/>
          </NavContainer>
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
    chargers: state.chargers.chargers
  });
  export default connect(mapStateToProps, { fetchChargers })(Map);