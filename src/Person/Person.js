import React from 'react';

import './Person.css';

const Person = (props) => {
	return(
		<div className="persons">
			<p onClick={props.funkcja}>Jestem {props.name} i mam {props.age} lat!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.zmiana} value={props.name}/>
		</div>
	)
}

export default Person;