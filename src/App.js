import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          <li><Link to="/fixed-data-table">fixed-data-table</Link></li>
          <li><Link to="/react-table">react-table</Link></li>
          <li><Link to="/reactable">reactable </Link></li>
          <li><Link to="/react-data-grid">react-data-grid</Link></li>
          <li><Link to="/griddle">griddle</Link></li>
        </ul>


        <hr/>

        {this.props.children}

      </div>
    );
  }
}

export default App;
