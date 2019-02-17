import React, { Component } from 'react';
import AppHeader from './components/AppHeader'
import styled from "styled-components";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import List from "./components/List";
import './App.css';

import login from "./components/login/login";
import ChargerPage from './components/chargerPage/ChargerPage';

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
      <BrowserRouter>
      <div className="App">
      <Container>
                    <Main>
                <AppHeader/>
                
     <Switch>
       <Route path="/" component={login} exact />
       <Route path="/chargerListings" component={List} />
      <Route path="/chargerPage/:chargerId" component={ChargerPage} name="chargerPage"/>

     </Switch>
                
                 </Main>
                </Container>
            </div>
            </BrowserRouter>
    );
  }
}
//Need to create a seperate router.js
export default App;