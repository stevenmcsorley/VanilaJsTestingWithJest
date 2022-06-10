class Factory {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static createCaresianPoint(x, y) {
    return new Factory(x, y);
  }

  static createPolarPoint(r, theta) {
    return new Factory(r * Math.cos(theta), r * Math.sin(theta));
  }

}

export default Factory;
