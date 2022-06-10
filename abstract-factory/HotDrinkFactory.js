class HotDrinkFactory {
  prepare(amount) {
    throw new Error('Abstract method');
  }
}

export default HotDrinkFactory;