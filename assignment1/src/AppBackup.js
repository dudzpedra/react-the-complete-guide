import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import ValidationComponent from './Components/ValidationComponent';
import './App.css';

class App extends Component {
  state = {
    userInputs: [
      {name: "Eduardo"},
      {name: "Ricardo"}
    ],
    showOutput: false
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
  toggleOutputHandler = () => {
    const doesShow = this.state.showOutput;
    this.setState({showOutput: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      border: '1px solid orange',
      padding: '6px'
    };

    let userOutput = null;

    if (this.state.showOutput) {
      userOutput = (
        <div>
          <UserOutput 
            name={this.state.userInputs[1].name} 
            changed={this.inputHandler}/>
        </div>
      )
    }

    return (
      <div className="App">
        <h1> React - The Complete Guide </h1>
        <h2> Task #1 Solution! </h2>
        <UserInput 
          name={this.state.userInputs[1].name} 
          changed={this.inputHandler}/>
        <button onClick={this.toggleOutputHandler}>Toggle Button</button>
        {userOutput}
        <button onClick={this.buttonHandler} style={style}>Reset Button</button>
        
      </div>
  );  
  }
  
}

export default App;
