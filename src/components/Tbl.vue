<template>
  <div class="tbl">
    <div class="tbl__row" v-for="termRow in terms">
      <div class="tbl__cell tbl__cell-value" v-for="term in termRow">
        <template v-if="term">
          <div class="symbol"
               v-popover="{ event: 'hover', name: term.popover }"
               :title="term.title"
               :class="term.className"></div>
          <popover event="hover" v-if="term.popover" :name="term.popover">{{ term.title }}</popover>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'headers', 'rows', 'range', 'active'
    ],

    data() {
      return {
        term: null
      }
    },

    computed: {
      terms() {
        return this.rows.map((row, rowIndex) => {
          return this.headers.map((header, headerIndex) => {
            const term = row.items.find(term => term.contains(header.value));
            if (!term) return null;
            return {
              popover: term.title ? `popover_${rowIndex}${headerIndex}` : null,
              title: term.title,
              className: this.symbolClass(term, header)
            }
          })
        })
      },
    },

    methods: {
      getTerm(row, header) {
        this.term = row.items.find(item => item.contains(header.value));
      },

      symbolClass(term, header) {
        let classList = '';

        if (!term) return classList;

        if (term.hasDuration()) {
          const ext = term.isExt(header.value);
          if (ext) {
            classList += ext === 'start' ? 'from from--light' : 'to to--light';
          } else {
            classList += 'line line--light'
          };
        } else {
          classList = 'dot';
        }
        if (this.active) {
          classList += !term.contains(this.active.value) ? " inactive" : '';
        }
        return classList;
      },
    },
  }
</script>

<style lang="scss">
  @import "../assets/stylesheets/base/index.scss";

  .tbl {
    display: table;
  }
  .tbl__row {
    display: table-row;
  }
  .tbl__cell {
    display: table-cell;
    min-width: 108px;
    max-width: 180px;
  }
  .tbl__cell-name {
    font-size: 16px;
    padding: 10px 40px 10px 0;
    width: 170px;
    min-width: 170px;
    vertical-align: middle;
  }
  .tbl__cell-header {
    text-align: center;
    padding: 0 9px;
    min-width: 90px;
    font-size: 14px;
  }
  .tbl__cell-value {
    background-image: url(../assets/images/dot.jpg);
    background-repeat: repeat-y;
    background-position: 50% 0;
    text-align: center;
    vertical-align: middle;
  }
  .tbl__header-box {
    border: 1px solid $color-border;
    border-radius: 26px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.active {
      background: $color-red;
      color: #fff;
      border-color: $color-red;
    }
  }
  .tbl__cell-icons {
    padding-right: 10px;
    vertical-align: middle;
    text-align: right;
  }

  .legend {
    display: block;
    margin: 0;
    list-style: none;
    padding: 0;
    max-width: 860px;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1em;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .legend__item-symbol {
    flex: 0 0 30px;
    margin-right: 15px;
    text-align: center;
    .dot {
      font-size: 20px;
    }
  }
</style>
