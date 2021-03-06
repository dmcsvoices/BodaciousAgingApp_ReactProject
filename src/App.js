import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bulma/css/bulma.min.css'
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

class App extends React.Component {
  constructor(props) {
    super(props);
    //initialize state here with 
    //this.state = {something}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
      </div>
    );
  }
}

export default App;
