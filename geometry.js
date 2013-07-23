// Rectangle
var rectangle = {
  length: 4,
  width: 4,


isSquare: function(){
  if(this.length === this.width)
    (alert("that is a square"));
  else
    (alert("that is not a square"));
}


Sqarea: function(){
  result = this.length * this.width;
  console.log(result);
}


perimeter: function(){
  result = (this.length * 2) + (this.width * 2);
  return result;
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

function isIsosceles(){
  if (sideA === sideB != sideC|| sideA === sideC != sideB || sideB === sideC != sideA);
    console.log("this is a isosceles triangle");
  else
    console.log("this is not an isosceles");
}



function isEquallateral(){
  if (sideC === sideB === sideA)
      (console.log("this is an equallateral"));
    else
      (console.log("this is not equallateral"));
}

function area(){
  this.length

}


