// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  isSquare: function(){
    if (this.length == this.width) {
      console.log("Is a square");
    } else {
      console.log("Is not a square");
    }
  },
  area: function(){
    console.log(this.length * this.width);
  },
  perimeter: function (){
    console.log(2*this.length + 2*this.width);
  }
};

rectangle.isSquare();
rectangle.area();
rectangle.perimeter();

// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
