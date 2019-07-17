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
    }, [])
  }
}
