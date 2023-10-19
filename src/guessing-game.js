class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.answer = 0;
    }

    setRange(min, max) {
      this.max = max
      this.min = min
    }

    guess() {
      this.answer = Math.round((this.max + this.min) / 2)
      return this.answer
    }

    lower() {
      this.max = this.answer
    }

    greater() {
      this.min = this.answer
    }
}
module.exports = GuessingGame;
