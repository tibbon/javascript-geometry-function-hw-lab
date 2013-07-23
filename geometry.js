// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  area: function() {
          console.log(this.length * this.width);
        },
  perimeter: function() {
    console.log((this.length * 2) + (this.width * 2));
        },
  isSquare: function(){
   if (this.width == this.length) {
    return "Yup, thats a Sq"
  } else {
    return "Nah..Thats something else. You weird"
  },
};


// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function(){
    if (this.sideA == this.sideB == this.sideC) {
      console.log("Yes this is equilateral");
    } else {
      console.log("Nah that ain't right");
    }
  },
  isIsosceles: function() {
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC)
          console.log("Yeahhh boyee. this definitely got some isosceles poppin");
        else
          console.log("psshh..better sit down and try again.");
  },
  area: function() {
          console.log(this.sideB * this.sideA * this.sideC);
        },
};
