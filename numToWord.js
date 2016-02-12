<script>
	var num = document.getElementById("number");
	var word = "";
	var j =0;
	var i = 0;
	var ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	var tens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	var twoDig = ["twenty", "thirthy", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	var others = ["hundred", "thousand", "million"];

	function numToWord(){
		for(i=0; i<number.length ; i++){
			for(j = 0; j<3; j++){
				word = charToWord(parseInt(num.charAt(i))) + word;
				i++;
			}
		}
	}
	function charToWord(val){
		var word = "";
		if( val < 10)  word = ones[val-1];
		else if( val < 100) {
			if(i<20) word = tens[val-10] + " ";
			else word = twoDig[val/10-2] + " " + charToWord(val%10)+ " ";
		}
		else if(val < 1000){
		 word = ones[val/100-1] + " " +others[0] + " ";
		 if(val % 100 > 0){
		 	word = word + charToWord(val % 100);
		 	}
		}
		else if(val <1000000) {
			word = numToWord(val/1000) + " " + others[1] + " ";
			if(val%1000 > 0 ){
				word = word + charToWord(val % 1000);
			}
		}
		else {
			word = charToWord(val/1000000) + " " + others[2] + " ";
			if(val%1000000 >0){
				charToWord(val%1000000);
			}
		}
	}
</script>