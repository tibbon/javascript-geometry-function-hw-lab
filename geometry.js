// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  isSquare: function(){
    if (this.length === this.width);
      console.log("that is a square");
   } else {
      console.log("that is not a square");
    }
   area: function(){
      console.log(this.length * this.width);
    }
  perimeter: function(){
      result = (this.length * 2) + (this.width * 2);
      console.log(result);
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
isIsosceles: function(){
    if (sideA === sideB != sideC|| sideA === sideC != sideB || sideB === sideC != sideA);
      console.log("this is a isosceles triangle");
  } else {
      console.log("this is not an isosceles");
  },

isEquallateral: function(){
    if (sideC === sideB && sideC === sideA)
        (console.log("this is an equallateral"));
  } else {
        (console.log("this is not equallateral"));
  },

 area: function(){
    s = (this.sideA + this.sideB + this.sideC)/2;
    console.log(Math.sqrt(s(s-this.sideA)(s - this.sideB)(s - this.sideC)));
  }

isObstuse: function(){
    var a = Math.pow( this.sideA, 2 );
    var b = Math.pow( this.sideB, 2 );
    var c = Math.pow( this.sideC, 2 );
    if ( a+b < c || a+c < b || b+c < a){
      console.log("It is obtuse");
    } else {
      console.log("It is not obtuse");
    }
}

triangle.isIsosceles();
triangle.isEquallateral();
triangle.area();
triangle.isObstuse();
