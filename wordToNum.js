/***
A function that converts a words to its numeric form
****/

//hash map containing values of each word

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
third['thirty'] = 30;
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

function convertNum(){
	var output = wordToNum();
	alert(output);
}
//functions that converts the words to its numeric form
function wordToNum(){
	var nums = [];
	var w = document.getElementById("input").value; // gets the input from user
	var ws = w.split(" "); //splits the input delimited by blank space
	var number = 0; //initializes the number
	for(var i =0; i<ws.length; i++){
		if(first[ws[i]] != null){
				number = number + first[ws[i]];	
				if(first[ws[i+1]] != null){
					alert("invalid number!"); // checks if the input is valid
					return;
				}
		}
		else if(second[ws[i]] != null){
			number = number + second[ws[i]];
				if(second[ws[i+1]] != null){
					alert("invalid number!"); // checks if the input is valid
					return;
				}
			i++;
		}
		else if(third[ws[i]]!= null){
			number = number + third[ws[i]];
				if(third[ws[i+1]] != null){
					alert("invalid number!"); // checks if the input is valid
					return;
				}
		}
		else if(ws[i] == "hundred"){
				number = number * 100;
				if(ws[i+1] == "hundred" ){
					alert("invalid number!"); // checks if the input is valid
					return;
				}
		}
		else if(ws[i] == "thousand"){
				number = number * 1000;
				nums.push(number);
				number = 0;
				if(ws[i+1] == "hundred" || ws[i+1] == "thousand" || ws[i+1] == "million" ){ // checks if the input is valid
					alert("invalid number!");
					return;
				}
			
		}
		else if(ws[i] == "million"){
				number = number * 1000000;
				nums.push(number);
				number = 0;
				if(ws[i+1] == "hundred" || ws[i+1] == "thousand" || ws[i+1] == "million" ){ // checks if the input is valid
					alert("invalid number!");
					return;
				}
		}
		
	}
	for(var j = 0 ; j<nums.length;j++){
		number = number + nums[j];
	}
	return number;


}