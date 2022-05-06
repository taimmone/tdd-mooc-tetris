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
    this.board = [...Array(height)].map(() => Array(width).fill("."));
  }

  drop(block) {
    if (this.falling) {
      throw new Error("already falling");
    }
    this.falling = block;
    this.board[0][1] = this.falling.color;
  }

  tick() {
    this.ticks++;
    if (this.falling) {
      this.moveFalling();
    }
  }

  moveFalling() {
    let fallingPoint = null;
    for (let row = 0; row < this.height; ++row) {
      for (let col = 0; col < this.width; ++col) {
        if (this.falling && this.board[row][col] == this.falling.color) {
          fallingPoint = [...[row, col]];
        }
        if (this.board[row][col] === this.falling.color) {
          this.board[row][col] = ".";
        }
      }
    }

    if (fallingPoint) {
      const [row, col] = fallingPoint;
      if (row + 1 >= this.height) {
        this.board[row][col] = this.falling.color;
        this.falling = null;
        return;
      }
      this.board[row + 1][col] = this.falling.color;
    }
  }

  hasFalling() {
    return !!this.falling;
  }

  toString() {
    let board = "";
    for (let row = 0; row < this.height; ++row) {
      for (let col = 0; col < this.width; ++col) {
        board = board + this.board[row][col];
      }
      board = board + "\n";
    }
    return board;
  }
}
