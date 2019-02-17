import React, { Component } from 'react';
import AppHeader from './components/AppHeader'
import styled from "styled-components";
import { BrowserRouter, Route} from "react-router-dom";
import List from "./components/List";
import './App.css';

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

  constructor(props) {
        
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
        
    }
}

componentDidMount() {
    
    fetch('https://61rek4ywu6.execute-api.us-east-2.amazonaws.com/live/-charger')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: json.Items
        })
    });
    
    
}

  render() {
    return (
      <div className="App">
                <Container>
                    <Main>
                <AppHeader/>
                <List chargerList={this.state.items}/>
                    </Main>
                </Container>
            </div>
    );
  }
}

export default App;
