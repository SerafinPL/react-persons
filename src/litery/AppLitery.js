import React, {Component} from 'react';

import './AppLitery.css';

import Sprawdzenie from './sprawdz';


class AppLitery extends Component{


	state = {
		dlugosc: 0,
		zawartosc: ''
	}

	jakaDlugosc = (event) => {
		const napis = event.target.value;
		

		this.setState({
			dlugosc: napis.length,
			zawartosc: napis
		});
	
		
		
	}

	usunLiterke = (index) => {
		const litery = this.state.zawartosc.split('');
		litery.splice(index, 1);;
		const noweLitery = litery.join('');
		const dlugoscNapisu = noweLitery.length;

		this.setState({
			dlugosc: dlugoscNapisu,
			zawartosc : noweLitery
		})


	}

	render(){
	
	

	let literki = this.state.zawartosc.split('').map((value, index) => <span onClick={() => this.usunLiterke(index)} key={index}>{value}</span>);	
	

	
		return(
			<div className='literyDiv'>
				<p>Wpisz se tu coś...</p>
				<input type='text' onChange={this.jakaDlugosc} value={this.state.zawartosc}/>
				<p>Długość wpisanego textu: {this.state.dlugosc}</p>
				<Sprawdzenie dlugosc={this.state.dlugosc}/>
				<p>Kliknij se te tabliczki...</p>
				{literki}
				
			</div>
		)
	}
}

export default AppLitery;

//<Literki click={} napis={this.state.zawartosc}/>