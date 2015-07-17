// Rectangle
// end goal
// rectangle.area = 16



var rectangle = {
  length: 4,
  width: 4
};

rectangle.inSquare = function(length, width){
  if (length === width)
    console.log("square");
  else
    console.log("rectangle");
};

rectangle.area = function(length, width){
  console.log(length * width);
};

rectangle.perimeter = function(length, width){
  console.log(2*(length + width));
};



// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

triangle.isEquilateral = function(a,b,c){
  if (a === b && b=== c && c === a)
    console.log('equilateral');
  else
    console.log('not');
};

triangle.isIsosceles = function(a,b,c){
  if (a === b || b ===c || c === a)
    console.log('isosceles');
  else
    console.log('not');
};

triangle.area = function(base, height){
  console.log(0.5 * base * height);
};

triangle.isObtuse = function(angle_a,angle_b,angle_c){
  if (angle_a > 90 || angle_b > 90 || angle_c > 90)
    console.log('obtuse');
  else
    console.log('not');
};
