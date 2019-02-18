import React, { Component } from 'react'

import CustomListItem from './CustomListItem';
import PropTypes from "prop-types";
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchChargers } from '../actions/chargerActions';



class List extends Component {

  

componentWillMount() {
    
    this.props.fetchChargers();
    
    
}
  render() {
    
      return this.props.chargers.map((listItem) => (
          <React.Fragment>
          <CustomListItem key={listItem.id} listItem={listItem}/>
          <Divider variant="inset" />
          </React.Fragment>
      ));
      
      
  }
}

List.propTypes = {
  chargers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  chargers: state.chargers.chargers
});




export default connect(mapStateToProps, { fetchChargers })(List);