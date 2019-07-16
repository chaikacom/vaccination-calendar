function getAgesFromItems(items) {
  let ages = [];
  items.forEach((item) => {
    if (typeof item === 'string') {
      ages.push(item);
    } else if (typeof item === 'number') {
      ages.push(String(item));
    } else if (Array.isArray(item)) {
      item.forEach(i => ages.push(i));
    } else {
      ages = ages.concat(getAgesFromItems(item.items));
    }
  });

  return ages;
}


function parseAge(age) {
  const isFloat = age.indexOf('/') > -1;
  if (!isFloat) return age;

  let years = age.match(/\d+\+/g);
  let months = age.match(/\d+\//g);
  let total = age.match(/\/\d+/g);
  years = years ? years[0].match(/\d+/g).join('') : years;
  months = months ? months[0].match(/\d+/g).join('') : months;
  total = total ? total[0].match(/\d+/g).join('') : total;
  return { years, months, total };
}

function ageValue(age) {
  if (typeof age !== 'object') return age;
  return Number(age.years) + Number(age.months) / Number(age.total);
}

function trimAges(ages, range) {
  const min = ageValue(parseAge(range[0]));
  const max = ageValue(parseAge(range[1]));
  return ages.filter((age) => {
    const value = ageValue(parseAge(age));
    if (value < min || value > max) return false;
    return true;
  });
}

const ages = getAgesFromItems(adults.items);

function makeAges(items) {
  return items.map(item => new Age(item));
}


class Agest {
  constructor(str) {
    this.obj = this.constructor.stringToObj(str);
    this.value = this.constructor.objToVal(this.obj);
  }

  static objToVal(age) {
    if (typeof age !== 'object') return age;
    const value = Number(age.years) + Number(age.months) / Number(age.total);
    return value;
  }

  static stringToObj(age) {
    const isFloat = age.indexOf('/') > -1;
    if (!isFloat) return { years: Number(age), months: null, total: 1 };

    let years = age.match(/\d+\+/g);
    let months = age.match(/\d+\//g);
    let total = age.match(/\/\d+/g);
    years = years ? years[0].match(/\d+/g).join('') : years;
    months = months ? months[0].match(/\d+/g).join('') : months;
    total = total ? total[0].match(/\d+/g).join('') : 1;
    return { years, months, total };
  }
}

