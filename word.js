
var Letter = require("./letter");

function Word(wordToGuess){

	// An array of new Letter objects representing the letters of the underlying word	
	this.letterArray = [];
	for(i=0; i < wordToGuess.length; i++){
		var letter = new Letter(wordToGuess[i], false);
		this.letterArray.push(letter);
	}
	//A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) 
	//that displays the character or an underscore and concatenate those together.
	 this.wordToDisplay = function (){
	 	var result = "";
	 	for (i=0; i < this.letterArray.length; i++){
	 		result += this.letterArray[i].valueToDisplay();
	 	}
	 	return result;
	 }

	//A function that takes a character as an argument and calls the guess function
 	//on each letter object (the second function defined in Letter.js)
 	this.checkLetters = function(char){
 		for (i=0; i<this.letterArray.length; i++){
 			this.letterArray[i].checkLetter(char);
 		}
 	}
}
module.exports = Word;
