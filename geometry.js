// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  isSquare: function() {
    if (this.length == this.width) {
      return "This is a square.";
    } else {
      return "This is a rectangle.";
      }
    },
  area: function() {
    return this.length * this.width;
  },
  perimeter: function() {
    return this.length * 2 + this.width * 2;
  }

};



// Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function() {

  }

};



  var school = [];
  school.push(student);

  for(var i = 0; i < school.length; i++){
    console.log(school[i]);
  }

  for(var i = 0; i < school.length; i++){
    for(info in students[i]){
      console.log(students[i][info]);
    console.log(school[i]);
  }

  n = prompt('Would you like to add a new student? y or n');

}
var tricia = {name: "tricia", fave_animal: "tiger"}
tricia.sayHello = function() { alert("hey"); }
tricia.partyTime = function(){ alert("i love" + this.fave_animal);}

