import React, { Component } from 'react'

import CustomListItem from './CustomListItem';

import Divider from '@material-ui/core/Divider';



class List extends Component {

  constructor() {
        
    super();
    this.state = {
        items: []  
    }
}

componentDidMount() {
    console.log("its being called");
    fetch('https://61rek4ywu6.execute-api.us-east-2.amazonaws.com/live/-charger')
    .then(res => res.json())
    .then(json => {
        this.setState({
            
            items: json.Items
        })
    });
    
    
}
  render() {
    console.log(this.state);
      return this.state.items.map((listItem) => (
          <React.Fragment>
          <CustomListItem key={listItem.id} listItem={listItem}/>
          <Divider variant="inset" />
          </React.Fragment>
      ));
      
      
  }
}


export default List;