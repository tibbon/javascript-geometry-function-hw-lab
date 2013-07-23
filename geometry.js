// Rectangle
var rectangle = {
  length: 4,
  width: 5,
  isSquare: function() {
    if (this.length == this.width) {
       return true;
     } else {
       return false;
     }
   },
  area: function() {return this.length * this.width;},
  perimeter: function() {return this.length * 2 + this.width * 2;}
};

// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function() {
    if (this.sideA == this.sideB == this.sideC) {
      return true;
    } else {
      return false;
    }
  },
  isIsosceles: function() {
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
      return true;
    } else {
      return false;
    }
  },
  area: function() {
    var s = (this.sideA + this.sideB + this.sideC)/2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));},
  isObtuse: function() {
    if (Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) < Math.pow(this.sideC, 2) ||
        Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideB, 2) ||
        Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideA, 2)) {
      return true;
    } else
    return false;
  }
};

alert(rectangle.isSquare());
alert(rectangle.area());
alert(rectangle.perimeter());
alert(triangle.isEquilateral());
alert(triangle.isIsosceles());
alert(triangle.area());
alert(triangle.isObtuse());


