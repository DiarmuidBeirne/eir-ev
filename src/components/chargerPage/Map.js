import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
import BoltIcon from '@material-ui/icons/OfflineBolt';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  

  
 
  render() {
      let coOrd = {
          lat: parseFloat(this.props.lat),
          lng: parseFloat(this.props.lng)
      }
      console.log("center");
      console.log(this.props.center);
      console.log("coOrd");
      console.log(coOrd);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAzKE4Dk6IRvQR_W9Rkr8J3Lb3kxlGqM_I' }}
          defaultCenter={coOrd}
          defaultZoom={14.5}
        >
           <BoltIcon
            lat={this.props.lat}
            lng={this.props.lng}
            
          /> 

          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;