var inquirer = require("inquirer");
var Word= require("./word");
var Letter= require("./letter");

//if rightGuess equals the size of the word, the game is over, user wins
var rightGuess = 0;
//if guesses equals 0, the game is over, user loses
var guesses = 10;

//list of letters guessed to avoid duplicates
var lettersGuessed = [];

//Words array
var words = ["city","dog","wine","computer","food truck","radio"];
//Choose a random number from 0 to the size of words array
var random = Math.floor((Math.random() * words.length-1) + 1);
//use the random number to choose a word from the array
var wordSelected = words[random];

//create a new Word object with the selected word
var wordToPlay = new Word(words[random]);

//account for spaces in the words and count them as rightGuess 
var spaces = wordSelected.split(" ");
if(spaces.length > 0){
	rightGuess = spaces.length - 1;
}

//playing controls the game, if game is over then playing is false
var playing = true;
console.log("Welcome to my hangman game!")
 var playGame = function(){
	if (playing){ 
		console.log("You have " + guesses  + " attempts left");
		console.log("Word to guess: ");
		console.log(wordToPlay.wordToDisplay());
		inquirer
		  .prompt([ 
		    {
		      type: "input",
		      message: "Guess a letter!",
		      name: "letter"
		    }
		    ]).then(function(answers) {
		    	//check to see if the letter has already been guessed
		    	if(lettersGuessed.indexOf(answers.letter) == -1){
		    		//add the letter guessed to the list of letters guessed
		    		lettersGuessed.push(answers.letter);
		 			
		 			//if the letter is in the selected word, loop every character and
		 			//and account for every good guess (to cover repeated characters)
			    	if(wordSelected.indexOf(answers.letter) > -1){
	 					console.log("Correct!");
	 					for(i=0;i<wordSelected.length; i++){
	 						if(wordSelected[i] == answers.letter){
	 							rightGuess++;
	 						}
	 					}
	 				}
	 				//if the letter is not in the word then it an incorrect guess and we decrement the attemps
	 				else{
	 					console.log("Incorrect!");
	 					guesses--;
	 				}
	 				//use our Word object to check the letters
			    	wordToPlay.checkLetters(answers.letter);
			    	//if guesses equals 0 then game over, user loses
			    	if(guesses == 0){
			    		playing = false;
			    		console.log("You Lose!");
			    		console.log(wordSelected);
			    	}
			    	//if rightGuess equals the size of the word then game over, user wins
			    	if(rightGuess == wordSelected.length){
			    		console.log("You Win!");
			    		console.log(wordSelected);
			    		playing = false;
			    	}
			    	//keep playing game
			    	playGame();
			    }
			    //this else is for when the letter entered has already been tried
		    	else{
		    		console.log("Oops! You already tried that letter. Try another one!");
		    		playGame();
		    	}
			});
	}
	//the game is over, so we ask the user to play again
	else{
		inquirer
		  .prompt([ 
		    {
		      type: "confirm",
		      message: "Do you want to play again?",
		      name: "confirm",
		      default: false
		    }
		    ]).then(function(answers) {
		    	if(answers.confirm){
		    		//reset list of letters guessed
		    		lettersGuessed = [];
		    		//reset number of right guesses
		    		rightGuess = 0;
		    		//reset number of attempts
					guesses = 10;
					//chose a new random number
		    		random = Math.floor((Math.random() * words.length-1) + 1);
		    		//use the new random number to selected a word from the words array
					wordSelected = words[random];
					//create a new Word object with the new word 
					wordToPlay = new Word(words[random]);
					//account for the spaces as good guesses
					spaces = wordSelected.split(" ");
					if(spaces.length > 0){
						rightGuess = spaces.length - 1;
					}
					//reset playing back to true
					playing = true;
					//play game!
					playGame();
		    	}
		    });


	}	
}

//initial call to start the game!
playGame();




