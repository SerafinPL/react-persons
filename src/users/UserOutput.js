import React from 'react';



const UserOutput = (props) => {
	return(
		<div className="persons">
			<p>Imie użytkownika: {props.imie}</p>
			<p></p>
			
		</div>
	)
}

export default UserOutput;