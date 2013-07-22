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
  sideC: 4,
  isEquilateral: function(){
    if (this.sideA == this.sideB && this.sideA == this.sideC) {
      console.log("It is equilateral");
    } else {
      console.log("It is not equilateral");
    }
  },
  isIsosceles: function(){
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
      console.log("It is isosceles");
    } else {
      console.log("It is not isosceles");
    }
  },
  area: function(){
    var s = (this.sideA + this.sideB + this.sideC)/2;
    var a = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
    console.log(a);
  },
  isObtuse: function(){
    var a = Math.pow( this.sideA, 2 );
    var b = Math.pow( this.sideB, 2 );
    var c = Math.pow( this.sideC, 2 );
    if ( a+b < c || a+c < b || b+c < a){
      console.log("It is obtuse");
    } else {
      console.log("It is not obtuse");
    }
  }
};

triangle.isEquilateral();
triangle.isIsosceles();
triangle.area();
triangle.isObtuse();