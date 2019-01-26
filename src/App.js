import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Containers from './components/container/container';
import Portfolio from './components/Portfolio/portfolio';
class App extends Component {
  render() {
    return (
      <div>
        <div>
            <Navbar />
            <Containers></Containers>
            <Portfolio></Portfolio>
        </div>
      </div>
    );
  }
}

export default App;
