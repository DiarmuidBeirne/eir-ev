import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';



export default class BookingListItem extends Component {

  
  render() {
    let imgPath = 'images/' + this.props.listItem.chargerType + '/logo.png';

    const TimeString = this.props.listItem.startHour + ":" + this.props.listItem.startMinute;
    const DateString = this.props.listItem.startDate + "/" + this.props.listItem.startMonth + "/" + this.props.listItem.startYear;
    const primaryTitle = DateString + " " + TimeString;
    return (
     
    
<NavLink to={`booking/${this.props.listItem.bookingID}`}>
<ListItem alignItems="flex-start">
<ListItemAvatar>
  <Avatar alt="&" src={imgPath} />
</ListItemAvatar>
<ListItemText
  primary={<React.Fragment><h5>{primaryTitle}</h5><h6>{this.props.listItem.duration}{" mins"}</h6></React.Fragment>}
  secondary={
    <React.Fragment>
      <Typography component="span"  color="textPrimary">
      {this.props.listItem.addressLine1}{", "}{this.props.listItem.addressLine2}{", "} {this.props.listItem.addressLine3}
      </Typography>
      {"Status: "}{this.props.listItem.bookingStatus}
    </React.Fragment>
  }
/>
</ListItem>
</NavLink>

    )
  }
}
