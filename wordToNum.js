var first = {};
first['one'] = 1;
first['two'] = 2;
first['three'] = 3;
first['four'] = 4;
first['five'] = 5;
first['six'] = 6;
first['seven'] = 7;
first['eight'] = 8;
first['nine']=9;

var second = {};
second['ten']=10;
second['eleven']=11;
second['twelve']=12;
second['thirteen'] = 13;
second['fourteen'] = 14;
second['fifteen'] = 15;
second['sixteen'] = 16;
second['seventeen'] = 17;
second['eighteen'] = 18; 
second['nineteen'] = 19;

var third={};
third['twenty'] = 20;
third['thirthy'] = 30;
third['fourty'] = 40;
third['fifty'] = 50;
third['sixty'] = 60;
third['seventy'] = 70;
third['eighty'] = 80;
third['ninety'] = 90;

var fourth = {};
fourth['hundred'] = 100;
fourth['thousand'] = 1000;
fourth['million'] = 1000000;

function wordToNum(){
	var w = document.getElementById("words").value;
	var ws = w.split(" ");
	var number = 0;
	for(var i =0; i< ws.length; i++){
		if(first[ws[i]] != null){
			number = number + first[ws[i]];
		}
		else if(second[ws[i]] != null){
			number = number + second[ws[i]];
			i++;
		}
		else if(third[ws[i]]!= null){
			number = number + third[ws[i]];
		}
		else if(fourth[ws[i]]){
			number = number * fourth[ws[i]];
		}
	}

	alert(number);

}
