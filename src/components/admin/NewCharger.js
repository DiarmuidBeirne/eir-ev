import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppHeaderLogin from '../AppHeader';
import { connect } from 'react-redux';
import { fetchUserID } from '../../actions/loginActions';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';




import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });


class NewCharger extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
      addressLine1: this.props.User.addressLine1,
      addressLine2: this.props.User.addressLine2,
      addressLine3: this.props.User.addressLine3,
      auth: false,
      snackbarOpen: false,
      chargerTypeValue: "CHAdeMO",
      cost: "5.00",
    };
    
}


handleAddress1Change = evt => {
    this.setState({ addressLine1: evt.target.value });
};

handleAddress2Change = evt => {
    this.setState({ addressLine2: evt.target.value });
};

handleAddress3Change = evt => {
    this.setState({ addressLine3: evt.target.value });
};

handleCostChange = evt => {
  this.setState({cost: evt.target.value});
}

handleChargerTypeChange = evt => {
  this.setState({chargerTypeValue: evt.target.value});
}
  

  handleOwnerCheckBoxChange = evt => {
        this.setState({ownerChecked : evt.target.checked});
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    this.setState({ snackbarOpen: false });
  }; 

  
 


handleAddCharger = evt => {
  
    //this.setState({ usernameEntered: evt.target.value });
    evt.preventDefault();
    
    
    if(this.state.addressLine1 == null || this.state.addressLine1 == "")
    {
        
          this.setState({ snackbarOpen: true,
              errorMessage: "Please Enter Address Line 1",
              
           })
           return;
  
    }
    if(this.state.addressLine2 == null || this.state.addressLine2 == "")
    {
        
          this.setState({ snackbarOpen: true,
              errorMessage: "Please Enter Address Line 2",
              
           })
           return;
  
    }
    if(this.state.addressLine3 == null || this.state.addressLine3 == "")
    {
        
          this.setState({ snackbarOpen: true,
              errorMessage: "Please Enter Address Line 3",
           })
           return;
  
    }
    if(this.state.cost == "")
    {
        
          this.setState({ snackbarOpen: true,
              errorMessage: "Please Enter Cost Per Hour",
           })
           return;
  
    }
    var address1Split = this.state.addressLine1.split(' ').join('+');
    var address2Split =this.state.addressLine2.split(' ').join('+');
    var address3Split = this.state.addressLine3.split(' ').join('+');
    
    var apiURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address1Split + ",+" + address2Split + ",+" + address3Split + "&key=AIzaSyC0VqN9BaKZN43tT6E33A_ew2IlqOWHhww";
    var lat;
    var long;
    var body;
    fetch(apiURL)
    .then(res => res.json())
    .then(json => {
const lat = json.results[0].geometry.location.lat;
const long = json.results[0].geometry.location.long;
const body = {
  "addressLine1": this.state.addressLine1,
  "addressLine2": this.state.addressLine2,
  "addressLine3": this.state.addressLine3,
"chargerID": Math.floor(Math.random() * 99999) + 10000,
"chargerTypeName": this.state.chargerTypeValue,
"costPerHour": this.state.cost,
"lat": lat,
"long": long,
"owner": this.props.User.userID
}
fetch('https://61rek4ywu6.execute-api.us-east-2.amazonaws.com/live/-charger', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(res => res.json())
        .catch(error => console.log("error:" + error));
    console.log(this.state);
console.log(json);
    });

    // console.log("Body:" + JSON.stringify(body));
    // fetch('https://61rek4ywu6.execute-api.us-east-2.amazonaws.com/live/-charger', {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    //   }).then(res => res.json())
    //     .catch(error => console.log("error:" + error));
    // console.log(this.state);
  
    
  };

  render() {

    

  

    return (
      <main >
        <AppHeaderLogin/>
      <CssBaseline />
      <br></br>
      
      <div><Paper elevation={8}>
        
    <Typography component="h1" variant="h5">
      Add New Charger
    </Typography><form onSubmit={this.handleAddCharger}><br></br>
    <FormControl >
          <InputLabel htmlFor="adornment-amount">Charger Type</InputLabel>
          <Select
            value={this.state.chargerTypeValue}
            onChange={evt => this.handleChargerTypeChange(evt)}
            width={20}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            
            <MenuItem value={"CHAdeMO"}>CHAdeMO</MenuItem>
            <MenuItem value={"Tesla"}>Tesla</MenuItem>
            <MenuItem value={"Fast Charger"}>Fast Charger</MenuItem>
          </Select>
        </FormControl><br></br><br></br>
        <FormControl >
          <InputLabel htmlFor="adornment-amount">Cost</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.cost}
            onChange={evt => this.handleCostChange(evt)}
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
          />
        </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="text">Address Line 1</InputLabel>
      <Input id="addressLine1" name="addressLine1"  value={this.state.addressLine1} onChange={evt => this.handleAddress1Change(evt)}/>
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="text">Address Line 2</InputLabel>
      <Input id="addressLine2" name="addressLine2" autoComplete="email"  value={this.state.addressLine2} onChange={evt => this.handleAddress2Change(evt)}/>
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="text">Address Line 3</InputLabel>
      <Input name="addressLine3" type="text" id="addressLine3" value={this.state.addressLine3} onChange={evt => this.handleAddress3Change(evt)}/>
    </FormControl>
    
   
    <br></br><br></br>
    
    
    <Button
      onClick={this.handleAddCharger}
      type="submit"
      variant="contained"
      color="secondary"
      
    >
      Add
    </Button>
   
    <br></br><br></br>
  </form></Paper>
  
  </div>

      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={2000}
          
          onClose={this.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.errorMessage}</span>}
          action={[
            
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
    </main>
    )
  }
}
const mapStateToProps = state => ({
  User: state.user.user
});


export default connect(mapStateToProps, { fetchUserID })(NewCharger);
