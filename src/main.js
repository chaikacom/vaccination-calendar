import Vue from 'vue';
import App from './App.vue';
import SyncScroll from './directives/sync-scroll';

Vue.config.productionTip = false;

Vue.directive('sync-scroll', SyncScroll);

new Vue({
  render: h => h(App),
}).$mount('#app');
