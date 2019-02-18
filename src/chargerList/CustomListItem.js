import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';



export default class CustomListItem extends Component {

  
  render() {
    let imgPath = 'images/' + this.props.listItem.chargerTypeName + '/logo.png';
    return (
     
     
<NavLink to={`chargerPage/${this.props.listItem.chargerID}`}>
<ListItem alignItems="flex-start">
<ListItemAvatar>
  <Avatar alt="&" src={imgPath} />
</ListItemAvatar>
<ListItemText
  primary={this.props.listItem.chargerTypeName}
  secondary={
    <React.Fragment>
      <Typography component="span"  color="textPrimary">
        {this.props.listItem.addressLine2}{", "} {this.props.listItem.addressLine3}
      </Typography>
      {"Hourly Rate: €"}{this.props.listItem.costPerHour}
    </React.Fragment>
  }
/>
</ListItem>
</NavLink>

    )
  }
}
