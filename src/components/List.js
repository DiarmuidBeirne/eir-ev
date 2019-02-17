import React, { Component } from 'react'

import CustomListItem from './CustomListItem';

import Divider from '@material-ui/core/Divider';



export default class List extends Component {
  render() {
   
      return this.props.chargerList.map((listItem) => (
          <React.Fragment>
          <CustomListItem key={listItem.id} listItem={listItem}/>
          <Divider variant="inset" />
          </React.Fragment>
      ));
      
      
  }
}
