import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component 	{

  static getDerivedStateFromProps(props, state){
    console.log('Persons.js getDerivedStateFromProps props: ' , props);
    return state;
  } 

    render(){
			console.log('PERSONS.js rendering....');
			return(
				this.props.persons.map( (value, index) => {
            		return( <Person 
                      funkcja={() => this.props.clicked(index)}
                      name={value.name} 
                      age={value.age}
                      key={value.id} 
                      zmiana={(event) => this.props.changed(event, value.id)}
                    />

            )
          } )
		)
  }  		
}

export default Persons;