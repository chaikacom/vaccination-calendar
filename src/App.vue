<template>
  <div id="app">
    <div class="grid">
      <div class="grid__aside">
        <div class="tbl">
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
            <div class="tbl__cell tbl__cell-header" v-for="item in headers">
              <div class="tbl__header-box">
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>
        <div class="grid__main-center">
          <tbl :headers="headers" :rows="items" :range="range"></tbl>
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
  range: ['0/0/2', '0/8'],
  items: [
    {
      icons: 'WORK_INFECT CHRON CONTACTS',
      name: 'Lorem',
      items: ['0/1', '0/3', '0/0/3-7', '0/1', '0/4.5', { items: '0/5' }],
    },
    {
      name: 'Ipsum asd asd fwe qwqdqw dqw q ',
      items: [['0/0/1', '0/2'], ['0/4', '0/9']],
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
      range: data1.range,
      headers: data1.headers,
      items: data1.items
    }
  },
  mounted() {
  },

  methods: {
    getIcon(code) {
      return ICONS.find(icon => icon.code === code);
    }
  },
};
</script>

<style lang="scss">

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
