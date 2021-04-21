/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-named-as-default
import FloatingLabel from './FloatingLabel';

export default class FloatingLabels {
  constructor(options) {
    this.options = options;
    this.selector = this.options.selector;
    this.elements = this.getElements();
    this.init();
  }

  init() {
    this.initFloatingLabels();
  }

  getElements() {
    return document.querySelectorAll(this.selector);
  }

  initFloatingLabels() {
    [...this.elements].forEach((el) => {
      const instance = new FloatingLabel(el);
    });
  }
}
