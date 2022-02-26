import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

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
