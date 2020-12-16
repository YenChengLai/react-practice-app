import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Frank', age: 28 },
      { id: '2', name: 'John', age: 30 }
    ]
  };

  /*switchNameHandler = (newName) => {
    // This won't work, React would not recognize direct mutation of the state.
    // this.state.persons[0].name = 'Franky';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'John', age: 30 }
      ],
      showPersons: false
    })
  };*/

  nameChangedHandler = (event, id) => {
    // find the correct object
    const personIndex = this.state.persons.findIndex(element => element.id === id);
    // destruction with spread operator => deep copy of the object
    const person = { ...this.state.persons[personIndex] };

    // get user input value as name
    person.name = event.target.value;
    // deep copy with the persons value in state object
    const persons = [...this.state.persons];
    // replace the specific object to update
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonsHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
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
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonsHandler(index)}
              key={person.id}
              change={(event) => this.nameChangedHandler(event, person.id)}></Person>;
          })}
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

