// Rectangle
var rectangle = {
  length: 4,
  width: 4
};

rectangle.isSquare = function() {
  if (this.length == this.width) {
      return "This is a square!";
  } else {
      return "Not a square.";
  }
}

rectangle.area = function() {
  return this.length * this.width;
}

rectangle.perimeter = function() {
  return 2 * (this.length + this.width);
}

console.log(rectangle.perimeter());

// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

triangle.isEquilateral = function() {
  if(this.sideA == this.sideB && this.sideB == this.sideC){
    return "This is equilateral!";
  } else {
    return "This is not equilateral.";
  }
}

triangle.isIsosceles = function() {
  if(this.sideA == this.sideB && this.sideB == this.sideC) {
    return "This is equilateral, not isosceles.";
  } else if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC){
    return "This is isosceles!";
  } else {
    return "This is scalene.";
  }
}

triangle.area = function() {
  s = (this.sideA + this.sideB + this.sideC)/2;
  return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
}

triangle.isObtuse = function() {
  a = this.sideA ^ 2;
  b = this.sideB ^ 2;
  c = this.sideC ^ 2;
  if (a + b < c || a + c < b || b + c < a) {
    return "This is obtuse.";
  } else {
    return "This is not obtuse.";
  }
}

console.log(triangle.isObtuse());