import React, { useState } from 'react';
import Person from '../components/Persons/Person/Person';

import './App.css';



const AppFunction = props => {

  const [personsState, setPersonsState]  = useState({
    persons: [
      {name: "Kuba", age: 31},
      {name: "Anitka", age: 25},
      {name: "Richard", age: 33}

    ]
    //kolejnaZmienna: 'inna zmienna' // to znika wiec robimy drugie useState
  });

  const [inneState, setInneState] = useState('inna zmienna w innym stanie');

  const zmienImieHandler = (noweImie) => {
    //this.setState({ dla klasowych
    setPersonsState({
      persons: [
        {name: "Jakub", age: 31},
        {name: "Anitka", age: 27},
        {name: noweImie, age: 37}

      ]
    })
  }

  const zmianaImieniaHandler = (event) => {
  	//this.setState({ dla klasowych
    setPersonsState({
      persons: [
        {name: "Jakub", age: 31},
        {name: "Anitka", age: 27},
        {name: event.target.value, age: 37}

      ]
    })
  }

  const [widokState, setWidokState] = useState(false);

  const togglePersonHandler = () => {
      /*const czyWidac = this.state.pokazPersons;
      this.setState ({
        pokazPersons: !czyWidac
      })*/ // wersja dla Klasowych elementów

      const czyWidac = widokState;
      setWidokState( !czyWidac);
  }

  
    return (
    	
      <div className="App">
        <h1> To jest reactowa Aplikacja</h1>
        <p>ale działa na Funkcjach</p>
        <button onClick={togglePersonHandler} className="Guzik">Wyświetl schowaj Funkcyjne Komponenty</button>
	    {  	widokState === true ? // podobno gorsze rozwiązanie
	    	/*this.state.pokazPersons === true ?   */ // wersja dla Klasowych elementów
	        <div>
		        <button onClick={zmienImieHandler.bind(this, "Marcinek")} className="Guzik">Zmień imię</button>

		        <Person 		/* Lepsze dowązanie*/
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
		        	funkcja={() => zmienImieHandler("Miłoszek")} // gorsze wyjscie
		        	zmiana={zmianaImieniaHandler} 
		        />
		    </div>
		    : null // jak false
		}
      </div> 
      
    );
  
}

export default AppFunction;
