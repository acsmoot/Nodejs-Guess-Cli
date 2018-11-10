//     * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var Letter = function (char) {

    this.underlying = char; //   * A string value to store the underlying character for the letter
    this.rightGuess = false; // * A boolean value that stores whether that letter has been guessed yet
    this.guessed = function () {
            //   * A function that returns the underlying character 
            // if the letter has been guessed, 
            // or a placeholder (like an underscore) if the letter has not been guessed
        if (this.rightGuess) {
            console.log("the letter has been guessed");
            this.rightGuess = false;
            this.underlying = char;
            return console.log("right guess");
        } else {
            return this.underlying = '*';
        }
    }
    this.guessedCorrect = function (char) {
        //   * A function that takes a character as an argument 
        //   and checks it against the underlying character, 
        if (char === this.underlying) {
            // updating the stored boolean value to true if it was guessed correctly
            this.rightGuess = true;
            console.log("right guess");
        } else this.rightGuess = false;
    }
}
module.exports = Letter;