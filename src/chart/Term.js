export default class Term {
  defaults() {
    return {
      duration: null,
      value: null,
      label: null,
      title: null,
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

  isExt(value) {
    if (this.from.value === value) return 'start';
    if (this.to.value === value) return 'end';
    return false;
  }

  contains(value) {
    if (this.hasDuration()) {
      return value >= this.from.value && value <= this.to.value;
    } else {
      return this.value === value;
    }
  }
}
