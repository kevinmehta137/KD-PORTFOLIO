import React, { Component } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route} from 'react-router-dom'
//import { connect } from 'react-redux';
import NAV from './components/navbar/navbar';
import Home from './home/home';
import Portfolio from './Portfolio/portfolio';
import Intro from './intro/intro';

class App extends React.Component {
  render(){
      return(
      <Router>
        <div>
            <NAV />
            <Route exact path='/' render={()=> <Home />}> </Route>  
            <Route exact path='/portfolio' render={() => <Portfolio />}></Route>
      <Route exact path='/intro' render={() => <Intro />}></Route>
        </div>
      </Router>
    );
}  
}


export default App;
