export default class Term {
  defaults() {
    return {
      duration: null,
      value: null,
      label: null,
      text: null,
      from: null,
      to: null,
    };
  }

  constructor(options) {
    Object.assign(this, this.defaults(), options);
    if (Array.isArray(this.duration)) {
      this.from = this.duration[0];
      this.to = this.duration[1];
    }
  }

  hasDuration() {
    return Array.isArray(this.duration);
  }

  contains(value) {
    if (this.hasDuration()) {
      return this.from.value >= value && this.to.value <= value;
    } else {
      return this.value === value;
    }
  }
}
