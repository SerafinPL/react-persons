import React, {Component} from 'react';
import PersonCL from '../components/Persons/Person/Person-class';
import PersonsCL from '../components/Persons/Persons-class';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import withClass2 from '../hoc/withClass2';

import AuthContext from '../components/context/auth-context.js'

import classes from'./App.module.css';




class App extends Component {
  constructor(props){
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
      {id: 'sadf3dg', name: "Kuba", age: 31},
      {id: 'sdf4asa', name: "Anitka", age: 25},
      {id: 'saasda2', name: "Richard", age: 33}

    ],
    kolejnaZmienna: 'inna zmienna', // to nie znika
    pokazPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('App.js getDerivedStateFromProps props: ' , props);
    return state;
  }

  // componentWillMount(){
  //   console.log('App.js componentWillMount');
  // }

  componentDidMount() {
    console.log('App.js componentDidMount');
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate');
    return true;
    // return tak lub nie update component
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
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

    this.setState((prevState, props) => {
      
      return{
                persons: noweLudziki,
                changeCounter: prevState.changeCounter + 1 
              };
          }
    );
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

  loginHandler = () => {
      this.setState({authenticated : true});
  }

  render(){
    console.log('App.js render');
    let widok = null;
    
    if (this.state.pokazPersons) { // dynamiczne wyświetlanie treści
      
      widok = (     // lepsze wyjśćie
          <PersonsCL 
              persons={this.state.persons}
              clicked={this.usunPersonHandler}
              changed={this.zmianaImieniaHandler}
              isAuthenticated={this.state.authenticated}
          />
        );

    }

    return (
      
      
      
      <WithClass classes={classes.App}>
        <button className={classes.Guzik}
          onClick={() => {
                      if (this.state.showCockpit){
                        this.setState({showCockpit : false});
                      } else {
                        this.setState({showCockpit : true});
                      }
                    }}
        > 
          Pokaż/Ukryj Kokpit {this.props.appTitle}
        </button>
        <AuthContext.Provider value={ 
              {authenticated : this.state.authenticated, 
              login: this.loginHandler} 
        }>
           {this.state.showCockpit ?(
            <>
              <p>{this.state.changeCounter}</p>
              <Cockpit 
                    title={this.props.appTitle}
                    showPersons={this.state.pokazPersons} 
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonHandler}
                    login={this.loginHandler}
                  />
            </>) : null}
          {widok}
        </AuthContext.Provider>    
      </WithClass>  
      
      
      
    );
  }
}

export default App;
