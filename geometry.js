// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  perimeter: function(){
    return 2 * (this.length + this.width);
  },
  area: function(){
    return (this.length * this.width);
  },
  isSquare: function(){
   return this.length == this.width;
  }
};


// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function(){
    return this.sideA === this.sideB === this.sideC;
  },
  isIsoceles: function(){
    return (this.A == this.sideB || this.A == this.sideC || this.sideB == this.sideC);
  },
  isObtuse: function(){
    return (this.sideA * this.sideA + this.sideB * this.sideB < this.sideC * this.sideC ||  this.sideC * this.sideC + this.sideA * this.sideA < this.sideB * this.sideB || this.sideB * this.sideB + this.sideC * this.sideC < this.sideA * this.sideA);
  },
  area: function(){
    return (0.5 * (this.sideA * this.sideB));
  }
};
