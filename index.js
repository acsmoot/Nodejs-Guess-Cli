var prompt = require("inquirer");
//* **index.js**: 
// The file containing the logic for the course 
// of the game, which depends on `Word.js` and:
var Word = require("./Word");

var word = new Word();
// * Randomly selects a word 
//  uses the `Word` constructor to store it

// * Prompts the user for each guess 
//  keeps track of the user's remaining guesses
// var animal = process.argv[2];
// var method = process.argv[3];