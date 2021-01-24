import React from 'react';

import './Literki.css'



const Literki = (props) => {

	let napis = [];

	for (var i=0; i < props.napis.length; i++){
		napis[i] = props.napis[i];	
	}
	
	let znaki = napis.map((value, index) => <span onClick={props.click} key={index}>{value}</span>)


	
	
	return(
		<div className="literki">
			{znaki}
		</div>
	)
}

export default Literki;