export default class Model {
  defaults() {
    return {};
  }

  constructor(options = {}) {
    this.mergeOptions(options);
  }

  mergeOptions(options) {
    Object.assign(this, this.defaults(), options);
  }
}
