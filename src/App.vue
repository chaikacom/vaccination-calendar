<template>
  <div id="app" class="app">
    <button @click="changeData(key)" v-for="(age, key) in dataset">{{ key }}</button>

    <div class="persons">
      <div class="persons__item" v-for="person in persons">
        <div class="persons__item-icon">
          <svg class="person">
            <use :xlink:href="require(`./assets/images/persons.svg`) + `#${person.icon}`"></use>
          </svg>
        </div>
        <div class="persons__item-label">{{ person.label }}</div>
      </div>
    </div>

    <div class="grid">
      <div class="grid__aside">
        <div class="tbl" ref="tableHeight">
          <div class="tbl__row" v-for="item in items">
            <div class="tbl__cell tbl__cell-icons">
              <template v-if="item.icons">
                <div class="icons-set icons-set--sm">
                  <img :src="require(`./assets/images/${getIcon(icon).image}.svg`)"
                       :title="getIcon(icon).name"
                       class="tbl__cell-icon"
                       v-for="icon in item.icons.split(' ')">
                </div>
              </template>
            </div>
            <div class="tbl__cell tbl__cell-name">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="grid__main">
        <div class="grid__main-top">
          <div class="tbl" ref="headers">
            <div class="tbl__cell tbl__cell-header" v-for="header in headers">
              <div class="tbl__header-box"
                   :class="{ 'active': active && active.value === header.value }"
                   @click="select(header)">
                {{ header.label }}
              </div>
            </div>
          </div>
        </div>
        <div class="grid__main-center">
          <tbl :headers="headers"
               :rows="items"
               :range="range"
               :active="active"
               ref="table"></tbl>
        </div>
        <div class="grid__main-bottom"></div>
      </div>
    </div>

    <div class="icons-description icons-set">
      <template v-for="icon in icons">
        <img :src="require(`./assets/images/${icon.image}.svg`)"
             :title="icon.name"
             v-popover.left="{ name: icon.code }"
             class="icons-description__item icons-set">
        <popover :name="icon.code">{{ icon.name }}</popover>
      </template>
    </div>

    <ul class="legend">
      <li class="legend__item" v-for="line in legend">
        <div class="legend__item-symbol">
          <div class="symbol" :class="line.symbol"></div>
        </div>
        <div class="legend__item-text" v-html="line.text"></div>
      </li>
    </ul>

    <tooltip></tooltip>

  </div>
</template>

<script>
import 'normalize.css';
import './assets/stylesheets/index.scss';
import chart from './chart';
import * as parser from './chart/parser';
import Tbl from './components/Tbl.vue';
import dataJSON from './data/dataset';
import icons from './icons';
import legend from './legend.json';

const dataset = Object.entries(dataJSON).reduce((acc, [key, value]) => {
  acc[key] = prepareData(value);
  return acc;
}, {});


function prepareData(data) {
  let headers = [];
  const rows = data.items.map((row) => {
    return {
      icons: row.icons,
      name: row.name,
      items: row.items.map(parser.parseItem),
    }
  });

  const range = parser.parseArray(data.range);

  rows.forEach((row) => {
    row.items.forEach(term => headers.push(term));
  })
  headers = parser.getAllValues(headers, range);
  return { range: range, headers, items: rows };
}

export default {
  name: 'app',
  components: { Tbl },
  data() {
    return {
      dataset: dataset,
      age: 'baby',
      active: null,
      icons,
      legend,
      persons: [
        { icon: 'baby', label: 'Дети до года' },
        { icon: 'toddler', label: 'С года до трех' },
        { icon: 'pupil', label: 'Дошкольники и школьники' },
        { icon: 'adult', label: 'Взрослые' },
        { icon: 'old', label: 'Старше 55 лет' },
      ]
    }
  },

  computed: {
    data() {
      return this.dataset[this.age];
    },
    range() {
      return this.data.range;
    },
    headers() {
      return this.data.headers;
    },
    items() {
      return this.data.items;
    },
  },

  watch: {
    data() {
      this.active = null;
      this.calcHeights();
    }
  },

  mounted() {
    window.addEventListener('load', this.calcHeights);
    this.calcHeights();
  },

  beforeDestroy() {
    window.removeEventListener('load', this.calcHeights);
  },

  methods: {
    calcHeights() {
      this.$nextTick(() => {
        const table = this.$refs.table;
        const ref = this.$refs.tableHeight;
        const heights = [].map.call(ref.querySelectorAll('.tbl__cell-name'), this.calcHeight);
        table.$el.querySelectorAll('.tbl__row').forEach((row, index) => {
          const height = heights[index];
          row.querySelectorAll('.tbl__cell').forEach(cell => cell.style.height = height + 'px');
        });
      })
    },
    changeData(key) {
      this.age = key;
    },
    select(item) {
      this.active = this.active && this.active.value === item.value ? null : item;
    },
    calcHeight(element) {
      const style = getComputedStyle(element);
      const regexp = /\d+/g;
      const top = style.paddingTop.match(regexp).join();
      const bottom = style.paddingBottom.match(regexp).join();
      const height = style.height.match(regexp).join();
      return Number(top) + Number(height) + Number(bottom);
    },
    getIcon(code) {
      return this.icons.find(icon => icon.code === code);
    }
  },
};
</script>

<style lang="scss">
  @import "./assets/stylesheets/base/index";

  @font-face {
    font-family: 'Gotham Pro';
    src: url(./assets/fonts/gotham_pro/gotham_pro.woff);
    font-weight: normal;
  }

  .app {
    color: $color-text;
  }

  .body {
    font-family: 'Gotham Pro';
  }

  .terms {
    display: flex;
    justify-content: space-between;
    width: 720px;
    padding: 0 40px;
  }
  .terms__item {
  }

  .grid {
    display: flex;
  }

  .grid__aside {
    padding-top: 52px;
  }

  .grid__main {
    overflow: auto;
  }

  .icons-set {
    display: inline-flex;

    & > img {
      margin-right: 0.4em;
      width: 1em;
      height: 1em;
      font-size: 35px;

      &:last-child {
        margin-right: 0;
      }
    }

    &--sm {
      & > img {
        font-size: 25px;
      }
    }
  }

  .person {
    width: 1em;
    height: 1em;
  }

  .persons {
    display: flex;
    justify-content: space-between;
  }
  .persons__item {
    cursor: pointer;
    color: $color-icons;
    width: 145px;
    text-align: center;
    &:hover {
      color: $color-red;
    }
  }
  .persons__item-icon {
    text-align: center;
    margin-bottom: 20px;
    * {
      font-size: 100px;
      vertical-align: top;
    }
  }
  .persons__item-label {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
</style>
