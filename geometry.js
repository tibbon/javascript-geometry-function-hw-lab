// Rectangle
var rectangle = {
  length: 4,
  width: 4
};

//isSquare - Returns whether the rectangle is a square or not
function isSquare(rectangle){
   if (rectangle.length == rectangle.width) {
       return "The rectangle is a square"
   } else {
       return "The rectangle is not a square"
   }
}

//area - Returns the area of the rectangle
function area(rectangle){
    return rectangle.length * rectangle.width;
}

//perimeter - Returns the perimeter of the rectangle
function perimeter(rectangle){
    return (2*rectangle.length) + (2*rectangle.width);
}

// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

//isEquilateral - Returns whether the triangle is equilateral or not
function isEquilateral(triangle){
   if (triangle.sideA == triangle.sideB && triangle.sideB == triangle.sideC){
      console.log("This triangle is equilateral")
   } else {
       console.log("This triangle isn't equilateral")
   }
}

//isIsosceles - Returns whether the triangle is isosceles or not
function isIsosceles(triangle){
    if ((triangle.sideA == triangle.sideB && triangle.sideB != triangle.sideC)) {
        console.log("This triangle is isosceles");
    } else if ((triangle.sideB == triangle.sideC && triangle.sideC != triangle.sideA)) {
        console.log("This triangle is isosceles");
    } else if ((triangle.sideC == triangle.sideA && triangle.sideA != triangle.sideB)) {
        console.log("This triangle is isosceles");
    } else
        console.log("This triangle is not isosceles");
}

//area - Returns the area of the Triangle
function area(triangle){
    return triangle.sideA * triangle.sideB * triangle.sideC
}

//isObtuse - Returns whether the triangle is obtuse or not
function isObtuse(triangle){
var mx = { value: 0, name: "" };
for (var o in triangle)
    if (mx["value"] < triangle[o]) {
        mx["value"] = triangle[o];
        mx["name"] = o;
    }

var maxSide = Math.pow(mx["value"], 2);
var sums = 0;
for (var o in triangle)
    if (o != mx["name"])
        sums += Math.pow(triangle[o], 2);

if (sums > maxSide)
    console.log("The triangle is not obtuse");
else
    console.log("The triangle is obtuse");
}

