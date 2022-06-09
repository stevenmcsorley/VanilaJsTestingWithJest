import subtract from './subtract.js';
import Journal from './journal.js';
import Product from './product.js';

    
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


let apple = new Product("Apple", Color.red, Size.small);
let tree = new Product("Tree", Color.green, Size.large);
let house = new Product("House", Color.blue, Size.large);
let products = [apple, tree, house];

let pf = new Product()

let redProducts = pf.filterByColor(products, Color.red);

console.log(redProducts);
