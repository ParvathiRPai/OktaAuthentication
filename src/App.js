import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Donate from './components/pages/home';
import Organization from './components/pages/staff';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
      <Route path="/" exact={true} component={Donate}/>
      <Route path="/staff" exact={true} component={Organization}/>
    </div>
    </div>
    </Router>
  );
}

export default App;
