export const debounce = function(callback, delay = 50) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, arguments);
    }, delay);
  };
}

export function plural(number, one, two, five) {
  const isFloat = (number % 1) !== 0;
  if (isFloat) return two;
  let n = Math.abs(number);
  n %= 100;
  if (n > 5 && n < 20) {
    return five;
  }
  n %= 10
  if (n === 1) return one;
  if (n >= 2 && n <= 4) return two;
  return five;
}

export default { debounce, plural };
