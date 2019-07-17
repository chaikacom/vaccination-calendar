import Model from './Model';

export default class Cell extends Model {
  defaults() {
    return {
      label: null,
      date: null,
    };
  }
}
