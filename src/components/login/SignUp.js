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
import AppHeaderLogin from './AppHeaderLogin'
import { connect } from 'react-redux';
import { fetchUserID } from '../../actions/loginActions';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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


class SignUp extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
        step: 1,
      firstNameEntered: "",
      lastNameEntered: "",
      emailEntered: "",
      passwordEntered: "",
      passwordConfirmEntered: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      auth: false,
      snackbarOpen: false,
      errorMessage: "",
      ownerChecked: false
    };
    
}

handleSnackbarClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  this.setState({ snackbarOpen: false });
}; 

handleFirstNameChange = evt => {
    this.setState({ firstNameEntered: evt.target.value });
};

handleLastNameChange = evt => {
    this.setState({ lastNameEntered: evt.target.value });
};

handleEmailChange = evt => {
  this.setState({ emailEntered: evt.target.value });
};

handlePasswordChange = evt => {
  this.setState({ passwordEntered: evt.target.value });
  
};

handlePasswordConfirmChange = evt => {
    this.setState({ passwordConfirmEntered: evt.target.value });
    
  };

  handleAddress1Change = evt => {
    this.setState({ addressLine1: evt.target.value });
};

handleAddress2Change = evt => {
    this.setState({ addressLine2: evt.target.value });
};

handleAddress3Change = evt => {
    this.setState({ addressLine3: evt.target.value });
};
  

  handleOwnerCheckBoxChange = evt => {
        this.setState({ownerChecked : evt.target.checked});
  }

handleSignUp1 = evt => {
  
  //this.setState({ usernameEntered: evt.target.value });
  evt.preventDefault();
  
  
  if(this.state.firstNameEntered == "")
  {
      
        this.setState({ snackbarOpen: true,
            errorMessage: "Please Enter Your First Name",
            passwordEntered: "",
            passwordConfirmEntered: ""
         })
         return;

  }
  if(this.state.lastNameEntered == "")
  {
      
        this.setState({ snackbarOpen: true,
            errorMessage: "Please Enter Your Last Name",
            passwordEntered: "",
            passwordConfirmEntered: ""
         })
         return;

  }
  if(this.state.emailEntered == "")
  {
      
        this.setState({ snackbarOpen: true,
            errorMessage: "Please Enter Your Email",
            passwordEntered: "",
            passwordConfirmEntered: ""
         })
         return;

  }
  if(this.state.passwordEntered == "" || this.state.passwordConfirmEntered == "")
  {
      
        this.setState({ snackbarOpen: true,
            errorMessage: "Please Enter Password",
            passwordEntered: "",
            passwordConfirmEntered: ""
         })
         return;

  }
  if(!(this.state.passwordEntered == this.state.passwordConfirmEntered))
  {
      
        this.setState({ snackbarOpen: true,
            errorMessage: "Password Do not Match",
            passwordEntered: "",
            passwordConfirmEntered: ""
         })
         return;

  }
  this.setState({step: 2});
  
 
};

