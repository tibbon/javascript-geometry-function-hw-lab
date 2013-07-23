// Rectangle
var rectangle = {
  length: 4,
  width: 4
  };
  isSquare: function(){
    if (this.length === this.width);
      console.log("that is a square");
   } else {
      console.log("that is not a square");
    };
   area: function(){
      console.log(this.length * this.width);
    };
  perimeter: function(){
      result = (this.length * 2) + (this.width * 2);
      console.log(result);
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

function isIsosceles(){
  if (sideA === sideB != sideC|| sideA === sideC != sideB || sideB === sideC != sideA);
    console.log("this is a isosceles triangle");
} else {
    console.log("this is not an isosceles");
}


function isEquallateral(){
  if (sideC === sideB && sideC === sideA)
      (console.log("this is an equallateral"));
} else {
      (console.log("this is not equallateral"));
}

function area(){
  s = (this.sideA + this.sideB + this.sideC)/2;
  console.log(Math.sqrt(s(s-this.sideA)(s - this.sideB)(s - this.sideC)));

}


