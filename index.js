import subtract from './subtract.js';
import Journal from './journal.js';
import Product from './product.js';

// OCP - Open/Closed Principle
import BetterFilter from './ocp/BetterFilter.js';
import ColorSpecification from './ocp/ColorSpecification.js';
import SizeSpecification from './ocp/SizeSpecification.js';
import AndSpecification from './ocp/AndSpecification.js';
import OrSpecification from './ocp/OrSpecification.js';
import NotSpecification from './ocp/NotSpecification.js';


// Liskov Substition Principle
import Rectangle from './liskov/Rectangle.js';

// Dependency Inversion Principle
import Person from './dip/Person.js';
import Relationships from './dip/Relationships.js';
import Research from './dip/Research.js';



// Factory Method
import PointFactory from './factory/PointFactory.js';

    
export const binarySubtraction = subtract(999, 777).toString(2);

let j = new Journal();
j.addEntry('I am a test entry');
j.addEntry('I am another test entry');

let Color = Object.freeze({
    red: Symbol("red"),
    green: Symbol("green"),
    blue: Symbol("blue"),
  });
  
  let Size = Object.freeze({
    small: Symbol("small"),
    medium: Symbol("medium"),
    large: Symbol("large"),
  });


let apple = new Product("Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.red, Size.small);
let house = new Product("House", Color.green, Size.large);
let products = [apple, tree, house];

// let pf = new Product()

// let redProducts = pf.filterByColor(products, Color.green);

// console.log(redProducts);

/// OCP - Using specifications to filter products
let bf = new BetterFilter();
let green = bf.filter(products, new ColorSpecification(Color.green));
console.log("jsut green", green);

let greenAndLarge = bf.filter(products, new AndSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large)));
console.log("green && large", greenAndLarge);

let greenOrLarge = bf.filter(products, new OrSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large)));
console.log("green or large",greenOrLarge);

let notGreen = bf.filter(products, new NotSpecification(new ColorSpecification(Color.green)));
console.log("not green",notGreen);

let notGreenOrLarge = bf.filter(products, new OrSpecification(new NotSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large))));
console.log("not green or large", notGreenOrLarge);


// Liskov Substition Principle

let rc = new Rectangle(10, 20);
console.log("Area", rc.area().toString());
console.log( "is a Square ?", rc.isSquare().toString());
rc.width = 10
rc.height = 10
console.log("sq Area", rc.area().toString());
console.log( "is a Square ?", rc.isSquare().toString());


// Dependency Inversion Principle

  let parent = new Person("John");
  let child = new Person("Mary");
  let child2 = new Person("Bob");
  
  let rels = new Relationships();
  rels.addParentAndChild(parent, child);
  rels.addParentAndChild(parent, child2);

  new Research(rels)


  // Factory Method

    let cp = PointFactory.createCaresianPoint(10, 20);
    console.log(cp);
    let pp = PointFactory.createPolarPoint(10, 20);
    console.log(pp);



  