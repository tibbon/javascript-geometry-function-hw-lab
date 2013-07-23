# Geometry Function Lab/Homework

Please create a javascript file in this repository that fulfills the following requirements. This assignment is due Tuesday morning at 9am. Turn it in via a Github Pull Request.

### Part 1, Rectangle

Given the following a `rectangle` object like the one below, write the following functions:

* isSquare - Returns whether the rectangle is a square or not
#l = w
* area - Returns the area of the rectangle
#w x h
* perimeter - Returns the perimeter of the rectangle
#2(w+h
)
```javascript
var rectangle = {
  length: 4,
  width: 4
};
```

### Part 2, Triangle

Given the following a `triangle` object like the one below, write the following functions:

* isEquilateral - Returns whether the triangle is equilateral or not
#sideA = sideB = sideC
* isIsosceles - Returns whether the triangle is isosceles or not
#at least two equal sides
* area - Returns the area of the Triangle
* isObtuse - Returns whether the triangle is obtuse or not

```javascript
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
```

#### Optional Bonus

Geometry shapes aren't fun if you can't see them.

Use the [Raphaël](http://raphaeljs.com/) javascript library to draw the shapes on screen. We haven't explained how to do this, but if you're looking for a challenge, here ya go!
