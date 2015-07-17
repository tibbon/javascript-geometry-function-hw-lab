// Rectangle

var length = prompt("length?");
var width = prompt("width?");
var rectangle = {
  length:length,
  width: width,
  area: function() {
    return (this.length * this.width);
  },
  perimeter: function() {
    return ((2*this.length)+ (2*this.width));
  },
  isSquare: function() {
    if (this.width == this.length)
      return "Nice Square!"
    else
      return "Not a square!"
  }
};
document.write("<h4> area equals " + rectangle.area() + "</h4>")
document.write("<h4> perimeter equals" + rectangle.perimeter() + "</h4>")
document.write("<h4>" + rectangle.isSquare() + "</h4>")
// Triangle
var sideA = prompt("side A?")
var sideB = prompt("side B?")
var sideC = prompt("side C?")
var triangle = {
  sideA: sideA,
  sideB: sideB,
  sideC: sideC,
  isEquilateral: function() {
    return (this.sideA == this.sideB && this.sideA == this.sideC);
  },
  isIsosceles: function() {
    return (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC);
  }
};

document.write("<h4> Is equilateral?" + triangle.isEquilateral()+"</h4>")
document.write("<h4> Is isosceles?" + triangle.isIsosceles()+"</h4>")
// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(0, 0, document.width, document.height);

// Creates rectangle at x = 50, y = 40, with radius 10
var shape = paper.rect(0,0,length, width);
// Sets the fill attribute of the circle to red (#f00)
shape.attr("fill", "#f00");
shape.attr("opacity",0.5)
// Sets the stroke attribute of the circle to white
shape.attr("stroke", "#fff");
shape.attr("title", "Ben is cool.")