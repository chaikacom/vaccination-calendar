import Model from './Model';

export default class Timeline extends Model {
  constructor(options) {
    super(options);
    this.dates = this.prepareDates(this.dates);
  }

  prepareDates() {
    return this.dates.reduce((acc, date) => {
      const isExists = acc.find(d => d.value === date.value);
      if (!isExists) acc.push(date);
      return acc;
    }, []).sort((a, b) => {
      return a.value < b.value ? -1 : 0;
    });
  }
}
