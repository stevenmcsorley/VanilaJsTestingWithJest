class Journal {
  constructor() {
    this.entries = {};
  }
  addEntry(text) {
    let count = ++Journal.count;
    this.entries[count] = text;
    return count;
  }
  removeEntry(index) {
    delete this.entries[index];
  }
  countEntries() {
    return Object.keys(this.entries).length;
  }

  getEntries() {
    return this.entries;
  }
}

Journal.count = 0;

export default Journal;
