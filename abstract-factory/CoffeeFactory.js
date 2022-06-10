
import HotDrinkFactory from './HotDrinkFactory.js';
import Coffee from "./Coffee.js";

class CoffeeFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Brewing the coffee, amount: ${amount}`);
        return new Coffee();
    }
}

export default CoffeeFactory;