handleSignUp2 = evt => {
  
    //this.setState({ usernameEntered: evt.target.value });
    evt.preventDefault();
    
    
    if(this.state.addressLine1 == "")
    {
        
          this.setState({ snackbarOpen: true,
              errorMessage: "Please Enter Address Line 1",
              
           })
           return;
  
    }
    if(this.state.addressLine2 == "")
    {
        
          this.setState({ snackbarOpen: true,
              errorMessage: "Please Enter Address Line 2",
              
           })
           return;
  
    }
    if(this.state.addressLine3 == "")
    {
        
          this.setState({ snackbarOpen: true,
              errorMessage: "Please Enter Address Line 3",
           })
           return;
  
    }
    var userType;
    if(this.state.ownerChecked){
      userType = "admin";
    }
    else
    {
      userType= "standard";
    }
    
    fetch('https://ra99vqdv4m.execute-api.us-east-2.amazonaws.com/prod/-charger', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "addressLine1": this.state.addressLine1,
        "addressLine2": this.state.addressLine2,
        "addressLine3": this.state.addressLine3,
      "email": this.state.emailEntered,
      "firstname": this.state.firstNameEntered,
      "lastname": this.state.lastNameEntered,
      "password": this.state.passwordEntered,
      "type": userType,
      "userID": Math.floor(Math.random() * 99999) + 10000
      })
    }).then(res => res.json())
      .catch(error => console.log("error:" + error));
      this.setState({step: 3});
  console.log(this.state);
    

    
  };

  render() {

    

    const step1 = <div><Paper elevation={8}>
        
    <Typography component="h1" variant="h5">
      Sign Up
    </Typography><form onSubmit={this.handleSignUp1}>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="text">First Name</InputLabel>
      <Input id="firstName" name="firstName" autoFocus="true" value={this.state.firstNameEntered} onChange={evt => this.handleFirstNameChange(evt)}/>
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="text">Last Name</InputLabel>
      <Input id="firstName" name="firstName"  value={this.state.lastNameEntered} onChange={evt => this.handleLastNameChange(evt)}/>
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="email">Email</InputLabel>
      <Input id="email" name="email" autoComplete="email"  value={this.state.emailEntered} onChange={evt => this.handleEmailChange(evt)}/>
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.passwordEntered} onChange={evt => this.handlePasswordChange(evt)}/>
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="password">Confirm Password</InputLabel>
      <Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.passwordConfirmEntered} onChange={evt => this.handlePasswordConfirmChange(evt)}/>
    </FormControl>
   
    <br></br><br></br>
    
    
    <Button
      onClick={this.handleSignUp1}
      type="submit"
      variant="contained"
      color="secondary"
      
    >
      Sign up
    </Button>
   
    <br></br><br></br>
  </form></Paper>
  <br></br><br></br><br></br>
  <h6>Already Have an Account?</h6>
  <NavLink to="/"><h5>Sign in here</h5></NavLink>
  </div>

  const step2 = 
  <div><Paper elevation={8}>
        
  <Typography component="h1" variant="h5">
    Sign Up
  </Typography>
      <br></br>
      <h6>Add your Address</h6>
  <form onSubmit={this.handleSignUp2}>
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="text">Address Line 1</InputLabel>
    <Input id="addresssLine1" name="addressLine1" autoFocus="true" value={this.state.addressLine1} onChange={evt => this.handleAddress1Change(evt)}/>
  </FormControl>
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="text">Address Line 2</InputLabel>
    <Input id="addressLine2" name="addressLine2"  value={this.state.addressLine2} onChange={evt => this.handleAddress2Change(evt)}/>
  </FormControl>
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="text">Address Line 3</InputLabel>
    <Input id="addressLine3" name="addressLine3"   value={this.state.addressLine3} onChange={evt => this.handleAddress3Change(evt)}/>
  </FormControl><br></br><br></br>
  <h6>List your charger with Eir EV with an Owner Account?</h6>
  <FormControlLabel
          control={
            <Tooltip title="List Your Chargers on Eir EV">
            <Checkbox
              checked={this.state.ownerChecked}
              onChange={evt => this.handleOwnerCheckBoxChange(evt)}
              value="checkedB"
              color="primary"
            />
            </Tooltip>
          }
          
          label="Owner Account"
        />
        
 
  <br></br>
  
  
  <Button
    onClick={this.handleSignUp2}
    type="submit"
    variant="contained"
    color="secondary"
    
  >
    Sign up
  </Button>
 
  <br></br><br></br>
</form></Paper>
<br></br><br></br><br></br>
      <h6>Already Have an Account?</h6>
      <NavLink to="/"><h5>Sign in here</h5></NavLink>
</div>

const step3 = <div><br></br><br></br><br></br><div><h3>Congrats!</h3><h5>You are now a member of Eir EV</h5><NavLink to="/"><h5>Sign in here</h5></NavLink></div></div>

var currentStep;
if(this.state.step === 1){
currentStep = step1;
}
if(this.state.step === 2){
    currentStep = step2;
}
if(this.state.step === 3){
    currentStep = step3;
}


    return (
      <main >
        <AppHeaderLogin/>
      <CssBaseline />
      <br></br>
      
      {currentStep}

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


export default connect(mapStateToProps, { fetchUserID })(SignUp);
