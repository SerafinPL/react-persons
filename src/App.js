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

  

  /*zmianaImieniaHandler = (event) => {
    this.setState({
      persons: [
        {name: "Jakub", age: 31},
        {name: "Anitka", age: 27},
        {name: event.target.value, age: 37}

      ]
    })
  }*/

  usunPersonHandler = (personIndex) => {
    const ludziki = this.state.persons;
    ludziki.splice(personIndex, 1);
    this.setState({
      persons :ludziki
    });
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

    let widok = null;


    if (this.state.pokazPersons) {
      widok = (     // lepsze wyjśćie
        <div>
          {this.state.persons.map( (ludzik, index) => {
            return( <Person 
                      funkcja={() => this.usunPersonHandler(index)}
                      name={ludzik.name} 
                      age={ludzik.age} 
                    />

            )
          } ) }
          
        </div> 
      );
    }

    return (
      <div className="App">
        <h1> To jest reactowa prosta Aplikacja</h1>
        <p>ale działa na classach</p>
        <button 
          style={buttonStyle} 
          onClick={this.togglePersonHandler}>(Pokaż/Schowaj) klasowe Elementy</button>
        
        {widok}    
          
        
      </div>
    );
  }
}

export default App;
