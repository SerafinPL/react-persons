import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {

  state = {
    persons: [
      {name: "Kuba", age: 31},
      {name: "Anitka", age: 25},
      {name: "Richard", age: 33}

    ],
    kolejnaZmienna: 'inna zmienna' // to nie znika
  }

  zmienImieHandler = () => {
    this.setState({
      persons: [
        {name: "Jakub", age: 31},
        {name: "Anitka", age: 27},
        {name: "Richard", age: 37}

      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1> To jest reactowa prosta Aplikacja</h1>
        <p>ale działa na classach</p>
        <button onClick={this.zmienImieHandler}>Zmień imię</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>
          I lubię malować!
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
