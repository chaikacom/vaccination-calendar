<template>
  <div id="app" class="app">
    <vaccination-calendar></vaccination-calendar>
  </div>
</template>

<script>
import 'normalize.css';

export default {
  components: {
    'vaccination-calendar': () => import(/* webpackChunkName: "Calendar" */  './components/Calendar.vue')
  },
};
</script>
