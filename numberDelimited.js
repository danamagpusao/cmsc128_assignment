function addDelimiter(){
	var num = document.getElementById("input").value;
	var d = document.getElementById("cur").value;
	var offset = +(document.getElementById("offset").value);
	if(d.length>1){
		alert("Delimiter's length should be at most 1");
	}

	var output = numberDelimited(num,d,offset);
	alert(output);

}

function numberDelimited(num, delimiter,offset){
	for(var i=num.length-1;i>=0;i-=offset){
			this.splice(i, 0, delimiter);
	}

}

