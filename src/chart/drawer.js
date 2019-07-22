const defaultStyle = {
  stroke: 'green',
  strokeWidth: 2,
  fill: 'none',
}

function drawElement(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function draw(container, tagName, styles = {}) {
  const style = Object.assign({}, defaultStyle, styles);
  const element = container.append(tagName);
  Object.keys(style).forEach((key) => {
    element.attr(key, style[key]);
  });
  return element;
}

function rect(x, y, w, h, style = {}) {
  const styles = Object.assign({}, defaultStyle, style);
  return drawElement('rect');
}

function circle() {

}

function line() {

}

export default { rect, circle, line, draw };
