import React, {Component} from 'react';

import classes from'./Person.module.css';






class Person extends Component {


	redner(){
	console.log('Person.js rendering...');
	
	
	return(
		
		<div className={classes.persons}>
			<p onClick={this.props.funkcja}>Jestem {this.props.name} i mam {this.props.age} lat!</p>
			<p>{this.props.children}</p>
			<input type="text" onChange={this.props.zmiana} value={this.props.name} />
		</div>
	);
	}
}

export default Person;