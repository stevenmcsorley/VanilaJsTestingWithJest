class AndSpecification {
    constructor(...specifications) {
        this.specifications = specifications;
    }
    isSatisfied(item) {
        return this.specifications.every(spec => spec.isSatisfied(item));
    }
}
export default AndSpecification;