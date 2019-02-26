import React, { Component } from 'react';
import AppHeader from './components/AppHeader'
import styled from "styled-components";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import List from "./components/chargerList/List";
import Map from "./components/chargerList/Map";
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';

import login from "./components/login/login";
import ChargerPage from './components/chargerPage/ChargerPage';
import Profile from './components/userProfile/History';
import BookingPage from './components/userProfile/userBookingPage';

import { Provider } from 'react-redux';
import store from './store';



// const store = createStore(() => [], {}, applyMiddleware());


const Container = styled.main`
  min-height: 100vh;
  background-color: white;
`;

const Main = styled.section`
  min-height: 100vh;
  
  margin: 0 auto;
  background-color: white;
`;

class App extends Component {


  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      <Container>
                    <Main>
                <AppHeader/>
                
     <Switch>
       <Route path="/" component={login} exact />
       <Route path="/chargerListings" component={List} />
       <Route path="/chargerMap" component={Map} />
       <Route path="/profile" component={Profile} />
      <Route path="/chargerPage/:chargerId" component={ChargerPage} name="chargerPage"/>
      <Route path="/booking/:bookingId" component={BookingPage} name="booking"/>

     </Switch>
                
                 </Main>
                </Container>
            </div>
            </BrowserRouter>
            </Provider>
    );
  }
}
//Need to create a seperate router.js
export default App;
