import React, {Component} from 'react';

import classes from'./Person.module.css';

import Aux from '../../../hoc/Aux';

import PropTypes from 'prop-types';



class Person extends Component {
	constructor(props){
		super(props);
		this.inputElementRef = React.createRef();
		// nowy sposób tworzenia Referencji
	}

	 componentDidMount() {
	 	// użycie starej referencji
	 	//this.inputElement.focus();

	 	//użycie nowej referencji
	 	this.inputElementRef.current.focus();
	 }

	render(){
	console.log('Person.js rendering...');
	
	
	return(
		<div className={classes.persons}>
		{/*<React.Fragment>*/}
		{/*<Aux> Pusty wraper */}
		
			<p onClick={this.props.funkcja}>
				Jestem {this.props.name} i mam {this.props.age} lat!
			</p>
			<p>{this.props.children}</p>
			<input
				// stary sposób tworzenia referencji
				//ref={ (RefInputEl) => {this.inputElement = RefInputEl} }
				ref={this.inputElementRef}
				type="text" 
				onChange={this.props.zmiana} 
				value={this.props.name} 
			/>
		
		{/*</Aux>*/}
		{/*</React.Fragment>*/}
		</div>

	);
	}
}

Person.propTypes = {
	funkcja: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	zmiana: PropTypes.func,
}


export default Person;