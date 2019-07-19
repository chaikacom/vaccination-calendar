<template>
  <div id="app">
    <svg id="svg"></svg>
  </div>
</template>

<script>
import 'normalize.css';
import './assets/stylesheets/index.scss';
// import data from './data/adults-simple.json';
import * as d3 from 'd3';

const ICONS = [
  { code: 'WORK_INFECT', image: 'work', name: 'Работающие в условиях, связанных с риском заражения' },
  { code: 'LIVE_TERR', image: 'location', name: 'Проживающие на территориях с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'VISIT_TERR', image: 'travel', name: 'Выезжающие на территории с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'WAR', image: 'army', name: 'Лица, подлежащие призыву на военную службу' },
  { code: 'CONTACTS', image: 'infection', name: 'Контактные лица в очагах инфекции или при угрозе возникновения вспышки' },
  { code: 'CHRON', image: 'health', name: 'При наличии хронических заболеваний или других состояний здоровья' },
];

const data = {
  headers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  items: [
    [4, 5, 9],
    [[1, 150]],
  ],
};

export default {
  name: 'app',
  components: {},
  mounted() {
    const svg = d3.select('#svg');
    const ctx = svg.node();

    ctx.style.width = 500;
    ctx.style.height = 500;

    const width = ctx.scrollWidth;
    const count = data.headers.length;
    const x = d3.scaleLinear().domain([0, count]).range([20, width - 20]);

    const headers = svg.selectAll('circle')
      .data(data.headers).enter()
      .append('circle')
      .attr('cx', (item, index) => {
        return x(index);
      })
      .attr('cy', 20)
      .attr('r', 10)
      .attr('fill', 'green');

    function makeDot(x, y) {
      const element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      element.setAttributeNS(null, 'cx', x);
      element.setAttributeNS(null, 'cy', y);
      element.setAttributeNS(null, 'r', 10);
      element.setAttributeNS(null, 'stroke', 'green');
      element.setAttributeNS(null, 'stroke-width', 2);
      element.setAttributeNS(null, 'fill', 'none');
      return element;
    }

    function makeLine(x1, x2, top) {
      const element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      element.setAttributeNS(null, 'x1', x1);
      element.setAttributeNS(null, 'x2', x2);
      element.setAttributeNS(null, 'y1', top);
      element.setAttributeNS(null, 'y2', top);
      element.setAttributeNS(null, 'stroke', 'green');
      element.setAttributeNS(null, 'stroke-width', 2);
      return element;
    }

    const rows = svg
      .selectAll('g')
      .data(data.items)
      .enter()
      .append('g');

    const headersMax = Math.max.apply(null, headers.data());
    const headersMin = Math.min.apply(null, headers.data());
    let rowCounter = 0;
    const elements = rows.selectAll('.empty').data(d => d).enter().append(function(value, index) {
      if (index === 0) rowCounter++;
      const top = (rowCounter + 1) * 30;
      let element;
      if (Array.isArray(value)) {
        const less = value[0] < headersMin;
        const more = value[1] > headersMax;
        const val1 = less ? headersMin : value[0];
        const val2 = more ? headersMax : value[1];
        const from = x(headers.data().indexOf(val1)) - (less ? 40 : 0);
        const to = x(headers.data().indexOf(val2)) + (more ? 40 : 0);
        element = makeLine(from, to, top);
      } else {
        const left = x(headers.data().indexOf(value));
        element = makeDot(left, top);
      }
      return element;
    });

    function getElementsByValue(value) {
      return elements.filter(item => {
        let bool;
        if (Array.isArray(item)) {
          bool = value >= item [0] && value <= item[1];
        } else {
          bool = item === value;
        }
        return bool;
      })
    }

    headers.on('mouseover', function(value) {
      this.classList.add('active');
      getElementsByValue(value).classed('active', true);
    }).on('mouseout', function(value) {
      this.classList.remove('active');
      elements.classed('active', false);
    });

  },
};
</script>

<style lang="scss">
  @import "./assets/stylesheets/base/index";

  .active {
    fill: $color-arrow-light;
    stroke: $color-arrow-light;
  }
</style>
