export class Board {
  width;
  height;
  falling;
  ticks;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = null;
    this.ticks = 0;
    this.board = new Array(this.height);
    this.board.fill(new Array(this.width).fill("."));
  }

  drop(block) {
    if (this.falling) {
      throw new Error("already falling");
    }
    this.falling = block;
  }

  tick() {
    this.ticks++;
  }

  hasFalling() {
    return !!this.falling;
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
