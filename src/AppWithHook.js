import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  /**
   * useState returns an array with two object:
   * 1. the state you keep. (What you put into useState function)
   * 2. the function to set the state you keep.
   */
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Frank', age: 28 },
      { name: 'John', age: 30 }
    ]
  });

  // we can use useState function many times to keep different states.
  const [otherState, setOtherState] = useState('other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // This won't work, React would not recognize direct mutation of the state.
    // this.state.persons[0].name = 'Franky';
    setPersonsState({
      persons: [
        { name: 'Franky', age: 28 },
        { name: 'John', age: 30 }
      ]
    })
  };

  return (
    <div className="App">
      <h1>This is a React App.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} click={switchNameHandler}>I'm a software Engineer.</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I'm a data Engineer.</Person>
    </div>
  );
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
}

export default app;

