import React from 'react';

import './userOutput.css';

const UserOutput = (props) => {

	const stylPragrafu = {
		fontSize: '20px',
		fontFamily: 'monospace'
	}
	return(
		<div >
			<p className='Output' style={stylPragrafu}>Imie użytkownika: {props.imie}</p>
			
			
		</div>
	)
}

export default UserOutput;