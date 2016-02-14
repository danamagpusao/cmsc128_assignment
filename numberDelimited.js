function addDelimiter(){
	var num = document.getElementById("number").value.split("");
	var d = document.getElementById("del").value;
	var offset = +(document.getElementById("offset").value);
	if(d.length>1){
		alert("Delimiter's length should be at most 1");
	}

	var output = numberDelimited(num,d,offset);
	alert(output);

}

function numberDelimited(num, delimiter,offset){
	var chunks = [];
	for(var i = num.length;i>=0;){
		var s = "";
		for(var j = 0 ; j<offset;j++){
			i--;
			if(i>=0) {s  = num[i] +""+ s;}
		}
		chunks.push(s);
	}
	var output = "";
	for(var i = 0 ; i < chunks.length ; i++){
		if(i != chunks.length-1)
			{
				output =  delimiter+ "" +chunks[i] + output;
			}
		else{
			output =  "" +chunks[i] + output;
		}
	}
	return output;
}

