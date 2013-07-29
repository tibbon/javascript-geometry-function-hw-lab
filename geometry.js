// Rectangle Object
var rectangle = {
  // these are comma separated attributes
  length: 4,
  // Some attributes can just be integers or strings
  width: 4,
  // Others can be functions
  // Call can be called like rectangle.length
  isSquare: function(){
    // Anything in here needs semicolons
    if(this.length === this.width){
      return true;
    } else {
      return false;
    }
  },
  area: function(){
    return this.length * this.width;
  },
  perimeter: function(){
    return this.length * 2 + this.width * 2;
  },
};


// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function(){
    if(this.sideA === this.sideB === this.sideC){
      return true;
    } else {
      return false;
    }
  },
  isIsosceles: function(){
    if(this.sideA === this.sideB || this.sideC){
      return true;
    } else {
      return false;
    }
  },
};


// console.log is like 'puts' in Ruby- kinda
console.log(rectangle.isSquare());
console.log(rectangle.area());
console.log(rectangle.perimeter());
console.log(triangle.isEquilateral());
console.log(triangle.isIsosceles());

// This defines a function
function testFunction(){
  return true;
};

// This calls a function
testFunction();
// The following just returns the contents of the function
testFunction;