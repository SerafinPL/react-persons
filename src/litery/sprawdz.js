import React from 'react';




const Sprawdzenie = (props) => {

	

	let text = 'text zbyt krótki';

	if (props.dlugosc >= 5 ){
		text = 'text wystarczająco długi';
	}


	return (
		<p>{text}</p>
	)
	
} 

export default Sprawdzenie;