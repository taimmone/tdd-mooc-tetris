export class RotatingShape {
  shape;

  constructor(shape) {
    if (typeof shape !== "string") {
      this.shape = shape;
    } else {
      this.shape = shape.split("\n").map((row) => row.trim().split(""));
    }
  }

  rotateRight() {
    const size = this.shape.length;
    let rotated = [...Array(size)].map(() => [...Array(size)]);
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        rotated[col][size - 1 - row] = this.shape[row][col];
      }
    }
    return new RotatingShape(rotated);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
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
