import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    userInputs: [
      {name: "Eduardo"},
      {name: "Ricardo"}
    ],
    showOutput: false
  }

  render () {
        
    return (
      <div className="App">
        <h1>Blank Page</h1>
      </div>
  );  
  }
  
}

export default App;
