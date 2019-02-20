import React, { Component } from 'react'

import CustomListItem from '../../chargerList/CustomListItem';
import PropTypes from "prop-types";
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchChargers } from '../../actions/chargerActions';
import BottomNavbar from '../../chargerList/BottomNavbar';
import styled from "styled-components";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const NavContainer = styled.main`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

class List extends Component {
  
  

componentWillMount() {
    
    this.props.fetchChargers();
    
    
}

changeViewMode = (value) => {
  this.setState({ value });
};

  render() {
    
      const list = this.props.chargers.map((listItem) => (
          <div>
          <CustomListItem key={listItem.chargerID} listItem={listItem}/>
          <Divider variant="inset" />
          </div>
      ));
        
        const viewMode = list;
      return (
        <div>
            <Typography variant="h5" component="h3">
          Profile
        </Typography>
            <br></br>
             <Paper  elevation={6}>
        <Typography variant="h5" component="h3">
          Current/Live Bookings
        </Typography>
        
      </Paper>
      <br></br>
      <br></br>
      <h4>No Current/Live Bookings</h4>
      <br></br>
      <br></br>
      <Paper  elevation={6}>
        <Typography variant="h5" component="h3">
          Previous Bookings
        </Typography>
        
      </Paper>
      <br></br>
          {viewMode}
          
          
        </div>
      );
      
      
  }
}




List.propTypes = {
  chargers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  chargers: state.chargers.chargers
});




export default connect(mapStateToProps, { fetchChargers })(List);