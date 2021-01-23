import React from 'react';

import './userInput.css';

const UserInput = (props) => {
	return(
		<div className='userInput'>
			<h3>Użytkownika imię</h3>
			<input type="text" onChange={props.zmiana} value={props.name}/>
		</div>
	)
}

export default UserInput;

