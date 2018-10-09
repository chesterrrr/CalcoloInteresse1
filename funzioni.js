/* funzioni per CRT */
function calcola(){
	/* i valori del form */
	var C =document.forms.crt.C.value;
	var R =document.forms.crt.R.value;
	var T =document.forms.crt.T.value;
	var I;
	
	if(U = 0){
	document.getElementById('risultato').innerHTML="Errore!";
	}
	else if(U = 1){
		var d = 36500;
	}
	else if(U = 2){
		var d = 100;
	}
	I = (C*r*t)/d;
	
	document.getElementById('risultato').innerHTML="Interesse: " +I+ " €;
	
}
function annulla(){
	document.getElementById('risultato').innerHTML=" ";
	}
