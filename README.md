# HANGMAN_CLI
## HANGMAN GAME USING CONSTRUCTORS AND NODE JS 

In this game the main idea is to Recreate a Hangman game using javascript Constructors as the base of coding ! 
For this assignment we have to create 3 files 
* letter.js
* word.js
* index.js 

### letter.js 
Contains a constructor. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
 
 
 
### word.js
Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.
 
 
### index.js
Contains the logic for the course of the game, which depends on Word.js and Randomly selects a word and uses the Word constructor to store it. Prompts the user for each guess and keeps track of the user's remaining guesses.
