class NotSpecification {
  constructor(specification) {
    this.specification = specification;
  }

    isSatisfied(item) {
        return !this.specification.isSatisfied(item);
    }
}
export default NotSpecification;