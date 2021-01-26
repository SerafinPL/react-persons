import React from 'react';

import './Person.css';

import styled from 'styled-components';


const StyledDiv = styled.div`

		width: 70%;
		margin:15px auto;
		border: 1px solid #eee;
		box-shadow: 0 2px 4px #ddd;
		padding: 15px;
		text-align: center;
		

		p {
			display: inline;
			margin: 20px;
		}
		@media (min-width: 500px){
			width: 450px;
		}

		`

const PersonStyled = (props) => {


	

	return(
		
		<StyledDiv>
			<p onClick={props.funkcja}>Jestem {props.name} i mam {props.age} lat!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.zmiana} value={props.name} />
		</StyledDiv>
	)
}

export default PersonStyled;