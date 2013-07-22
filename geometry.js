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
    if (this.sideA == this.sideB)
      alert("True");
    else if (this.sideA == this.sideC)
      alert("True");
    else if (this.sideB == this.sideC)
      alert("True");
    else
      alert("False");
  },
  area: function() {
    alert((this.sideA*2.7) *(0.5));
  },
  isObtuse: function() {
    alert("False");
  }
};
