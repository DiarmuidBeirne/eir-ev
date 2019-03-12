import React, { Component } from 'react'

import CustomListItem from './CustomListItem';
import PropTypes from "prop-types";
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchChargers } from '../../actions/chargerActions';
import BottomNavbar from './BottomNavbar';
import styled from "styled-components";
import Map from './Map';
import AppHeader from '../AppHeader';

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
      console.log("user type=" + this.props.User.type);
      const list = this.props.chargers.map((listItem) => (
          <div>
          <CustomListItem key={listItem.chargerID} listItem={listItem}/>
          <Divider variant="inset" />
          </div>
      ));
        
        const viewMode = list;
      return (
        <div>
          <AppHeader usertype={this.props.User.type}/>
          {viewMode}
          
          <NavContainer>
          <BottomNavbar changeView={this.changeViewMode}/>
          </NavContainer>
        </div>
      );
      
      
  }
}




List.propTypes = {
  chargers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  chargers: state.chargers.chargers,
  User: state.user.user
});




export default connect(mapStateToProps, { fetchChargers })(List);