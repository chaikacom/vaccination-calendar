import Term from './Term';

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
  const years = date.years ? date.years + ' лет' : null;
  const months = date.months ? date.months + ' мес.' : null;
  let days = date.days ? (Array.isArray(date.days) ? date.days.join('-') : date.days) + ' дн.' : null;
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
  return parseTermValue(term.years) + parseTermValue(term.months) / 12 + parseTermValue(term.days) / 365;
}

export function parseTerm(number) {
  return { years: number[0] || 0, months: number[1] || 0, days: number[2] || 0 };
}

export function getAllValues(terms) {
  return terms.reduce((acc, term) => {
    if (term.hasDuration()) {
      acc = acc.concat(getAllValues(term.duration));
    } else {
      acc.push(term);
    }
    return acc;
  }, []);
}

export function parseObject(object) {
  const isArray = Array.isArray(object.items);
  let numbers;
  let label;
  let term;
  if (!isArray) {
    numbers = parseNumber(object.items);
    term = parseTerm(numbers);
    label = parseLabel(term);
  }
  return new Term({
    duration: isArray ? object.items.map(parseItem) : null,
    value: isArray ? null : parseValue(object.items),
    label,
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
