import * as d3 from 'd3';
import drawer from './drawer';

const defaults = {
  width: 800,
  height: 400,
  circleRadius: 10,
  lineWidth: 2,
  hSpace: 40,
  vSpace: 20,
  lineHeight: 30,
}

function init(node, data, options = {}) {
  const opts = Object.assign({}, defaults, options);
  const svg = d3.select(node);
  const ctx = svg.node();

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

  function drawRowElements(term, headers, index) {
    const top = y(index);
    if (term.hasDuration()) {
      const from = headers.findIndex(header => header.value === term.from.value);
      const to = headers.findIndex(header => header.value === term.to.value);
      return makeLine(x(from), x(to), top);
    } else {
      const pos = headers.findIndex(header => header.value === term.value);
      return makeDot(x(pos), top);
    }
  }

  function drawRows(data) {
    let rowCounter = 0;

    // data.items.forEach((dataRow) => {
    //   const items = svg.selectAll('.row').data(dataRow);
    //   items.enter().append('g').classed('row', true);
    // });

    const rows = svg.selectAll('g.row').data(data.items)
    // rows.exit().remove();
    // rows
      .enter().append('g').classed('row', true);

    const els = rows.selectAll('circle')
      .data((row, index) => {
        return row.map((term) => ({ term, index }));
      })
      .enter()
      .append(({ term, index }) => {
        return drawRowElements(term, data.headers, index)
      });

    // console.log(els);

    //   .append((d) => {
    //   console.log(this, arguments);
    //   return makeDot(0, 0);
    // });

    // const items = rows.enter().selectAll('.term').data(d => d)
    // items.exit().remove();
    // items.enter().append((term, index) => {
    //   index === 0 && rowCounter++;
    //   return drawRowElements(term, data.headers, rowCounter);
    // }).classed('term', true);

    // rows.each((row) => {
    //   const newrows = rows.selectAll('.term').data(row);
    //   console.log(row);
    //   newrows.exit().remove();
    //   newrows
    //     .enter().append((term, index) => {
    //       index === 0 && rowCounter++;
    //       return drawRowElements(term, data.headers, rowCounter);
    //     }).classed('term', true);
    // });

    // const newrows = rows.selectAll('.term').data(data.items);

    // console.log(newrows);

    // newrows.exit().remove();
    // newrows
    //   .enter().append((term, index) => {
    //   index === 0 && rowCounter++;
    //   return drawRowElements(term, data.headers, rowCounter);
    // }).classed('term', true);
  }

  drawRows(data);

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

  return { data, svg, drawRows };
};

export default {
  init,
};
