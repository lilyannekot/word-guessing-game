const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = [];
    for(var i = 0; i < word.length; i++) {
      this.letters.push(new Letter(word[i]));
    }
    this.guesses = [];
  }

  guessLetter(letter) {
    var isCorrect = false;

    for(var i of this.letters) {
      if(i.guess(letter)){
        isCorrect = true;
      }
    }

    if(!this.guesses.includes(letter)){
      this.guesses.push(letter);
    }
    
    return isCorrect;
  }

  guessedCorrectly() {
    for(var i = 0; i < this.guesses.length; i++) {
      if(!this.guessLetter(this.guesses[i])){
        return false;
      }
    }
    return true;
  }

}

module.exports = Word;
