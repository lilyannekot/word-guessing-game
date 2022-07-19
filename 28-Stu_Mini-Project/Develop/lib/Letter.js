class Letter {
  constructor(character) {
    this.character = character;

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";

    if( !(letters.split("").includes(this.character) || numbers.split("").includes(this.character)) ) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}

module.exports = Letter;
