// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  isSquare: function() {
    if (this.length == this.width)
      alert("True");
    else
      alert("NOPE");
    },
  area: function() {
    alert(this.length * this.width);
    },
  perimeter: function(){
    alert((this.length*2) + (this.width*2));
  }
};


// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function() {
    if (this.sideA == this.sideB == this.sideC)
      alert("True");
    else
      alert("False");
  },
  isIsosceles: function() {
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC)
      alert("True");
    else
      alert("False");
  },
  area: function() {
    var s = ((this.sideA + this.sideB + this.sideC) / 2);
    alert(Math.sqrt  (s * ( s - this.sideA ) * ( s - this.sideB ) * ( s - this.sideC )) );
  },
  isObtuse: function() {
    if (Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) < Math.pow(this.sideC, 2) ||
        Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideB, 2) ||
        Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideA, 2)) {
     alert("True");
      } else {
      alert("False");
    }
  }
};
