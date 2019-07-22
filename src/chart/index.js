import * as d3 from 'd3';
import drawer from './drawer';
import * as parser from './parser';

const demoData = {
  headers: ['0/0/1', '0/0/3-7', '0/1', { items: '0/2', title: 'lorem' }, '0/3', '0/4.5', '0/6', '0/9', '0/12', ['0/2', '0/10']],
  items: [
    ['0/0/1', '0/1', '0/4.5', '0/9'],
    [['0/0/-1', '0/1'], ['0/9', '2']],
  ],
};

function prepareData(data) {
  const headers = data.headers.map(parser.parseItem);
  console.log(headers);
  return data;
}

const defaults = {
  width: 800,
  height: 400,
  circleRadius: 10,
  lineWidth: 2,
  hSpace: 40,
  vSpace: 20,
  lineHeight: 30,
}

function init(node, data = demoData, options = {}) {
  const opts = Object.assign({}, defaults, options);
  const svg = d3.select(node);
  const ctx = svg.node();

  prepareData(data);

  ctx.style.width = opts.width;
  ctx.style.height = opts.height;

  const colsCount = data.headers.length - 1;
  const rowsCount = data.items.length - 1;
  const x = d3.scaleLinear().domain([0, colsCount]).range([opts.hSpace, opts.width - opts.hSpace]);
  const y = d3.scaleLinear().domain([0, rowsCount]).range([opts.vSpace, opts.height - opts.vSpace]);

  drawer.draw(svg, 'rect', {
    x: 0,
    y: 0,
    width: opts.width,
    height: opts.height,
    fill: '#f7f7f7',
    stroke: 'none',
  });

  svg.append('g').classed('cols', true).selectAll('line').data(data.headers).enter()
    .append('line')
    .attr('stroke', '#ccc')
    .attr('stroke-width', 1)
    .attr('x1', (item, index) => x(index))
    .attr('x2', (item, index) => x(index))
    .attr('y1', y(0))
    .attr('y2', opts.height - opts.vSpace);

  // const headers = svg.selectAll('circle')
  //   .data(data.headers)
  //   .enter()
  //   .append('circle')
  //   .attr('cx', (item, index) => x(index))
  //   .attr('cy', opts.vSpace)
  //   .attr('r', opts.circleRadius)
  //   .attr('fill', 'green');

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

  const headersMax = Math.max.apply(null, data.headers);
  const headersMin = Math.min.apply(null, data.headers);
  let rowCounter = 0;
  const rows = svg
    .selectAll('g.rows')
    .data(data.items)
    .enter()
    .append('g')
    .classed('row', true);

  const elements = rows.selectAll('.empty').data(d => d).enter().append(function(value, index) {

    if (index === 0) rowCounter++;
    // const top = (rowCounter + 1) * opts.lineHeight + opts.vSpace;
    const top = y(rowCounter - 1);
    let element;
    if (Array.isArray(value)) {
      const less = value[0] < headersMin;
      const more = value[1] > headersMax;
      const val1 = less ? headersMin : value[0];
      const val2 = more ? headersMax : value[1];
      const from = x(data.headers.indexOf(val1)) - (less ? opts.hSpace : 0);
      const to = x(data.headers.indexOf(val2)) + (more ? opts.hSpace : 0);
      element = makeLine(from, to, top);
    } else {
      const left = x(data.headers.indexOf(value));
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
    });
  }

  // headers.on('mouseover', function(value) {
  //   this.classList.add('active');
  //   getElementsByValue(value).classed('active', true);
  // }).on('mouseout', function(value) {
  //   this.classList.remove('active');
  //   elements.classed('active', false);
  // });
};

export default {
  init,
};
