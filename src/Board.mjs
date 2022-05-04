export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let board = "";
    for (let row = 0; row < this.height; ++row) {
      for (let col = 0; col < this.width; ++col) {
        board = board + ".";
      }
      board = board + "\n";
    }
    return board;
  }
}
