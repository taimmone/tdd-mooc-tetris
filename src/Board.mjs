export class Board {
  width;
  height;
  falling;
  ticks;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = null;
    this.ticks = 0;
  }

  drop(block) {
    this.falling = block;
  }

  tick() {
    this.ticks++;
  }

  toString() {
    let board = "";
    for (let row = 0; row < this.height; ++row) {
      for (let col = 0; col < this.width; ++col) {
        if (this.falling && row === this.ticks && col === 1) {
          board = board + this.falling.color;
        } else {
          board = board + ".";
        }
      }
      board = board + "\n";
    }
    return board;
  }
}
