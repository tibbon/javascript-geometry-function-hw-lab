// Rectangle
var rectangle = {
  length: 3,
  width: 4,
  isSquare: function(){
    if (this.length == this.width) {
      console.log("You have a square");
    } else {
      console.log("You have a non-square rectangle");
    }
  },
  area: function(){
    area = this.length * this.width;
    console.log(area);
  },
  perimeter: function(){
    perimeter = (this.length * 2) + (this.width * 2);
    console.log(perimeter);
  }
};

// Triangle
var triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 3,
  isEquilateral: function(){
    if (this.sideA == this.sideB && this.sideB == this.sideC) {
      console.log("You have an equilateral triangle");
    } else {
      console.log("You do not have an equilateral triangle");
    }
  },
  isIsosceles: function(){
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
      console.log("You have an isosceles triangle");
    } else {
      console.log("You do not have an isosceles triangle");
    }
  },
  isObtuse: function(){
    if (this.sideA*this.sideA + this.sideB*this.sideB < this.sideC*this.sideC || this.sideC*this.sideC + this.sideA*this.sideA < this.sideB*this.sideB || this.sideB*this.sideB + this.sideC*this.sideC < this.sideA*this.sideA) {
      console.log("You have an obtuse triangle");
    } else {
      console.log("You do not have an obtuse triangle");
    }
  },
  area: function(){
    console.log((0.5)*this.sideA*this.sideB);
  }
}

function draw() {
  var paper = Raphael('draw', 'draw', 320, 200);
  var rect = paper.rect(20,20,rectangle.width,rectangle.length);
  var tri = paper.path("M 100 20 l "+triangle.sideA+" 0 l 0 "+triangle.sideB+" l "+(-triangle.sideA)+(-triangle.sideB));
};

draw();
