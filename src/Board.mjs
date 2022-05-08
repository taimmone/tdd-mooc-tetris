const EMPTY = ".";

export class Board {
  #width;
  #height;
  #falling;
  #board;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
    this.#falling = null;
    this.#board = [...Array(height)].map(() => Array(width).fill(EMPTY));
  }

  hasFalling() {
    return !!this.#falling;
  }

  drop(block) {
    if (this.hasFalling()) {
      throw new Error("already falling");
    }
    this.#setFalling(block);
  }

  #setFalling(block) {
    this.#falling = block;
    this.#board[0][1] = block.color;
  }

  tick() {
    if (this.hasFalling()) {
      this.#moveFalling();
    }
  }

  #moveFalling() {
    let fallingPoint = null;
    for (let row = 0; row < this.#height; ++row) {
      for (let col = 0; col < this.#width; ++col) {
        if (this.hasFalling() && this.#board[row][col] == this.#falling.color) {
          fallingPoint = [...[row, col]];
        }
        if (this.#board[row][col] === this.#falling.color) {
          this.#board[row][col] = EMPTY;
        }
      }
    }

    if (fallingPoint) {
      const [row, col] = fallingPoint;
      if (row + 1 >= this.#height || this.#board[row + 1][col] !== EMPTY) {
        this.#board[row][col] = this.#falling.color;
        this.#falling = null;
        return;
      }
      this.#board[row + 1][col] = this.#falling.color;
    }
  }

  toString() {
    let board = "";
    for (let row = 0; row < this.#height; ++row) {
      for (let col = 0; col < this.#width; ++col) {
        board = board + this.#board[row][col];
      }
      board = board + "\n";
    }
    return board;
  }
}
