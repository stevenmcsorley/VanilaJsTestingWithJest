import subtract from './subtract.js';
import Journal from './journal.js';
import Product from './product.js';

// OCP - Open/Closed Principle
import BetterFilter from './ocp/BetterFilter.js';
import ColorSpecification from './ocp/ColorSpecification.js';
import SizeSpecification from './ocp/SizeSpecification.js';
import AndSpecification from './ocp/AndSpecification.js';
import OrSpecification from './ocp/OrSpecification.js';


    
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
let tree = new Product("Tree", Color.red, Size.large);
let house = new Product("House", Color.green, Size.large);
let products = [apple, tree, house];

let pf = new Product()

let redProducts = pf.filterByColor(products, Color.green);

// console.log(redProducts);

/// OCP - Using specifications to filter products
let bf = new BetterFilter();
let green = bf.filter(products, new ColorSpecification(Color.green));
// console.log(green);

let greenAndLarge = bf.filter(products, new AndSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large)));
console.log(greenAndLarge);

let greenOrLarge = bf.filter(products, new OrSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large)));
console.log(greenOrLarge);

