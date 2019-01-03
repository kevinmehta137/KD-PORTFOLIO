import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Containers from './components/container/container';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Containers></Containers>
      </div>
   
    );
  }
}

export default App;
