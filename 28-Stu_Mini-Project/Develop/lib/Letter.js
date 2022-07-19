const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");

class Letter {
  constructor(character) {
    this.character = character;


    if( !(letters.includes(this.character) || numbers.includes(this.character)) ) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  toString() {
    if(letters.includes(this.character)) {
      return "_";
    } else {
      return this.character;
    }
  }

  guess(guessLetter) {
    return (guessLetter === this.character);
  }

}

module.exports = Letter;
