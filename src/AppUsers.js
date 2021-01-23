import React, {Component} from 'react';

import UserInput from './users/UserInput'
import UserOutput from './users/UserOutput'

class AppUsers extends Component {
	
	state = {
		imie: 'Kuba Koder'
	}


	render(){
		return(
			<div>
				<UserInput/>
				<UserOutput imie={this.state.imie}/>
			</div>
		)
	}
}

export default AppUsers;