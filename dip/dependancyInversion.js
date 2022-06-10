let relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Lower level module
class Relationships {
  constructor() {
    this.relationships = [];
  }
  addParentAndChild(parent, child) {
    this.relationships.push([parent, child, relationship.parent]);
  }
  addSibling(sibling1, sibling2) {
    this.relationships.push([sibling1, sibling2, relationship.sibling]);
  }
}

let parent = new Person("John");
let child = new Person("Mary");
let sibling = new Person("Bob");

let rels = new Relationships();
rels.addParentAndChild(parent, child);
rels.addSibling(parent, sibling);

// higher level module

class Research {
  constructor(name) {
    this.name = name;
    this.relationships = new Relationships();
  }

  // find all the children of a person's parent
  getChildrenOfParentsOf(person) {
    let children = [];
    let relationships = this.relationships.relationships;
    for (let i = 0; i < relationships.length; i++) {
      let [parent, child, relationship] = relationships[i];
      if (relationship === relationship.parent && parent === person) {
        children.push(child);
      }
    }
    return children;
  }
}
