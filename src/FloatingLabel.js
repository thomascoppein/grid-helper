export default class FloatingLabel {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.input = this.rootEl.querySelector(
      'input:not([type="checkbox"]), textarea, select, input:not([type="radio"])',
    );
    this.activeState = false;
    this.init();
  }

  init() {
    this.bindEvents();
    if (this.input.length > 0) {
      this.checkState();
    }
  }

  bindEvents() {
    this.input.addEventListener('focus', this.handleFocus);
    this.input.addEventListener('blur', this.handleBlur);
    this.input.addEventListener('change', this.handleFocus);
    this.input.addEventListener('input', this.handleFocus);
  }

  checkState() {
    if (this.input.value !== '') {
      this.setActive();
    }
  }

  setActive() {
    this.rootEl.classList.add('active');
    this.activeState = true;
  }

  removeActive() {
    this.rootEl.classList.remove('active');
    this.activeState = false;
  }

  static handleFocus(e) {
    const { target } = e;
    target.parentNode.classList.add('active');
  }

  static handleBlur(e) {
    const { target } = e;
    if (!target.value) {
      target.parentNode.classList.remove('active');
    }
  }
}

exports.FloatingLabel = FloatingLabel;
