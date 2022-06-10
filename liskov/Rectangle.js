class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }

  // Dont make a new class for Square, just use the existing one
  // Inheriting from Rectangle class to a Square class could break the Liskov Substitution Principle
  // This is because a Square class is not a rectangle and therefore it does not have a strict area method.
  // addition logic would need to be added to both classes for such simple logic
  // and lose the benefits of inheritance or none at all.
  //
  // Object oriented design models behavior, rather than any mathematical properties.
  // So the short answer is that since a square cannot act like a rectangle and a rectangle doesn't act like a square,
  // they have no child-parent relationship, either way.
  //
  // The longer answer is a square is a special form of a rectangle only in a specific domain, that being geometric properties.
  // OOD deals with a different domain, modelling behaviour of interacting objects. 
  // As such if the relationships are not relevant to this domain you should ignore them. 
  // Attempting to model relationships that are actually irrelevant to how the system will behave causes big problems in a system. 
  // Stick to the relationships that matter to the behaviour of the system.
  //
  // Like a cat is a specialization of an animal, the animal being the general type. 
  // This does not apply here at all though. A square is not a specialization of a rectangle.
  // 
  // The Liskov Substitution Principle states that if you can replace a class with a subclass,
  // then you can replace all of its subclasses with subclasses of the new class.
  // This is a very important principle in object oriented design.
  // It is a way to ensure that the subclasses of a class are not only subclasses of the class,
  // but also subclasses of the new class.
  //
  // ie: a bird class would not inherit a dog class or vice versa because they both have 2 eyes
  // Therfore animal class would have subclasses of mammal class and avian class.

  // tip: use the same class for both the rectangle and square classes
  // this way you can use the same code for both classes
  // and the Liskov Substitution Principle will still hold
  // check if the rectangle is a square
  // if not, then set the width and height to be the same
  
  isSquare() {
    return this.width === this.height;
  }
}
export default Rectangle;
