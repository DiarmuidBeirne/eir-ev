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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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


class login extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
      usernameEntered: "",
      passwordEntered: "",
      auth: false,
      open: false
    };
    
}

handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  this.setState({ open: false });
}; 

handleUsernameChange = evt => {
  this.setState({ usernameEntered: evt.target.value });
  
  
};

handlePasswordChange = evt => {
  this.setState({ passwordEntered: evt.target.value });
  
};

handleLogin = evt => {
  
  //this.setState({ usernameEntered: evt.target.value });
  evt.preventDefault();
  const loginDetails = {
    email: this.state.usernameEntered
  }

  
  this.props.fetchUserID(loginDetails);
  this.props.fetchUserID(loginDetails);
  var that = this;
  setTimeout(function (){
    try{
    if(that.state.passwordEntered === that.props.User.password){
      that.props.history.push('/chargerListings');
      }else{
        that.setState({ open: true });
      }
    }catch(err){
      console.log(err);
    that.setState({open : true });}
  }, 900)
  
  
};

  render() {
    return (
      <main >
        <AppHeaderLogin/>
      <CssBaseline />
      <br></br>
      <Paper elevation={8}>
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={this.handleLogin}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">User ID</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus="true" value={this.state.usernameEntered} onChange={evt => this.handleUsernameChange(evt)}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.passwordEntered} onChange={evt => this.handlePasswordChange(evt)}/>
          </FormControl>
          <br></br><br></br>
          
          
          <Button
            onClick={this.handleLogin}
            type="submit"
            variant="contained"
            color="secondary"
            
          >
            Sign in
          </Button>
         
          <br></br><br></br>
        </form>
      </Paper>
      <br></br><br></br><br></br>
      <Paper elevation={8}>
      <br></br>
      <h4>New to Eir EV?</h4>
      <br></br>
      <NavLink to="/">
          
          <Button variant="contained" color="primary">
       Sign up now!
      </Button>
          
          </NavLink>
          <br></br><br></br>
      </Paper>

      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={3000}
          
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Incorrect Login Details</span>}
          action={[
            
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              
              onClick={this.handleClose}
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


export default connect(mapStateToProps, { fetchUserID })(login);
