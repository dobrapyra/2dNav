class List {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
  }

  has(element) {
    const index = this.elements.indexOf(element);
    return index > -1;
  }

  remove(element) {
    const index = this.elements.indexOf(element);
    if( index > -1 ) {
      this.elements.splice(index, 1);
    }
  }

  at(index) {
    return this.elements[index];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  sort(compareFn) {
    this.elements.sort(compareFn);
  }
}

export default List;
