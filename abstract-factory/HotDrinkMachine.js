class HotDrinkMachine {
    constructor() {
        this.types = {};
    }
    register(name, factory) {
        this.types[name] = factory;
    }
    makeDrink(name, amount) {
        const factory = this.types[name];
        return factory.prepare(amount);
    }
}

export default HotDrinkMachine;