import React, { useEffect } from 'react';

import classes from'./Cockpit.module.css';

const Cockpit = (props) => {

	useEffect(() => (
		console.log('Cockpit.js useEffect')
	));


	let klasyParagrafu = [];//['colorRed', 'bold'].join(' '); // wynik "colorRed bold" jako string

    if (props.persons.length <= 2){
      klasyParagrafu.push(classes.colorRed);
    }
    if (props.persons.length <=1) {
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
	        className={KlasyGuzika.join(' ')}
	        onClick={props.clicked}
	        >
	          (Pokaż/Schowaj) klasowe Elementy
	        </button>
	    </div>
		);
}

export default Cockpit;