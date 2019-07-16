export default class Age {
  constructor(str) {
    const obj = this.constructor.parseFromString(str);
    Object.assign(this, obj);
    this.value = this.constructor.toValue(obj);
  }

  static toValue(age) {
    if (typeof age !== 'object') return age;
    const value = Number(age.years) + Number(age.months) / 12 + Number(age.days) / 365;
    return value;
  }

  static parseFromString(str) {
    const isFloat = str.indexOf('/') > -1;
    if (!isFloat) return { years: Number(str), months: null, days: null };
    let integer = str.match(/\d+\+/g);
    let fraction = str.match(/\d+\//g);
    let total = str.match(/\/\d+/g);
    integer = integer ? integer[0].match(/\d+/g).join('') : integer;
    fraction = fraction ? fraction[0].match(/\d+/g).join('') : fraction;
    total = total ? total[0].match(/\d+/g).join('') : total;
    const isDays = total > 12;
    return {
      years: Number(integer),
      months: isDays ? null : Number(fraction),
      days: isDays ? Number(fraction) : null,
    };
  }
}
