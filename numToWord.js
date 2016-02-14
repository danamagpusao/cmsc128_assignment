/**
	A function  that converts a number in numeric form
	to its word form.
**/
	
	/*********************************
	list of numbers in their word form
	*********************************/
	var ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	var tens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	var twoDig = ["twenty", "thirthy", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	var others = ["hundred", "thousand", "million"];

	/*********************************
	>function that converts number into its word form
	>Uses recursion
	*********************************/
	function numToWord(){
		var value = +(document.getElementById("input").value); // gets input from user
		var word = charToWord(value);
		alert(word);

	}
	function charToWord(val){
		var word = " ";
		if( val < 10){  word = ones[val-1];}

		else if( val < 100) { //for numbers less than 100
			if(val<20){ //for numbers less than 20
				 word = tens[val%10];
			 }
			else{ //for numbers 20-99
				word = twoDig[parseInt(val/10)-2] + " ";
				if(val%10>0){
					word = word + charToWord(val%10);
				}
			}
		}
		else if(val < 1000){ //for numbers less than 1000
		 word = ones[parseInt(val/100)-1] + " " +others[0] + " ";
		 if(val % 100 > 0){
		 	word = word + charToWord(val % 100);
		 	}
		}
		
		else if(val <1000000) {//for numbers less than 1000000

			word = charToWord(parseInt(val/1000)) + " " + others[1] + " ";
			if(val%1000 > 0 ){
				word = word + charToWord(val%1000) ;
			}
		}
		else { // for numbers more than or equal to 1000000
			word = charToWord(parseInt(val/1000000)) + " " + others[2] + " ";
			if(val%1000000 >0){
				word = word + " "+charToWord(val%1000000);
			}
		}
		
		return word;
		
	}

