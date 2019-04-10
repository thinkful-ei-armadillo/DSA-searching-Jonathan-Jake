import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <input type='number'></input>
          <button type='submit'>Linear Search</button>
          <button type='submit'>Binary Search</button>
        </form>
      </div>
    );
  }
}

export default App;
