import React from 'react';
import Person from './Person/Person';


const Persons = (props) => 	props.persons.map( (value, index) => {
            return( <Person 
                      funkcja={() => props.clicked(index)}
                      name={value.name} 
                      age={value.age}
                      key={value.id} 
                      zmiana={(event) => props.changed(event, value.id)}
                    />

            )
          } );

export default Persons;