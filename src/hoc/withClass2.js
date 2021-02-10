import React from 'react';
				// Nazwa komponentu. // potrzebne zasoby
const withClass2 = (WrappedComponent, classNameArg) => {

		return props => {
			<div className={classNameArg}>
				<WrappedComponent />
			</div>
		};
};



export default withClass2; // MAła litera bo to nie komponent