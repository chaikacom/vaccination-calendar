<template>
  <table class="grid" ref="grid" cellspacing="0"></table>
</template>

<script>
import adults from '../data/adults.json';
import * as d3 from 'd3';
import Parser from '../models/Parser';
import Timeline from '../models/Timeline';

export default {
  data() {
    return {
      timeline: null
    }
  },

  mounted() {
    const parsed = Parser.parseData(adults);
    const dates = parsed.reduce((acc, row) => acc.concat(row.getAllDates()), []);
    const timeline = new Timeline({ dates });

    this.timeline = timeline;

    const table = d3.select('.grid')

//    table.append('tr').selectAll('td').data(timeline.dates).enter().append('td').text((d) => {
//      return Parser.dateToText(d.term);
//    })

    parsed.forEach(row => {
      const tr = table.append('tr')
      let from;
      let to;
      timeline.dates.forEach((date, idx) => {
        let cells = row.cells.filter(cell => {
          if (Array.isArray(cell.date)) {
            return cell.date.find(c => {
              return c.date.value === date.value
            })
          } else {
            return cell.date.value === date.value
          }
        })[0]


        let text;

        if (!cells) {
          if (from) text = '—';
          tr.append('td').text(text);
          return;
        }

        if (Array.isArray(cells.date)) {
          if (date.value === cells.date[0].date.value) {
            from = date.value;
            text = '|—'
          }
          if (date.value === cells.date[1].date.value) {
            from = null;
            text = '—|'
          }
        } else {
          text = '•';
        }

        tr.append('td').text(text);
      })
    })
  },
};
</script>

<style lang="scss">
  .grid td {
    border-bottom: 1px solid #ccc;
    padding: 15px 10px;
    min-width: 80px;
  }
</style>
