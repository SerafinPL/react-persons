import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';



class App extends Component {

  state = {
    persons: [
      {id: 'sadf3dg', name: "Kuba", age: 31},
      {id: 'sdf4asa', name: "Anitka", age: 25},
      {id: 'saasda2', name: "Richard", age: 33}

    ],
    kolejnaZmienna: 'inna zmienna', // to nie znika
    pokazPersons: false
  }

  

  zmianaImieniaHandler = (event, id) => {
    
    const ludzikIndex = this.state.persons.findIndex(value => {
      return value.id === id;
    });

    /*const ludzik = this.state.persons[ludzikIndex]; TO JEST REFERENCJA NIE NOWY OBIEKT*/
    //Nowy obiekt robimy tak

    const ludzik = {
      ...this.state.persons[ludzikIndex]
    };
    // alternatywa ludzik = Object.assign({},this.state.persons[ludzikIndex] );


    ludzik.name = event.target.value;

    const noweLudziki = [...this.state.persons];
    noweLudziki[ludzikIndex] = ludzik;

    this.setState({
      persons: noweLudziki })
  }

  usunPersonHandler = (personIndex) => {
    /*const ludziki = this.state.persons.slice(); */
    // robimy realną kopie tablicy z pomocą slice bez argumentów
    // lepiej jednak użyć operatora '...' powielania !
    const ludziki = [...this.state.persons];
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
      backgroundColor: 'green',
      color: 'white',
      font: 'monospace',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer',
      
    }

    let widok = null;


    if (this.state.pokazPersons) { // dynamiczne wyświetlanie treści
      widok = (     // lepsze wyjśćie
        <div>
          {this.state.persons.map( (value, index) => {
            return( <Person 
                      funkcja={() => this.usunPersonHandler(index)}
                      name={value.name} 
                      age={value.age}
                      key={value.id} 
                      zmiana={(event) => this.zmianaImieniaHandler(event, value.id)}
                    />

            )
          } ) }
          
        </div> 
      );
      buttonStyle.backgroundColor = 'red'; // dynamicznie style
      
    }

    let klasyParagrafu = [];//['colorRed', 'bold'].join(' '); // wynik "colorRed bold" jako string

    if (this.state.persons.length <= 2){
      klasyParagrafu.push('colorRed');
    }
    if (this.state.persons.length <=1) {
      klasyParagrafu.push('bold');
    }
    /*klasyParagrafu = klasyParagrafu.join(' '); <-tak działa na stricMode*/ 
    klasyParagrafu.join(' ');
    
    return (
      
      <div className="App">
        <h1> To jest reactowa Aplikacja</h1>
        <p className={klasyParagrafu} >ale działa na classach i Stylowana pakietem Styled-Components</p>
        <button 
          style={buttonStyle} 
          onClick={this.togglePersonHandler}>(Pokaż/Schowaj) klasowe Elementy</button>
        
        {widok}    
          
        
      </div>
      
    );
  }
}

export default App;
