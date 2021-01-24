import React, {Component} from 'react';

import './AppLitery.css';

import Sprawdzenie from './sprawdz';
import Literki from './Literki';

class AppLitery extends Component{


	state = {
		dlugosc: 0,
		zawartosc: ''
	}

	jakaDlugosc = (event) => {
		const napis = event.target.value;
		const dlugoscNapisu = napis.length;

		this.setState({
			dlugosc: dlugoscNapisu,
			zawartosc: napis
		});
	}


	render(){
		return(
			<div className='literyDiv'>
				<input type='text' onChange={this.jakaDlugosc}/>
				<p>Długość wpisanego textu: {this.state.dlugosc}</p>
				<Sprawdzenie dlugosc={this.state.dlugosc}/>
				<Literki/>
				
			</div>
		)
	}
}

export default AppLitery;