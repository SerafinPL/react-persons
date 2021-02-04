import React, {Component} from 'react';

import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './AppUsers.css';

class AppUsers extends Component {
	
	state = {
		imie: 'Kuba Koder'
	}

	zmianaUser = (event) =>{
		this.setState({
		imie: event.target.value
		})
	}


	render(){
		return(
			<div className='AppUsers'>
				<UserInput name={this.state.imie} zmiana={this.zmianaUser}/>
				<UserOutput imie={this.state.imie}/>
			</div>
		)
	}
}

export default AppUsers;