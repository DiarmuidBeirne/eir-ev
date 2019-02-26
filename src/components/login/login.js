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


export default class login extends Component {

  constructor(props) {
        
    super(props);
    
    this.state = { 
      usernameEntered: "",
      passwordEntered: ""
    };
    
}

handleUsernameChange = evt => {
  this.setState({ usernameEntered: evt.target.value });
  console.log(this.state);
};

  render() {
    return (
      <main >
      <CssBaseline />
      <Paper>
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">User ID</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus="true" value={this.state.usernameEntered} onChange={evt => this.handleUsernameChange(evt)}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
<NavLink to="/chargerListings">
          <Button
            onClick={this.handleUsernameChange}
            fullWidth
            variant="contained"
            color="secondary"
            
          >
            Sign in
          </Button>
          </NavLink>
        </form>
      </Paper>
    </main>
    )
  }
}
