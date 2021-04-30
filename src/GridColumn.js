export default class GridColumn {
  constructor(parentClass, index) {
    this.root = '';
    this.parentClass = parentClass || 'grid-helper';
    this.class = `${this.parentClass}__column`;
    this.columnIndex = index || 0;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.root = document.createElement('div');
    this.root.classList += this.class;
    this.root.dataset.columnIndex = this.columnIndex;
  }
}
