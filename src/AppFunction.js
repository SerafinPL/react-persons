import React, { useState } from 'react';
import Person from './Person/Person';

import './App.css';

const AppFunction = props => {

  const [personsState, setPersonsState]  = useState({
    persons: [
      {name: "Kuba", age: 31},
      {name: "Anitka", age: 25},
      {name: "Richard", age: 33}

    ],
    //kolejnaZmienna: 'inna zmienna' // to znika wiec robimy drugie useState
  });

  const [inneState, setInneState] = useState('inna zmienna w innym stanie');

  const zmienImieHandler = (noweImie) => {
    setPersonsState({
      persons: [
        {name: "Jakub", age: 31},
        {name: "Anitka", age: 27},
        {name: noweImie, age: 37}

      ]
    })
  }

  
    return (
      <div className="App">
        <h1> To jest reactowa prosta Aplikacja</h1>
        <p>ale działa na Funcjach</p>
        <button onClick={zmienImieHandler.bind(this, "Marcinek")}>Zmień imię</button>
        <Person 
        	name={personsState.persons[0].name} 
        	age={personsState.persons[0].age}
        />
        <Person 
        	name={personsState.persons[1].name} 
        	age={personsState.persons[1].age}>
        	I lubię malować!
        </Person>
        <Person 
        	name={personsState.persons[2].name} 
        	age={personsState.persons[2].age}
        />
      </div>
    );
  
}

export default AppFunction;
