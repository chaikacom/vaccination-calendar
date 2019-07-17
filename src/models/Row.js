import Model from './Model';

export default class Row extends Model {
  getAllDates() {
    return this.cells.reduce((acc, cell) => {
      if (Array.isArray(cell.date)) {
        cell.date.forEach(i => acc.push(i.date));
      } else {
        acc.push(cell.date);
      }
      return acc;
    }, []);
  }

  getDateByValue(value) {
    return this.cells.find(cell => {
      let date = false;
      console.log(cell);
      if (Array.isArray(cell.date)) {
        return 1;
        // date = cell.date.find(d => d.value === value) || false;
      } else {
        return 1;
        // date = date.value === value;
      }
      // console.log(date)
      // return date;
    });
  }
}
