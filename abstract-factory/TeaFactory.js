import HotDrinkFactory from './HotDrinkFactory.js';
import Tea from './Tea.js';


class TeaFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Steeping the tea, amount: ${amount}`);
        return new Tea();
    }

}
export default TeaFactory;