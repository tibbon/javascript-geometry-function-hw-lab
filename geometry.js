// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  isSquare: function(){
    if (this.length == this.width) {
      console.log("The rectangle is a square.");
    } else {
      console.log("The rectangle is not a square.");
    }
  },
  area: function(){
    return this.length * this.width;
  },
  perimeter: function(){
    return (this.length * 2) + (this.width * 2);
  }
};


// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function(){
    if ((this.sideA == this.sideB) && (this.sideA == this.sideC)) {
      console.log("This triangle is an equilateral triangle.");
    } else {
      console.log("This triangle is not an equilateral triangle.");
    }
  },
  isIsosceles: function(){
    if ((this.sideA == this.sideB) || (this.sideA == this.sideC) || (this.sideB == this.sideC)) {
      console.log("This triangle is an isosceles triangle.");
    } else {
      console.log("This triangle is not an isosceles triangle.");
    }
  },
  area: function(){
    p = ((this.sideA + this.sideB + this.sideC) / 2);
    area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    return area;
  },
  isObtuse: function(){
    possibility1 = (Math.pow(this.sideA,2) + Math.pow(this.sideB,2)) < Math.pow(this.sideC,2);
    possibility2 = (Math.pow(this.sideB,2) + Math.pow(this.sideC,2)) < Math.pow(this.sideA,2);
    possibility3 = (Math.pow(this.sideC,2) + Math.pow(this.sideA,2)) < Math.pow(this.sideB,2);
    if (possibility1 || possibility2 || possibility3) {
      console.log("This triangle is obtuse.");
    } else {
      console.log("This triangle is not obtuse.");
    }
  }
};