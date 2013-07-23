// Rectangle
var rectangle = {
  length: 4,
  width: 5,
  isSquare: function() {
    return this.length == this.width;
   },
  area: function() {return this.length * this.width;},
  perimeter: function() {return (this.length + this.width) * 2;}
};

// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function() {
    return this.sideA == this.sideB == this.sideC;
  },
  isIsosceles: function() {
    return this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC;
  },
  area: function() {
    var s = (this.sideA + this.sideB + this.sideC)/2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));},
  isObtuse: function() {
    return Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) < Math.pow(this.sideC, 2) ||
           Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideB, 2) ||
           Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideA, 2);
  }
};

alert(rectangle.isSquare());
alert(rectangle.area());
alert(rectangle.perimeter());
alert(triangle.isEquilateral());
alert(triangle.isIsosceles());
alert(triangle.area());
alert(triangle.isObtuse());


