import React from 'react';

import './Person.css';

import Radium from 'radium'; 






const Person = (props) => {


	// Media-queries za pomocą RADIUM
	// Trzeba dodać StyleRoot opakowywując całą aplikacje
	const stylePersonRadium = {
		'@media (min-width: 500px)':{
			width: '450px'
		}
	};

	return(
		<div className="persons" style={stylePersonRadium}>
		
			<p onClick={props.funkcja}>Jestem {props.name} i mam {props.age} lat!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.zmiana} value={props.name}/>
		</div>
	)
}

export default Radium(Person);