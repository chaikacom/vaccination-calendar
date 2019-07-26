import Popover from 'vue-js-popover/src';
import Calendar from '../components/Calendar.vue';

const defaultOptions = {
  componentName: 'vaccination-calendar',
};

export default {
  install(Vue, options = {}) {
    const opts = Object.assign({}, defaultOptions, options);
    Vue.use(Popover, { tooltip: true });
    Vue.component(opts.componentName, Calendar);
  },
};
