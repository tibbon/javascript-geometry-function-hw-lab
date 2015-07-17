// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  isSquare: function() {
    if (this.length === this.width) {
      console.log("Yes, this rectangle is square.");
    } else {
      console.log("No, this rectangle is not square.");
    }
  },
  area: function() {
    console.log(this.length * this.width);
  },
  perimeter: function() {
    console.log((this.length + this.width) * 2);
  },
};

// Triangle
var triangle = {
  sideA: 3,
  sideB: 5,
  sideC: 2,
  isEquilateral: function() {
    if (this.sideA === this.sideB &&
        this.sideA === this.sideC &&
        this.sideB === this.sideC) {
      console.log("Yes, this triangle is equilateral");
    } else {
      console.log("No, this triangle is not equilateral");
    }
  },
  isIsosceles: function() {
    if (this.sideA === this.sideB && this.sideA !== this.sideC ||
        this.sideA === this.sideC && this.sideA !== this.sideB ||
        this.sideB === this.sideC && this.sideB !== this.sideA) {
      console.log("Yes, this triangle is isosceles.");
    } else {
      console.log("No, this triangle is not isosceles.");
    }
  },
  area: function() {
    var k = ((this.sideA + this.sideB + this.sideC) / 2);
    console.log(Math.sqrt  (k * ( k - this.sideA ) * ( k - this.sideB ) * ( k - this.sideC )));
  },
  isObtuse: function() {
    if  (((this.sideA * this.sideA) + (this.sideB * this.sideB)) < (this.sideC * this.sideC) ||
        ((this.sideA * this.sideA) + (this.sideC * this.sideC)) < (this.sideB * this.sideB) ||
        ((this.sideB * this.sideB) + (this.sideC * this.sideC)) < (this.sideA * this.sideA)) {
      console.log("Yes, this triangle is obtuse.");
        } else {
      console.log("No, this triangle is not obtuse.");
    }
  }
};

// Canvas
// window.onload = function() {
  // var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);
  //var rectangle = paper.rect(50, 50, window.rectangle.length * 50, window.rectangle.width * 50);
  // rectangle.attr({gradient: '90-#526c7a-#64a0c1', fill: '#00FF80', stroke: '#ddd', 'stroke-width': 3, 'stroke-linejoin': 'round'});
  // var lineA = window.triangle.sideA
  // var lineB = window.triangle.sideB
  // var triangle = paper.path("M 400 430 l 0 " + -lineA * 50 + " l " + -lineB * 50 + " 0 z");
  // triangle.attr({fill: '#FF4000', 'stroke-width': 3, stroke: '#848484'})
// };

function drawRect() {
  var length = document.getElementById('rectLength').value;
  var width = document.getElementById('rectWidth').value;
  var paper = new Raphael(document.getElementById('canvas_container'), 100, 100);
  var rectangle = paper.rect(25, 25, length * 10 , width * 10);
  rectangle.attr({gradient: '90-#526c7a-#64a0c1', fill: '#00FF80', stroke: '#ddd', 'stroke-width': 3, 'stroke-linejoin': 'round'});
};

function drawTri() {
  var lineA = document.getElementById('lineA').value;
  var lineB = document.getElementById('lineB').value;
  var paper = new Raphael(document.getElementById('canvas_container'), 100, 100);
  var triangle = paper.path("M 80 80 l 0 " + -lineA * 10 + " l " + -lineB * 10 + " 0 z");
  triangle.attr({fill: '#FF4000', 'stroke-width': 3, stroke: '#848484'})
};