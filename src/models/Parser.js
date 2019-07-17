import Row from './Row';
import Cell from './Cell';
import Age from './Age';

export default class Parser {
  static parseAge(str) {
    const isFloat = String(str).indexOf('/') > -1;
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

  static parseData(data) {
    return data.items.map(row => this.parseLine(row));
  }

  static parseLine(line) {
    return new Row({
      name: line.name,
      cells: this.parseItems(line.items),
    });
  }

  static parseItems(items) {
    return items.map(item => this.parseItem(item));
  }

  static parseItem(item) {
    let date = null;
    let label = null;
    if (['string', 'number'].indexOf(typeof item) > -1) {
      const term = this.parseAge(item)
      date = new Age({ term, value: this.parseValue(term) });
    } else if (Array.isArray(item)) {
      date = item.map(i => this.parseItem(i));
    } else if (item.items !== undefined) {
      label = item.label || label;
      date = this.parseItems(item.items);
    }
    return new Cell({ label, date });
  }

  static parseValue(age) {
    let date = age;
    if (typeof date !== 'object') {
      date = this.constructor.parseAge(age);
    }
    const value = Number(date.years) + Number(date.months) / 12 + Number(date.days) / 365;
    return Math.round(value * 100) / 100;
  }

  static dateToText(date) {
    const years = date.years ? date.years + ' лет' : null;
    const months = date.months ? date.months + ' мес.' : null;
    const days = date.days ? date.days + ' дн.' : null;
    return [years, months, days].filter(item => !!item).join(' ');
  }
}
