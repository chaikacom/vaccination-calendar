<template>
  <div id="app">
    <div class="grid">
      <div class="grid__aside">
        <div class="tbl" ref="tableHeight">
          <div class="tbl__row" v-for="item in items">
            <div class="tbl__cell tbl__cell-icons">
              <template v-if="item.icons">
                <img :src="require(`./assets/images/${getIcon(icon).image}.svg`)"
                     :title="getIcon(icon).name"
                     class="tbl__cell-icon"
                     v-for="icon in item.icons.split(' ')">
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
  </div>
</template>

<script>
import 'normalize.css';
import './assets/stylesheets/index.scss';
import chart from './chart';
import * as parser from './chart/parser';
import Tbl from './components/Tbl.vue';

const SYM_DOT      = 1;
const SYM_LINE     = 2;

const ICONS = [
  { code: 'WORK_INFECT', image: 'work', name: 'Работающие в условиях, связанных с риском заражения' },
  { code: 'LIVE_TERR', image: 'location', name: 'Проживающие на территориях с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'VISIT_TERR', image: 'travel', name: 'Выезжающие на территории с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'WAR', image: 'army', name: 'Лица, подлежащие призыву на военную службу' },
  { code: 'CONTACTS', image: 'infection', name: 'Контактные лица в очагах инфекции или при угрозе возникновения вспышки' },
  { code: 'CHRON', image: 'health', name: 'При наличии хронических заболеваний или других состояний здоровья' },
];


const demoData1 = {
  range: ['0/2', '0/8'],
  items: [
    {
      icons: 'WORK_INFECT CHRON CONTACTS',
      name: 'Lorem',
      items: ['0/2', '0/3', '0/4.5', '0/7', { items: '0/5' }],
    },
    {
      name: 'Ipsum asd asd fwe qwqdqw dqw q ',
      items: [['0/1', '0/4'], ['0/5', '0/9']],
    }
  ],
};

function prepareData(data) {
  let headers = [];
  const rows = data.items.map((row) => {
    return {
      icons: row.icons,
      name: row.name,
      items: row.items.map(parser.parseItem)
    }
  });

  const range = parser.parseArray(data.range);

  rows.forEach((row) => {
    row.items.forEach(term => headers.push(term));
  })
  headers = parser.getAllValues(headers, range);
  return { range: range, headers, items: rows };
}

const data1 = prepareData(demoData1);

export default {
  name: 'app',
  components: { Tbl },
  data() {
    return {
      active: null,
      range: data1.range,
      headers: data1.headers,
      items: data1.items
    }
  },
  mounted() {
    window.addEventListener('load', e => {
      const table = this.$refs.table;
      const ref = this.$refs.tableHeight;
      const heights = [].map.call(ref.querySelectorAll('.tbl__cell-name'), this.calcHeight);
      console.log(heights);
      table.$el.querySelectorAll('.tbl__row').forEach((row, index) => {
        const height = heights[index];
        row.querySelectorAll('.tbl__cell').forEach(cell => cell.style.height = height + 'px');
      })
    })
  },

  methods: {
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
      return ICONS.find(icon => icon.code === code);
    }
  },
};
</script>

<style lang="scss">
  @font-face {
    font-family: 'Gotham Pro';
    src: url(./assets/fonts/gotham_pro/gotham_pro.woff);
    font-weight: normal;
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

  }

</style>
