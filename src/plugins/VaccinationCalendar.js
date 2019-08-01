import VueTippy from 'vue-tippy';
import Calendar from '../components/Calendar.vue';

const defaultOptions = {
  componentName: 'vaccination-calendar',
};

const VaccinationCalendarPlugin = {
  install(Vue, options = {}) {
    const opts = Object.assign({}, defaultOptions, options);
    Vue.component(opts.componentName, Calendar);
    Vue.use(VueTippy, {
      animateFill: false,
      trigger: 'mouseenter',
      maxWidth: 300,
      interactive: true
    });
  },
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VaccinationCalendarPlugin);
}

export default VaccinationCalendarPlugin;
export { VaccinationCalendarPlugin };
