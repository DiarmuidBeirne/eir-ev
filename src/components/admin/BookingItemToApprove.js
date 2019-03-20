import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styled from "styled-components";


const actionButton = styled.button`
    position: fixed;
    bottom: 0;
    width: 20%;
    padding-right: 20px;
    margin-right: 20px;
    
`;


export default class BookingItemToApprove extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
      step: 1
      
    };
    
}


    handleBookingApproveClick = () => {
        console.log("Trying to Approve");

        fetch('https://dnm79kp5u9.execute-api.us-east-2.amazonaws.com/prod/-charger', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
            "bookingID" : this.props.listItem.bookingID,
            "newStatus" : "Confirmed"
        })
      }).then(res => res.json())
        .catch(error => console.log("error:" + error));
    if(this.state.step == 1){
      this.setState({step: 2});
    }
        this.props.func(this.props.listItem);
    }

    handleBookingRejectClick = () => {
      console.log("Trying to Approve");

      fetch('https://dnm79kp5u9.execute-api.us-east-2.amazonaws.com/prod/-charger', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
          "bookingID" : this.props.listItem.bookingID,
          "newStatus" : "Rejected"
      })
    }).then(res => res.json())
      .catch(error => console.log("error:" + error));
  
      this.props.func(this.props.listItem);
  }

    
  
  render() {
    let imgPath = 'images/' + this.props.listItem.chargerType + '/logo.png';

    const TimeString = this.props.listItem.startHour + ":" + this.props.listItem.startMinute;
    const DateString = this.props.listItem.startDate + "/" + this.props.listItem.startMonth + "/" + this.props.listItem.startYear;
    const primaryTitle = DateString + " " + TimeString;
    const name = this.props.listItem.customerFirstName + " " + this.props.listItem.customerLastName;
    return (
     
    

<ListItem alignItems="flex-start">
<ListItemAvatar>
  <Avatar alt="&" src={imgPath} />
</ListItemAvatar>
<ListItemText
  primary={<React.Fragment><h5>{name}</h5><h6>{primaryTitle} {"      "}  {this.props.listItem.duration}{" mins"}</h6></React.Fragment>}
  secondary={
    <React.Fragment>
      <Typography component="span"  color="textPrimary">
      {this.props.listItem.addressLine1}{", "}{this.props.listItem.addressLine2}{", "} {this.props.listItem.addressLine3}
      </Typography>
      {"Status: "}{this.props.listItem.bookingStatus}<br></br>
      {(this.state.step == 1) && (<Button variant="contained" color="primary" className={actionButton} onClick={this.handleBookingApproveClick}>
        Approve
      </Button>  
      )}
      {(this.state.step == 2) && (<Button variant="contained" color="primary" className={actionButton} onClick={this.handleBookingApproveClick}>
        Confirm
      </Button>  
      )}
      <Button variant="contained" color="secondary" onClick={this.handleBookingRejectClick}>
        Reject
      </Button>
      
    </React.Fragment>
  }
/>
</ListItem>


    )
  }
}
