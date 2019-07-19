import Vue from 'vue';
import { debounce } from '../utils';

const bus = new Vue();

const go = debounce((callback) => {
  callback();
}, 0);

export default {
  bind(el) {
    bus.$on('syncscroll', (data) => {
      if (el === data.element) return;
      if (el.scrollLeft === data.offset) return;
      el.scrollLeft = data.offset;
    });

    el.addEventListener('scroll', () => {
      go(() => {
        bus.$emit('syncscroll', { element: el, offset: el.scrollLeft });
      });
    });
  },
};
