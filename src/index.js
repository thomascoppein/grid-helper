import GridColumn from './GridColumn';

export default class GridHelper {
  constructor(options) {
    this.dom = document.body;
    this.head = document.head;
    this.options = options || '';
    this.element = '';
    this.styleEl = '';
    this.class = this.options.customClass || 'grid-helper';
    this.gutter = this.options.gutter || '30px';
    this.columns = this.options.columns || 12;
    this.columnsColor = this.options.columnsColor || '#ffcfdf';
    this.zIndex = this.options.zIndex || 9999999;
    this.containerMaxWidth = this.options.containerMaxWidth || '80vw';
    this.containerPadding = this.options.containerPadding || '10vw';

    this.init();
  }

  init() {
    this.createStyleElement();
    this.createWrapper();
    this.createContainer();
    this.createColumns();
    this.createStyles();
    this.appendToDom();
    this.addKeyBindings();
  }

  createStyleElement() {
    this.styleEl = document.createElement('style');
  }

  createWrapper() {
    this.element = document.createElement('div');
    this.element.classList += this.class;
  }

  createContainer() {
    this.container = document.createElement('div');
    this.container.classList += `${this.class}__container`;
    this.element.appendChild(this.container);
  }

  createColumns() {
    for (let index = 0; index < this.columns; index += 1) {
      const column = new GridColumn(this.class, index + 1);
      this.container.appendChild(column.root);
    }
  }

  createStyles() {
    this.styleEl.innerHTML = `
    .${this.class} {
      position: fixed;
      display: block;
      width: auto;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      user-select: none;
      overflow: hidden;
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
      margin-left: -${this.gutter};
      z-index: ${this.zIndex};
    }
    .${this.class}--active {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    .${this.class}__container {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
      max-width: ${this.containerWidth};
      padding: 0 ${this.containerPadding};
      margin: 0 auto;
    }
    .${this.class}__column {
      margin-left: ${this.gutter};
      height: 100%;
      width: ${100 / this.columns}%;
      background-color: ${this.columnsColor};
      opacity: 0.4;
    }
    `;
  }

  appendToDom() {
    this.dom.appendChild(this.element);
    this.head.appendChild(this.styleEl);
  }

  addKeyBindings() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'g') {
        this.toggleState();
      }
    });
  }

  toggleState() {
    if (this.element.classList.contains(`${this.class}--active`)) {
      this.element.classList.remove(`${this.class}--active`);
    } else {
      this.element.classList.add(`${this.class}--active`);
    }
  }
}
