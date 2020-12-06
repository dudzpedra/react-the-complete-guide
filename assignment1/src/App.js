import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './App.css';

class App extends Component {
  state = {
    userInputs: [
      {name: "Eduardo"},
      {name: "Ricardo"}
    ]
  }
  buttonHandler = () => {
    this.setState ({
      userInputs: [
        {name: 'Eduardo'},
        {name: 'Ricardo'}
      ]
    })
  }

  inputHandler = (event) => {
    this.setState ({
      userInputs: [
        {name: event.target.value},
        {name: event.target.value}
      ]
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '6px'
    };

    return (
      <div className="App">
        <h1> React - The Complete Guide </h1>
        <h2> Task #1 Solution! </h2>
        <UserInput 
          name={this.state.userInputs[0].name} 
          changed={this.inputHandler}/>
        <button onClick={this.buttonHandler} style={style}>Reset Button</button>
        <UserOutput 
          name={this.state.userInputs[0].name} 
          changed={this.inputHandler}/>

      </div>
  );  
  }
  
}

export default App;
