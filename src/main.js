import Vue from 'vue';
import Popover from 'vue-js-popover';
import App from './App.vue';
import SyncScroll from './directives/sync-scroll';

Vue.use(Popover, { tooltip: true });
Vue.config.productionTip = false;

Vue.directive('sync-scroll', SyncScroll);

new Vue({
  render: h => h(App),
}).$mount('#app');
