// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  isSquare: function(){
   if (this.length == this.width)
  {
  return "it is a square";
  }
  else
  {
  return "not a square";}
  },
  area: function(){
  return this.length * this.width},
  perimiter: function(){
  return (this.length + this.width) * 2}
};


// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function(){
    if (this.sideA == this.sideB && this.sideB == this.sideC)
    {
    return "it is equilateral";
    }
    else
    {
    return "not equilateral";
    }
  },
  isIsosceles: function(){
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC)
    {
    return "it is isosceles";
    }
    else
    {
    return "not isosceles";
    }
  },
  isObtuse: function(){
    if (this.sideA > (this.sideB && this.sideC) || this.sideB > (this.sideA && this.sideB) || this.sideC > (this.sideA && this.sideB))
    {
    return "it is obtuse";
    }
    else
    {
    return "not obtuse";
    }
  },
  area: function(){
    return 0.5 * (this.sideA * this.sideB)
  }
};

