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
  sideA: 3,
  sideB: 4,
  sideC: 4,
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


