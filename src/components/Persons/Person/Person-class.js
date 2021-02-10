import React, {Component} from 'react';

import classes from'./Person.module.css';

import Aux from '../../../hoc/Aux';






class Person extends Component {


	render(){
	console.log('Person.js rendering...');
	
	
	return(
		<React.Fragment>
		{/*<Aux> Pusty wraper */}
		{/*<div className={classes.persons}>*/}
			<p onClick={this.props.funkcja}>Jestem {this.props.name} i mam {this.props.age} lat!</p>
			<p>{this.props.children}</p>
			<input type="text" onChange={this.props.zmiana} value={this.props.name} />
		{/*</div>
		</Aux>*/}
		</React.Fragment>

	);
	}
}

export default Person;