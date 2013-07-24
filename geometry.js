// this is a new object called Rectangle
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
// Adding these functions below to apply to each object of rectangle created
Rectangle.prototype.isSquare = function () {
  if (this.length === this.width) {
    return true;
  } else {
    return false;
  }
};
Rectangle.prototype.squArea = function () {
  return this.length * this.width;
};
Rectangle.prototype.periMeter = function () {
  return this.length + this.length + this.width + this.width;
};

//Triangle time - new triangle object
function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
// Triangle functions
Triangle.prototype.isEqui = function () {
  if (this.sideA === this.sideB && this.sideA === this.sideC) {
    return true;
  } else {
    return false;
  }
};
Triangle.prototype.isIso = function() {
  if (this.sideA === this.sideB || this.sideC) {
    return true;
  } else {
    return false;
  }
};
Triangle.prototype.triArea = function() {
  var area = ((this.sideA + this.sideB + this.sideC) / 2);
  return Math.sqrt(area * (area - this.sideA) * (area - this.sideB) * (area - this.sideC));
};
Triangle.prototype.isObtuse = function() {
  if (Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) < Math.pow(this.sideC, 2) ||
      Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideB, 2) ||
      Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideA, 2)
      ) { return true;
      } else {
    return false;
  }
};

// Older code

// Rectangle
var rectangle = {
  length: 4,
  width: 4
};


// Triangle
var triangle = {
  A: 3,
  B: 4,
  C: 4
};

// Rectangle Functions
function isSquare(length, width) {
  if (length === width) {
    console.log("That there is a square");
  } else {
    return "That there is not square";
  }
}
function squArea(length, width) {
  return length * width;
}
function periMeter(length, width) {
  return length + length + width + width;
}

// Triangle Functions
function isEqui(A, B, C) {
  if (A === B && A === C) {
    console.log("EquiFine");
  } else {
    return "Not EquiFine";
  }
}
function isIso(A, B, C) {
  if (A === B || C) {
    console.log("That's Nisosceles");
  } else {
    return "Not very Nisosceles";
  }
}
function triArea(A, B, C) {
  var area = ((A + B + C) / 2);
  console.log(Math.sqrt(area * (area - A) * (area - B) * (area - C)));
}
function isObtuse(A, B, C) {
  if (Math.pow(A, 2) + Math.pow(B, 2) < Math.pow(C, 2) ||
      Math.pow(A, 2) + Math.pow(C, 2) < Math.pow(B, 2) ||
      Math.pow(B, 2) + Math.pow(C, 2) < Math.pow(A, 2)
      ) { console.log("So obtuse");
      } else {
    return "Nobtuse";
  }
}
// c2 = a2 + b2 - 2ab cos(C)
