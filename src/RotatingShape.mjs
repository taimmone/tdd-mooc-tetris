export class RotatingShape {
  shape;

  constructor(shape) {
    if (typeof shape !== "string") {
      this.shape = shape;
    } else {
      this.shape = shape.split("\n").map((row) => row.trim().split(""));
    }
  }

  toString() {
    let shapeString = "";
    for (let row = 0; row < this.shape.length; ++row) {
      for (let col = 0; col < this.shape.length; ++col) {
        shapeString += this.shape[row][col];
      }
      shapeString += "\n";
    }
    return shapeString;
  }
}
