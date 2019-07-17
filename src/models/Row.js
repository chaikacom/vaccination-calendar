import Model from './Model';

export default class Row extends Model {
  // constructor() {
  // Object.assign(this, this.parse(data));
  // }

  // parseItems(items) {
  //   let ages = [];
  //   items.forEach((item) => {
  //     if (typeof item === 'string') {
  //       ages.push(item);
  //     } else if (typeof item === 'number') {
  //       ages.push(String(item));
  //     } else if (Array.isArray(item)) {
  //       item.forEach(i => ages.push(i));
  //     } else {
  //       ages = ages.concat(this.parseItems(item.items));
  //     }
  //   });
  //
  //   return ages;
  // }
  //
  // parse(data) {
  //   return {
  //     name: data.name,
  //     items: this.parseItems(data.items).map((i) => {
  //       return { item: i, age: new Age(i) };
  //     }),
  //   };
  // }
}
