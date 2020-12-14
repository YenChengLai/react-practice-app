import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Frank', age: 28 },
      { name: 'John', age: 30 }
    ]
  };

  switchNameHandler = () => {
    // This won't work, React would not recognize direct mutation of the state.
    // this.state.persons[0].name = 'Franky';
    this.setState({
      persons: [
        { name: 'Franky', age: 28 },
        { name: 'John', age: 30 }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>This is a React App.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I'm a software Engineer.</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm a data Engineer.</Person>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
  }
}

export default App;

