var ones = {};
ones['one'] = 1;
ones['two'] = 2;
ones['three'] = 3;
ones['four'] = 4;
ones['five'] = 5;
ones['six'] = 6;
ones['seven'] = 7;
ones['eight'] = 8;
ones['nine']=9;

var tens = {};
tens['ten']=10;
tens['eleven']=11;
tens['twelve']=12;
tens['thirteen'] = 13;
tens['fourteen'] = 14;
tens['fifteen'] = 15;
tens['sixteen'] = 16;
tens['seventeen'] = 17;
tens['eighteen'] = 18;
tens['nineteen'] = 19;

var twoDig={};
twoDig['twenty'] = 20;
twoDig['thirthy'] = 30;
twoDig['fourty'] = 40;
twoDig['fifty'] = 50;
twoDig['sixty'] = 60;
twoDig['seventy'] = 70;
twoDig['eighty'] = 80;
twoDig['ninety'] = 90;

var others = {};
others['hundred'] = 100;
others['thousand'] = 1000;
others['million'] = 1000000;

function wordToNum(){
	var w = document.getElementById("words");
	var ws = w.split(" ");

	for(var i=0;i<ws.length;i++){
		alert(ws[i]);
	}

}