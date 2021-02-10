import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component 	{

  static getDerivedStateFromProps(props, state){
    console.log('PERSONS.js getDerivedStateFromProps props: ' , props);
    return state;
  } 

  // componentWillReceiveProps(props){
  //   console.log('Persons.js componetWillReceiveProps', props);
  // } WYCOFANY

  //  componentWillUpdate{

  // } WYCOFANY

  shouldComponentUpdate(nextProps, nextState) {
    console.log('PERSONS.js shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons){
      return true;
    } else {
      return false;
    }
    // return tak lub nie update component
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('PERSONS.js getSnapshotBeforeUpdate');
    return {message : 'SnapshotMessage'};// snapshot używany w componentDidUpdate
  }

  //render

  componentDidUpdate(prevProps, prevState, Snapshot){
    console.log('PERSONS.js componentDidUpdate');
    console.log(Snapshot); // uzycie snapshot z getSnapshotBeforeUpdate
  }

  componentWillUnmount(){
    console.log('PERSONS.js componentWillUnmount');
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