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
  var area = ((A + B + C) * 0.5);
  return Math.sqrt(area(area - A)(area - B)(area - C));
}
