import React, {PureComponent} from 'react';
import PersonCL from './Person/Person-class';


class Persons extends PureComponent 	{

  static getDerivedStateFromProps(props, state){
    console.log('PERSONS.js getDerivedStateFromProps props: ' , props);
    return state;
  } 

  // componentWillReceiveProps(props){ 
  //   console.log('Persons.js componetWillReceiveProps', props);
  //    WYCOFANY
  // } 

  //  componentWillUpdate{
    //WYCOFANY
  // } 


  // Zamiast porównywać wszystkie props można użyć PureComponent który ma tą funkcję na standardzie
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('PERSONS.js shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons || 
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked
  //     ){
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return tak lub nie update component
  // }



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
            		return( <PersonCL 
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