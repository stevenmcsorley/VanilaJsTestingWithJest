class BetterFilter {
  filter(items, spec) {
    return items.filter((item) => spec.isSatisfied(item));
  }
}
export default BetterFilter;
