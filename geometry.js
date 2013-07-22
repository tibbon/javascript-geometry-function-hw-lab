// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  area: function() {
    console.log(this.length * this.width);
  },
  perimeter: function() {
    console.log(this.length + this.length + this.width + this.width);
  },
  isSquare: function() {
    if (this.width == this.length)
      return "Nice Square!"
    else
      return "Not a square!"
  }
};


// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
