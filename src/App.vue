<template>
  <div id="app">
    <div class="grid">
      <div class="grid__aside">
        <div class="names">
          <div class="name"></div>
        </div>
      </div>
      <div class="grid__main">
        <div class="grid__main-top">
          <div class="terms" ref="headers">
            <div class="terms__item" v-for="item in headers">
              {{ item.label }}
            </div>
          </div>
        </div>
        <div class="grid__main-center"></div>
        <div class="grid__main-bottom"></div>
      </div>
    </div>
      <svg id="svg"></svg>
  </div>
</template>

<script>
import 'normalize.css';
import './assets/stylesheets/index.scss';
import chart from './chart';
import * as parser from './chart/parser';

const ICONS = [
  { code: 'WORK_INFECT', image: 'work', name: 'Работающие в условиях, связанных с риском заражения' },
  { code: 'LIVE_TERR', image: 'location', name: 'Проживающие на территориях с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'VISIT_TERR', image: 'travel', name: 'Выезжающие на территории с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'WAR', image: 'army', name: 'Лица, подлежащие призыву на военную службу' },
  { code: 'CONTACTS', image: 'infection', name: 'Контактные лица в очагах инфекции или при угрозе возникновения вспышки' },
  { code: 'CHRON', image: 'health', name: 'При наличии хронических заболеваний или других состояний здоровья' },
];


const demoData1 = {
  // headers: ['0/0/1', '0/0/3-7', '0/1', { items: '0/2', title: 'lorem' }, '0/3', '0/4.5', '0/6', '0/9', '0/12', ['0/2', '0/10']],
  items: [
    ['0/0/1', '0/0/3-7', '0/1', '0/4.5', { items: '0/9' }],
    [['0/0/0', '0/2'], ['0/9', '2']],
  ],
};

const demoData2 = {
  items: [
    ['0/0/5', '1'],
//    ['0/2', '0/5']
  ]
}

function prepareData(data) {
  let headers = [];
  const rows = data.items.map((row) => {
    return row.map(parser.parseItem);
  });
  rows.forEach((row) => {
    row.forEach(term => headers.push(term));
  })
  headers = parser.getAllValues(headers);
  return { headers, items: rows };
}

const data1 = prepareData(demoData1);
const data2 = prepareData(demoData2);

export default {
  name: 'app',
  components: {},
  data() {
    return {
      headers: data1.headers,
    }
  },
  mounted() {
    const diagram =  chart.init('#svg', data1);
//    setTimeout(() => {
//      diagram.drawRows(data2);
//    }, 3000)
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
</style>
