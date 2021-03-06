import React, { useEffect, useRef, useContext } from 'react';

import classes from'./Cockpit.module.css';

import AuthContext from '../context/auth-context';

const Cockpit = (props) => {

	const toggleBtnRef = useRef(null);

	const authContext = useContext(AuthContext);

	console.log('[Cockpit]', authContext.authenticated);
	

	useEffect(() => {
		console.log('Cockpit.js 1useEffect');
		// http request 
		setTimeout(() => {
			alert('Saved Data');
		}, 1000);
		return () =>{
			console.log('Cockpit.js clean from 1useEffect');
		}
	}, [props.persons]); // tablica zawiera zmienne po których wymuszany jest efekt

	useEffect(() => {
		console.log('Cockpit.js 2useEffect ');
		toggleBtnRef.current.click();
		// http request 
		// const timer = setTimeout(() => {
		// 	alert('First time');
		// }, 1000);
		
		return () =>{
			// clearTimeout(timer);
			console.log('Cockpit.js clean from 2useEffect');
		}
	}, []); // jeżeli tablica jest pusta to tylko przy pierwszym renderze return przy odmontowywaniu

	useEffect(() => {
		console.log('Cockpit.js 3useEffect ');
				
		return () =>{
			console.log('Cockpit.js clean from 3useEffect');
		}
	},); // brak tablicy effekt wykonywany zawsze wraz z czyszczeniem z return


	let klasyParagrafu = [];//['colorRed', 'bold'].join(' '); // wynik "colorRed bold" jako string

    if (props.personsLength <= 2){
      klasyParagrafu.push(classes.colorRed);
    }
    if (props.personsLength <=1) {
      klasyParagrafu.push(classes.bold);
    }
    klasyParagrafu = klasyParagrafu.join(' '); 
    

    let KlasyGuzika = [classes.Guzik];
    if (props.showPersons){
    	KlasyGuzika.push(classes.Red);

    }
    

	return(
		<div className={classes.Cockpit}>
			<h1> To jest reactowa Aplikacja "{props.title}"</h1>
	        <p className={klasyParagrafu} >
	        	ale działa na classach i Stylowana CSS Modules
	        </p>
	        <button 
	        ref={toggleBtnRef}
	        className={KlasyGuzika.join(' ')}
	        onClick={props.clicked}
	        >
	          (Pokaż/Schowaj) klasowe Elementy
	        </button>
	        {//<AuthContext.Consumer>
	        	//	        {(context) => <button onClick={context.login} className={classes.Guzik}>
	        	//	        		        	Log in
	        	//	        </button>}
	        	//	    </AuthContext.Consumer>
	        }
	        <button onClick={authContext.login} className={classes.Guzik}>
	        	        		        	Log in
	        		        </button>
	    </div>
		);
}

export default React.memo(Cockpit); // zabezpiecza przed zbędnym renderowaniem jeżeli 
									//się props nie zmienia