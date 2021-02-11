import React, {Component} from 'react';

import classes from'./Person.module.css';

import Aux from '../../../hoc/Aux';






class Person extends Component {


	render(){
	console.log('Person.js rendering...');
	
	
	return(
		<div className={classes.persons}>
		{/*<React.Fragment>*/}
		{/*<Aux> Pusty wraper */}
		
			<p onClick={this.props.funkcja}>Jestem {this.props.name} i mam {this.props.age} lat!</p>
			<p>{this.props.children}</p>
			<input type="text" onChange={this.props.zmiana} value={this.props.name} />
		
		{/*</Aux>*/}
		{/*</React.Fragment>*/}
		</div>

	);
	}
}

export default Person;