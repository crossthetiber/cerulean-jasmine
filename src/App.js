import React, { Component } from 'react';
import './App.css';
import Catalog from './components/Catalog';
import Person from './components/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>The Catalog App</h1>
        </header>
        <Person />
      </div>
    );
  }
}

export default App;
