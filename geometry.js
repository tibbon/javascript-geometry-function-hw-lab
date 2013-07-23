// Rectangle
var rectangle = {
  length: 4,
  width: 4
};

rectangle.isSquare = function(){
  if (this.length == this.width){
    console.log("This rectangle is a square");
  } else {
    console.log("This is a rectangle");
  }
};

rectangle.area = function(){
  console.log(this.length * this.width);
};

rectangle.perimeter = function() {
  console.log((this.length + this.width) * 2);
};


// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

triangle.isEquilateral = function() {
  if (this.sideA == this.sideB && this.sideB == this.sideC){
    console.log("This triangle is equilateral");
  } else {
    console.log("This triangle is NOT equilateral");
  }
};

triangle.isIsosceles = function() {
  if ((this.sideA != (this.sideA + this.sideB + this.sideC) / 3) && (this.sideA == this.sideB || this.sideB == this.sideC || this.sideC == this.sideA)) {
    console.log("This triangle is isosceles");
  } else {
    console.log("This triangle is NOT isosceles");
  }
};

triangle.area = function() {
  s = (this.sideA + this.sideB + this.sideC) / 2;
  area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  console.log("Area of this triangle is " + area);
};

triangle.isObtuse = function() {
  triangleSidesSquaredArray = [Math.pow(this.sideA, 2), Math.pow(this.sideB, 2), Math.pow(this.sideC, 2)];
  longestSide = Math.max.apply(Math, triangleSidesSquaredArray);
  index = triangleSidesSquaredArray.indexOf(longestSide);
  triangleSidesSquaredArray.splice(index, 1);
  sumOfOtherTwo = 0;
  for (var i = 0; i < triangleSidesSquaredArray.length; i++){
    sumOfOtherTwo = sumOfOtherTwo + triangleSidesSquaredArray[i];
  }
  if (sumOfOtherTwo >= longestSide) {
    console.log("It's not obtuse");
  } else {
    console.log("It's obtuse");
  }
};
