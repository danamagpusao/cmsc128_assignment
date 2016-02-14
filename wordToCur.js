/**
	A function that accepts 2 inputs.
	uses the function word to num to
	convert the amt to numeric form.
**/
function wordToCur(){
	var validCurrency = ["USD","PHP","JPY"]
	var currency = document.getElementById("cur").value;
	if(currency == ""){
		alert("No Currency type input (PHP,JPY,USD)");
		return;
	}
	else if(validCurrency.indexOf(currency.toUpperCase()) <0 ){ //checks if the currency is in the list
		alert("Invalid Currency");
		return;
	}
	var amt = wordToNum();
	var o = currency.toUpperCase() +""+ amt; //output
	alert(o);

}