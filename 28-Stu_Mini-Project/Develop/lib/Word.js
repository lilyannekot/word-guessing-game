const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = [];
    for(var i = 0; i < word.length; i++) {
      this.letters.push(new Letter(word[i]));
    }
  }

  guessLetter(letter) {
    for(var i of this.letters) {
      if(i.guess(letter)){
        return true;
      }
    }
    return false;
  }

}

module.exports = Word;
