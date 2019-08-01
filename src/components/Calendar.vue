<template>
  <div class="chart">
    <div class="persons" ref="persons">
      <div title="Назад" class="persons__arrow-prev" @click="changePerson('prev')" :class="arrowClass('prev')"></div>
      <div title="Вперед" class="persons__arrow-next" @click="changePerson('next')" :class="arrowClass('next')"></div>
      <div class="persons__inner">
        <div class="persons__item"
             @click="age = person.id"
             :class="{ 'persons__item--active': person.id === age }"
             v-for="person in dataset">
          <div class="persons__item-icon">
            <svg class="person" v-if="!IEVersion">
              <use :xlink:href="require(`../assets/images/persons.svg`) + `#${person.id}`"></use>
            </svg>
            <template v-else>
              <img :src="require(`../assets/images/persons/${person.id}.svg`)">
            </template>
          </div>
          <div class="persons__item-label" v-html="person.label"></div>
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="grid__aside">
        <div class="tbl" ref="tableHeight">
          <div class="tbl__row" v-for="(item, idx) in items">
            <div class="tbl__cell tbl__cell-icons">
              <template v-if="item.icons">
                <div class="icons-set icons-set--sm">
                  <img :src="require(`../assets/images/${getIcon(icon).image}.svg`)"
                       class="tbl__cell-icon"
                       :content="getIcon(icon).name"
                       v-tippy
                       v-for="icon in item.icons.split(' ')">
                </div>
              </template>
            </div>
            <div class="tbl__cell tbl__cell-name"
                 :class="{ 'muted': activeRow !== null && activeRow !== idx }"
                 @mouseleave="activeRow = null"
                 @mouseenter="activeRow = idx">
              <div class="tbl__cell-name-inner">
                <span class="tbl__cell-name-text"
                      :content="item.hint.html"
                      v-html="item.name"
                      v-tippy>
                </span>
                <span class="sup" v-if="item.note">{{ item.note }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid__main draggable" ref="main">
        <div class="grid__main-top">
          <div class="tbl tbl--header" ref="headers">
            <div class="tbl__row">
              <div class="tbl__cell tbl__cell-header" v-for="header in headers">
                <div class="tbl__header-box"
                     :class="{ 'active': active && active.value === header.value }"
                     v-html="header.label"
                     @click="select(header)">
                </div>
              </div>
            </div>
            <div class="tbl__row">
              <div class="tbl__cell tbl__cell-line tbl__cell-spacer" v-for="header in headers"></div>
            </div>
          </div>
        </div>
        <div class="grid__main-center">
          <tbl :headers="headers"
               :widths="widths"
               :rows="items"
               :active-row="activeRow"
               @rowchange="activeRow = $event"
               :range="range"
               :active="active"
               ref="table"></tbl>
        </div>
        <div class="grid__main-bottom"></div>
      </div>
    </div>

    <div class="icons-description icons-set">
      <template v-for="icon in icons">
        <img :src="require(`../assets/images/${icon.image}.svg`)"
             content="Ipsum"
             :content="icon.name"
             v-tippy
             class="icons-description__item icons-set">
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

    <div class="notes" :class="{ 'is-open': showNotes }" v-if="data.notes">
      <h3 class="notes__title" @click="showNotes = !showNotes">
        <span>Примечания</span>
        <img src="../assets/images/angle.svg" class="notes__title-icon">
      </h3>
      <ul class="notes-list" v-if="showNotes">
        <li v-for="note in data.notes">
          <span class="notes-list__note sup">{{ note.number }}</span>
          <span class="notes-list__text" v-html="note.text"></span>
        </li>
      </ul>
    </div>

    <a :href="documentLink" target="_blank" class="document">
      <!--<div class="document__icon">-->
        <!--<img src="../assets/images/pdf-icon.svg">-->
      <!--</div>-->
      <div class="document__text">
        Приказ МЗ&nbsp;РФ &#8470;&nbsp;125н от&nbsp;21.03.2014&nbsp;об утверждении национального календаря профилактических прививок и&nbsp;календаря профилактических прививок по&nbsp;эпидемическим показаниям
      </div>
    </a>

    <div class="copyright">
      <span class="copyright__label">Источник:</span>
      <a href="https://www.privivka.ru/?utm_source=link&utm_medium=klinika&utm_campaign=chaika"
         class="copyright__link"
         target="_blank">privivka.ru</a>
    </div>

  </div>
</template>

<script>
  import '../assets/stylesheets/index.scss';
  import '../assets/stylesheets/elements/tippy.scss';
  import * as parser from '../chart/parser';
  import Tbl from './Tbl.vue';
  import dataJSON from '../data/dataset';
  import icons from '../icons';
  import legend from '../legend.json';
  import Hammer from 'hammerjs';
  import ScrollBooster from 'scrollbooster';
  import browserMixin from '../mixins/browser';

  const dataset = dataJSON.map(prepareData);
  const digitsRegexp = /\d+(.\d+)?/g;
  const documentLink = 'http://ivo.garant.ru/#/document/70647158/paragraph/1:0';

  function prepareData(data) {
    let headers = [];
    const rows = data.items.map((row) => {
      return Object.assign({}, row, { items: row.items.map((i) => {
        const item = parser.parseItem(i);
        item.title = parser.parseTitle(item.title, data.titles);
        return item;
      }) })
    });
    if (data.timeline) {
      data.timeline.forEach(item => headers.push(parser.parseItem(item)));
    }
    const range = parser.parseArray(data.range);
    rows.forEach(row => row.items.forEach(term => headers.push(term)));
    headers = parser.getAllValues(headers, range);

    if (data.headerLabels) {
      headers.forEach((header) => {
        const found = data.headerLabels.find(item => item.value === header.original);
        header.label = found ? found.label : header.label;
      })
    }

    return Object.assign({}, data, { range, items: rows, headers });
  }

  export default {
    components: { Tbl },
    mixins: [ browserMixin ],
    data() {
      return {
        highlight: null,
        hammer: null,
        scrollable: null,
        dataset: dataset,
        age: 'baby',
        active: null,
        icons,
        legend,
        activeRow: null,
        showNotes: false,
        widths: [],
        documentLink
      }
    },

    computed: {
      data() {
        return this.dataset.find(item => item.id === this.age);
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
        this.calcWidths();
      }
    },

    mounted() {
      window.addEventListener('load', this.calcHeights);
      window.addEventListener('load', this.calcWidths);
      this.calcHeights();
      this.calcWidths()
      this.hammer = new Hammer(this.$refs.persons, {
        directions: Hammer.DIRECTION_HORIZONTAL
      });
      this.hammer.on('swipe', (e) => {
        const dir = e.direction === Hammer.DIRECTION_LEFT ? 'next' : 'prev';
        this.changePerson(dir);
      });

      const draggable = this.$refs.main;
      this.scrollable = new ScrollBooster({
        viewport: draggable,
        friction: 0.5,
        textSelection: true,
        mode: 'x',
        onUpdate(e) {
          this.viewport.scrollLeft = e.position.x;
        },
      });
    },

    beforeDestroy() {
      this.scrollable.destroy();
      window.removeEventListener('load', this.calcHeights);
    },

    methods: {
      changePerson(dir) {
        const idx = this.dataset.findIndex(data => data.id === this.age);
        const prev = idx - 1;
        const next = idx + 1;
        let to = idx;
        if (dir === 'next') {
          to = next >= this.dataset.length ? idx : next;
        } else {
          to = prev < 0 ? idx : prev;
        }
        this.age = this.dataset[to].id;
      },
      arrowClass(dir) {
        const currentIndex = this.dataset.findIndex(data => data.id === this.age);
        if (dir === 'next') return currentIndex >= (this.dataset.length - 1) ? 'disabled' : '';
        if (dir === 'prev') return currentIndex <= 0 ? 'disabled' : '';
      },
      calcWidths() {
        this.$nextTick(() => {
          this.widths = [].map.call(this.$refs.headers.querySelectorAll('.tbl__cell-header'), (el) => el.offsetWidth);
        });
      },
      calcHeights() {
        this.$nextTick(() => {
          const table = this.$refs.table;
          const ref = this.$refs.tableHeight;
          const heights = [].map.call(ref.querySelectorAll('.tbl__cell-name'), this.calcHeight);
          [].forEach.call(table.$el.querySelectorAll('.tbl__row'), (row, index) => {
            const height = heights[index];
            [].forEach.call(row.querySelectorAll('.tbl__cell'), cell => cell.style.height = height + 'px');
          });
        });
      },
      changeData(key) {
        this.age = key;
      },
      select(item) {
        this.active = this.active && this.active.value === item.value ? null : item;
      },
      calcHeight(element) {
        return element.offsetHeight;
      },
      getIcon(code) {
        return this.icons.find(icon => icon.code === code);
      }
    },
  };
</script>

<style lang="scss">
  @import "../assets/stylesheets/base/index";

  @font-face {
    font-family: 'Gotham Pro';
    src: url(../assets/fonts/gotham_pro/gotham_pro.woff);
    font-weight: normal;
  }

  .body {
    background: #FAFBFC;
    font-family: 'Gotham Pro';
  }

  .chart {
    color: $color-text;
  }

  .chart * {
    box-sizing: border-box;
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
    padding-top: 72px;
  }

  .grid__main {
    overflow: auto;
    flex: 1 1 auto;
  }

  .icons-set {
    display: inline-flex;

    & > img {
      margin-right: 0.4em;
      width: 1em;
      height: 1em;
      font-size: 35px;
      cursor: pointer;

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

  .icons-description {
    margin: 50px 0;
  }

  .person {
    width: 1em;
    height: 1em;
  }

  .persons {
    position: relative;
    @include mq(compact) {
      max-width: 320px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  [class*="persons__arrow-"] {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
    font-size: 25px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6364 23.0068L12.3145 23.6848L23.6564 12.3428L12.3133 0.999676L11.6353 1.67763L22.3005 12.3428L11.6364 23.0068Z' fill='%235C708E'/%3E%3C/svg%3E%0A");
    cursor: pointer;

    @include mq(desktop) {
      display: none;
    }

    &.disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  .persons__arrow-prev {
    left: 0;
    transform: translateY(-50%) scale(-1, 1);
  }

  .persons__arrow-next {
    right: 0;
  }

  .persons__inner {
    display: flex;
    justify-content: space-around;
    margin: 50px 0;
    @include mq(compact) {
      justify-content: center;
    }
  }

  .persons__item {
    cursor: pointer;
    color: $color-icons;
    width: 145px;
    text-align: center;

    &--active {
      color: $color-red;
    }

    @include mq(compact) {
      display: none;

      &--active {
        display: block;
      }
    }
  }

  .persons__item-icon {
    text-align: center;
    margin-bottom: 15px;
    * {
      font-size: 100px;
      vertical-align: top;
    }
  }

  .persons__item-label {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.15em;
    line-height: 1.5em;
  }

  .draggable {
    cursor: grab;
  }

  .notes {
    margin-top: 50px;
    max-width: 840px;
  }

  .notes__title {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin: 20px 0;
    &:hover {
      color: $color-arrow-light;
    }
  }

  .notes__title-icon {
    margin-left: 5px;

    .notes.is-open & {
      transform: scale(1, -1);
    }
  }

  .notes-list {
    font-size: 14px;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 1.25em;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .notes-list__note {
    position: absolute;
    left: 0;
  }

  .notes-list__text {
    display: block;
    padding-left: 15px;
  }

  .document {
    background: #fff;
    border: 1px solid $color-border;
    padding: 40px 60px;
    display: flex;
    flex-wrap: nowrap;
    max-width: 800px;
    border-radius: 4px;
    margin: 50px auto;
    text-decoration: none;
    color: inherit;
    &:hover {
      color: $color-arrow-light;
    }
  }

  .document__icon {
    flex: 0 0 auto;
    margin-right: 30px;
  }

  .document__text {
    flex: 1 1 auto;
  }

  .copyright {
    margin: 50px 0;
  }
  .copyright__link {
    color: $color-arrow-light;
    margin-left: 0.5em;
  }
</style>
