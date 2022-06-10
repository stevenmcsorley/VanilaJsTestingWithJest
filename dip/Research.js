// higher level module
class Research {
  constructor(browser) {
    for (let p of browser.findAllChildrenOf("John")) {
      console.log(p.name);
    }
  }
}

export default Research;
