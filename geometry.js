// Rectangle
var rectangle = {
  length: 4,
  width: 4,


isSquare: function(){
  return (this.length == this.width);
},
area: function(){
  return (this.length * this.width);
},
perimeter: function(){
  return ( 2 * (this.length * this.width));
}

};

// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  p: function(){
    console.log((this.sideA + this.sideB + this.sideC) / 2);
  },


isEquilateral: function(){
  return ((this.sideA == this.sideB) && (this.sideB == this.sideC) && (this.sideA == this.sideC));
},
isIsosceles: function(){
  return ((this.sideA == this.sideB) || (this.sideB == this.sideC) || (this.sideA == this.sideC));
},
area: function(){
  return Math.sqrt(this.p((this.p - this.sideA) * (this.p - this.sideB) * (this.p - this.sideC)));
}
isObtuse: function(){
  if (this.sideC >= this.sideB) && (this.sideC >= this.sideB) {
    return (Math.sqrt(this.SideA) + Math.sqrt(this.sideB) < Math.sqrt(this.sideC));
  };
}



};
