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
          <div class="terms">
            <div class="terms__item"></div>
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

const ICONS = [
  { code: 'WORK_INFECT', image: 'work', name: 'Работающие в условиях, связанных с риском заражения' },
  { code: 'LIVE_TERR', image: 'location', name: 'Проживающие на территориях с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'VISIT_TERR', image: 'travel', name: 'Выезжающие на территории с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'WAR', image: 'army', name: 'Лица, подлежащие призыву на военную службу' },
  { code: 'CONTACTS', image: 'infection', name: 'Контактные лица в очагах инфекции или при угрозе возникновения вспышки' },
  { code: 'CHRON', image: 'health', name: 'При наличии хронических заболеваний или других состояний здоровья' },
];


export default {
  name: 'app',
  components: {},
  mounted() {
    chart.init('#svg');
  },
};
</script>
