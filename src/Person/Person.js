import React from 'react';


const Person = (props) => {
	return(
		<div>
			<p>Jestem {props.name} i mam {props.age} lat!</p>
			<p>{props.children}</p>
		</div>
	)
}

export default Person;