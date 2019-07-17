<template>
  <div id="app">
    <table class="grid" ref="grid"></table>
  </div>
</template>

<script>
import * as d3 from 'd3';
import adults from './data/adults.json';
import Parser from './models/Parser';

export default {
  name: 'app',
  components: {},

  data() {
    return {
      grid: null,
    };
  },

  mounted() {
    const parsed = Parser.parseData(adults);
    console.log(parsed);
//    const grid = d3.select(this.$refs.grid);
    // const timeline = grid.append('tr').selectAll('td').data()
  },
};
</script>
