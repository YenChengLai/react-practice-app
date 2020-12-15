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

  switchNameHandler = (newName) => {
    // This won't work, React would not recognize direct mutation of the state.
    // this.state.persons[0].name = 'Franky';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'John', age: 30 }
      ],
      showPersons: false
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'John', age: 30 }
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Kobe')}
            change={this.nameChangedHandler}>I'm a software Engineer.</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}>I'm a data Engineer.</Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a React App.</h1>
        <button
          onClick={this.togglePersonsHandler}
          style={style}>Toggle persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
  }
}

export default App;

