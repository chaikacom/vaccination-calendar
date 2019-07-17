<template>
  <div id="app">
    <table class="grid" ref="grid"></table>
  </div>
</template>

<script>
import * as d3 from 'd3';
import adults from './data/adults.json';
import Parser from './models/Parser';
import Timeline from './models/Timeline';

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
    const dates = parsed.reduce((acc, row) => acc.concat(row.getAllDates()), []);
    const timeline = new Timeline({ dates });

    const table = d3.select('.grid')

    table.append('tr').selectAll('td').data(timeline.dates).enter().append('td').text((d) => {
      return Parser.dateToText(d.term);
    })
  },
};
</script>
