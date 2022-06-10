import RelationshipBrowser from "./RelationshipBrowser.js";

let relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

// Lower level module
class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.relationships = [];
  }
  addParentAndChild(parent, child) {
    this.relationships.push({
      from: parent,
      to: child,
      type: relationship.parent,
    });
  }

  findAllChildrenOf(name) {
    return this.relationships
      .filter((r) => r.from.name === name)
      .map((r) => r.to);
  }
}

export default Relationships;
