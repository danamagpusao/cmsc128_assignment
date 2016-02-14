
function wordToCur(){
	var currency = document.getElementById("cur").value;
	if(currency == ""){
		alert("No Currency type input (PHP,JPY,USD)");
		return;
	}
	var amt = wordToNum();
	var o = currency +""+ amt;
	alert(o);

}