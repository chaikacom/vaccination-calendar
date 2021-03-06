import Term from './Term';
import { plural } from "../utils";

export function parseNumber(string) {
  return string.split('/').map((val) => {
    let number;
    if (val.indexOf('-') > -1) {
      val = val.split('-');
      number = [Number(val[0]), Number(val[1])];
    } else {
      number = Number(val);
    }
    return number;
  });
}

export function parseLabel(date) {
  const years = date.years ? `${date.years} <br/> ${plural(date.years, 'год', 'года', 'лет')}` : null;
  const months = date.months ? `${date.months} <br/> ${plural(date.months, 'месяц', 'месяца', 'месяцев')}` : null;
  let days = date.days ? (Array.isArray(date.days) ? date.days.join('-') : date.days) + ' <br/> ' + plural(date.days, 'день', 'дня', 'дней') : null;
  return [years, months, days].filter(item => !!item).join(' ');
}

export function parseDuration(from, to) {
  return (to - from) / 2 + from;
}

export function parseTermValue(value) {
  if (Array.isArray(value)) {
    return parseDuration(value[0], value[1]);
  } else {
    return value;
  }
}

export function termToValue(term) {
  const value = parseTermValue(term.years) + parseTermValue(term.months) / 12 + parseTermValue(term.days) / 365;
  return Math.round(value * 100) / 100;
}

export function parseTerm(number) {
  return { years: number[0] || 0, months: number[1] || 0, days: number[2] || 0 };
}

export function getAllValues(terms, range) {
  return terms
    .reduce((acc, term) => {
      if (term.hasDuration()) {
        acc = acc.concat(getAllValues(term.duration, range));
      } else {
        acc.push(term);
      }
      return acc;
    }, [])
    .reduce((acc, term) => {
      const isExists = acc.find(t => t.value === term.value);
      if (!isExists) acc.push(term);
      return acc;
    }, [])
    .sort((a, b) => (a.value - b.value))
    .filter(term => range.contains(term.value));
}

export function parseTitle(title, titles = []) {
  const key = title || 'DEFAULT';
  const found = titles.find(item => item.code === key);
  return found ? found.text : (title || null);
}

export function parseObject(object) {
  const isArray = Array.isArray(object.items);
  let numbers;
  let label;
  let term;
  let title = object.title;
  if (!isArray) {
    numbers = parseNumber(object.items);
    term = parseTerm(numbers);
    label = parseLabel(term);
  }
  return new Term({
    epid: object.epid,
    duration: isArray ? object.items.map(parseItem) : null,
    value: isArray ? null : termToValue(term),
    label,
    title,
    original: object.items,
  });
}

export function parseArray(array) {
  return new Term({
    duration: array.map(parseItem),
    original: array,
  });
}

export function parseValue(string) {
  const number = parseNumber(string);
  const term = parseTerm(number);
  const value = termToValue(term);
  const label = parseLabel(term);
  return new Term({ value, label, original: string });
}

export function parseItem(item) {
  const isArray = Array.isArray(item);
  const isObject = typeof item === 'object' && !isArray;
  if (isArray) {
    return parseArray(item);
  } else if (isObject) {
    return parseObject(item);
  } else {
    return parseValue(item);
  }
}
