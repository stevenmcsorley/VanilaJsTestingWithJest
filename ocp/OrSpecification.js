class OrSpecification {
    constructor(...specifications) {
        this.specifications = specifications;
    }
    isSatisfied(item) {
        return this.specifications.some(spec => spec.isSatisfied(item));
    }
}
export default OrSpecification;