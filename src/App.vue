<template>
  <div id="app">
    <div class="grid">
      <div class="grid__head">
        <div class="grid__head-cell" v-if="data.icons"></div>
        <div class="grid__head-cell"></div>
        <div class="grid__head-cell" v-for="item in head">
          <div class="grid__head-box" v-html="item"></div>
        </div>
      </div>

      <div class="grid__body">
        <div class="grid__row">
          <div class="grid__body-cell grid__body-icons" v-if="data.icons"></div>
          <div class="grid__body-cell grid__row-spacer"></div>
          <div class="grid__body-cell grid__body-value grid__row-spacer" v-for="item in head"></div>
        </div>
        <div class="grid__row" v-for="row in rows">
          <div class="grid__body-cell grid__body-icons" v-if="data.icons">
            <template v-if="row.icons">
              <img :src="require(`./assets/images/${icon.image}.svg`)"
                   :alt="icon.name"
                   :title="icon.name"
                   v-for="icon in getIcons(row.icons)">
            </template>
          </div>
          <div class="grid__body-cell grid__body-name">
            {{ row.name }}
            <span class="sup" v-if="row.note">{{ row.note }}</span>
          </div>
          <div class="grid__body-cell grid__body-value" v-for="item in getItems(row.items)">
            <span :class="getCellClassName(item)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'normalize.css';
import './assets/stylesheets/index.scss';
import data from './data/adults-simple.json';

const ICONS = [
  { code: 'WORK_INFECT', image: 'work', name: 'Работающие в условиях, связанных с риском заражения' },
  { code: 'LIVE_TERR', image: 'location', name: 'Проживающие на территориях с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'VISIT_TERR', image: 'travel', name: 'Выезжающие на территории с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями' },
  { code: 'WAR', image: 'army', name: 'Лица, подлежащие призыву на военную службу' },
  { code: 'CONTACTS', image: 'infection', name: 'Контактные лица в очагах инфекции или при угрозе возникновения вспышки' },
  { code: 'CHRON', image: 'health', name: 'При наличии хронических заболеваний или других состояний здоровья' },
]

export default {
  name: 'app',
  components: {},

  data() {
    return {
      data,
    };
  },

  computed: {
    head() {
      return this.data.timeline;
    },
    rows() {
      return this.data.items;
    },
  },

  mounted() {
  },

  methods: {
    getItems(items) {
      return items.split(' ');
    },
    getCellClassName(item) {
      let className;
      if (item === 'o') className = 'dot';
      if (item === 'ld') className = 'line line--dark';
      if (item === 'll') className = 'line line--light';
      if (item === 'fl') className = 'from from--light';
      if (item === 'fd') className = 'from from--dark';
      if (item === 'tl') className = 'to to--light';
      if (item === 'td') className = 'to to--dark';
      if (item === 'fpd') className = 'from from--prev from--dark';
      if (item === 'fpl') className = 'from from--pref from--light';
      if (item === 'tnl') className = 'to to--next to--light';
      if (item === 'tnd') className = 'to to--next to--dark';
      return className;
    },

    getIcons(icons) {
      const items = icons.split(' ').reduce((acc, code) => {
        const icon = ICONS.find(i => i.code === code);
        if (!icon) return;
        acc.push({ image: icon.image, name: icon.name });
        return acc;
      }, []);
      return items;
    }
  },
};
</script>

<style lang="scss">
  @import "./assets/stylesheets/base/index";

  $cell-width: 90px;

  .sup {
    position: absolute;
    vertical-align: super;
    font-size: 0.7em;
    margin-left: 0.5em;
    margin-top: -0.15em;
  }

  .grid {
    display: table;
    font-family: $font-regular;
    color: $color-text;
  }
  .grid__head {
    display: table-row;
  }
  .grid__head-cell {
    display: table-cell;
    width: $cell-width;
    text-align: center;
    vertical-align: top;
    padding: 0 9px;
  }

  .grid__head-box {
    border: 1px solid $color-border;
    border-radius: 25px;
    height: 50px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    line-height: 1em;
  }

  .grid__row-spacer {
    height: 25px;
    padding: 0;
  }

  .grid__body {
    display: table-row-group;
  }

  .grid__row {
    display: table-row;
  }

  .grid__body-cell {
    display: table-cell;
    vertical-align: middle;
    width: $cell-width;
    padding: 8px 0;
  }

  .grid__body-icons {
    white-space: nowrap;
    padding-right: 15px;
    text-align: right;
    & * {
      margin-right: 7px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .grid__body-name {
    padding-right: 10px;
  }

  .grid__body-value {
    background-image: url('./assets/images/dot.jpg');
    background-position: 50% 0;
    background-repeat: repeat-y;
    text-align: center;
  }
</style>
