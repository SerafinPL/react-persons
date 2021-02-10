import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component 	{

  static getDerivedStateFromProps(props, state){
    console.log('Persons.js getDerivedStateFromProps props: ' , props);
    return state;
  } 

  // componentWillReceiveProps(props){
  //   console.log('Persons.js componetWillReceiveProps', props);
  // } WYCOFANY

  //  componentWillUpdate{

  // } WYCOFANY

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js shouldComponentUpdate');
    return true;
    // return tak lub nie update component
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Persons.js getSnapshotBeforeUpdate');
    return {message : 'SnapshotMessage'};// snapshot używany w componentDidUpdate
  }

  //render

  componentDidUpdate(prevProps, prevState, Snapshot){
    console.log('Persons.js componentDidUpdate');
    console.log(Snapshot); // uzycie snapshot z getSnapshotBeforeUpdate
  }

  componentWillUnmount(){
    console.log('Persons.js componentWillUnmount');
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