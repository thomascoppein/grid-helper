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
    this.gutterMobile = this.options.gutterMobile || '16px';
    this.columns = this.options.columns || 12;
    this.columnsMobile = this.options.columnsMobile || 4;
    this.columnsColor = this.options.columnsColor || '#ffcfdf';
    this.zIndex = this.options.zIndex || 9999999;
    this.containerMaxWidth = this.options.containerMaxWidth || '80vw';
    this.containerPadding = this.options.containerPadding || '10vw';
    this.containerPaddingMobile = this.options.containerPaddingMobile || '16px';
    this.mobileBreakpoint = this.options.mobileBreakpoint || '375px';

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
    this.createToggleButton();
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
      max-width: ${this.containerMaxWidth};
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
    @media (max-width: ${this.mobileBreakpoint}) {
      .${this.class}__column {
        width: ${100 / this.columnsMobile}%;
        margin-left: ${this.gutterMobile};
      }
      .${this.class}__column:nth-child(n+${this.columnsMobile + 1}) {
        display: none;
      }
      .${this.class}__container {
        padding: 0 ${this.containerPaddingMobile};
      }
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

  createToggleButton() {
    const button = document.createElement('button');
    button.textContent = '⊞';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = this.zIndex;
    button.style.padding = '8px 12px';
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';
    button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    button.style.transition = 'background-color 0.3s';
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    });
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    });
    button.addEventListener('click', () => this.toggleState());
    this.dom.appendChild(button);
  }
}
