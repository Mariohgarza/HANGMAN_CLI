


function Letter(value, isGuessed){
	//A string value to store the underlying character for the letter
	this.value = value;
	// A boolean value that stores whether that letter has been guessed yet
	this.isGuessed = isGuessed;


//A function that returns the underlying character if the letter has been guessed, 
//or a placeholder (like an underscore) if the letter has not been guessed
	this.valueToDisplay = function(){
		if(this.isGuessed){
			return this.value + " ";
		}
		else{
			if(this.value == " "){
				return " ";
			}
			return "_ ";
		}
	}

//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
	this.checkLetter = function(char){
	
		if(char == this.value){
			this.isGuessed = true;
		}
	}

}



module.exports = Letter;