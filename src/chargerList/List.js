import React, { Component } from 'react'

import CustomListItem from './CustomListItem';
import PropTypes from "prop-types";
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchChargers } from '../actions/chargerActions';
import BottomNavbar from './BottomNavbar';
import styled from "styled-components";


const NavContainer = styled.main`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

class List extends Component {

  

componentWillMount() {
    
    this.props.fetchChargers();
    
    
}
  render() {
    
      const list = this.props.chargers.map((listItem) => (
          <div>
          <CustomListItem key={listItem.chargerID} listItem={listItem}/>
          <Divider variant="inset" />
          </div>
      ));

      return (
        <div>
          {list}
          <NavContainer>
          <BottomNavbar/>
          </NavContainer>
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