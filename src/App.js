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
    kolejnaZmienna: 'inna zmienna', // to nie znika
    pokazPersons: false
  }

  zmienImieHandler = (noweImie) => {
    this.setState({
      persons: [
        {name: "Jakub", age: 31},
        {name: "Anitka", age: 27},
        {name: noweImie, age: 37}

      ]
    })
  }

  zmianaImieniaHandler = (event) => {
    this.setState({
      persons: [
        {name: "Jakub", age: 31},
        {name: "Anitka", age: 27},
        {name: event.target.value, age: 37}

      ]
    })
  }

  togglePersonHandler = () => {
      const czyWidac = this.state.pokazPersons;
      this.setState ({
        pokazPersons: !czyWidac
      })
  }

  render(){

    const buttonStyle = {
      backgroundColor: 'white',
      font: 'monospace',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1> To jest reactowa prosta Aplikacja</h1>
        <p>ale działa na classach</p>
        <button style={buttonStyle} onClick={this.togglePersonHandler}>(Pokaż/Schowaj) klasowe Elementy</button>
        { 
          this.state.pokazPersons === true ? 
            <div>
                  <Person         // lepsze wyjśćie
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}
                    
                  />
                  <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    funkcja={() => this.zmienImieHandler("Miłoszek")} // gorsze wyjscie 
                    zmiana={this.zmianaImieniaHandler}>I lubię malować!</Person>
                  <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}
                    
                  />
            </div> 
          : null
        }
      </div>
    );
  }
}

export default App;
