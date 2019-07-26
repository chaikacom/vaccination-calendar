import Vue from 'vue';
import App from './App.vue';
import VaccinationCalendar from './plugins/VaccinationCalendar';

// import SyncScroll from './directives/sync-scroll';
// Vue.directive('sync-scroll', SyncScroll);

Vue.config.productionTip = false;

Vue.use(VaccinationCalendar);

new Vue({
  render: h => h(App),
}).$mount('#app');
