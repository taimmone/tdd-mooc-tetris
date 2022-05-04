export class Board {
  width;
  height;
  falling;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = null;
  }

  drop(block) {
    this.falling = block;
  }

  toString() {
    let board = "";
    for (let row = 0; row < this.height; ++row) {
      for (let col = 0; col < this.width; ++col) {
        if (this.falling && row === 0 && col === 1) {
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
