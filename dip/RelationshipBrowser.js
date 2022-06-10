// pretend abstract class for RelationshipBrowser
class RelationshipBrowser {
    constructor() {
      if(this.constructor === RelationshipBrowser) {
        throw new TypeError('Abstract class "RelationshipBrowser" cannot be instantiated directly.');
      }
    }
    findAllChildrenOf(name) {}
}

export default RelationshipBrowser;