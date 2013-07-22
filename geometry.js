// Rectangle
var rectangle = {
  length: 4,
  width: 4
};

var msg = prompt("give me some parameters?");


function isSquare(length, width){
  if(this.length / this.width === 0)
    console.log("that is a square");
  else
    (console.log("that is not a square"));
}


function area(){
  (result = this.length * this.width);
  return result;
}


function perimeter(){
  result = (this.length * 2) + (this.width * 2);
  return result;
}


 console.log(rectangle.isSquare);




// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

function isIsosceles(){
  if (sideA === sideB || sideA === sideC || sideB === sideC);
    console.log("this is a isosceles triangle");
  else
    console.log("this is not an isosceles");
}



function isEquallateral(){
  if (sideC === sideB === sideA)
      console.log("this is an equallateral");
    else
      console.log("this is not equallateral");
}


