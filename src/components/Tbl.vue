<template>
  <div class="tbl">
    <div class="tbl__row" v-for="(termRow, rowIndex) in terms">
      <div class="tbl__cell tbl__cell-value tbl__cell-line tbl__cell-container"
           @mouseenter="onRowHoverIn(rowIndex)"
           @mouseleave="onRowHoverOut(rowIndex)"
           :style="{ 'min-width': minWidth(offset) }"
           v-for="(terms, offset) in termRow">
        <div class="value-wrapper" v-if="terms">
          <template v-for="term in terms">
            <div class="symbol"
                 v-popover="{ event: 'click', name: term.popover }"
                 :class="term.className">
            </div>
            <popover event="hover"
                     v-if="term.popover"
                     v-html="term.title"
                     :name="term.popover">
            </popover>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'headers', 'rows', 'range', 'active', 'activeRow', 'widths'
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
            const terms = this.getTerms(row, header); // row.items.find(term => term.contains(header.value));

            if (!terms.length) return null;

            return terms.map((term, idx) => this.processTerm(term, header, rowIndex, headerIndex, idx));
          })
        })
      },
    },

    methods: {
      processTerm(term, header, rowIndex, headerIndex, idx) {
        const hasHover = this.activeRow !== null;
        const hasActive = this.active !== null;
        let activityClass = '';

        if (hasActive || hasHover) {
          const isActive = hasActive && term.contains(this.active.value);
          const isHovered = hasHover && this.activeRow === rowIndex;
          activityClass = !isActive && !isHovered ? ' inactive ' : '';
        }

        const mainClass = this.symbolClass(term, header);
        const colorClass = term.epid ? 'light' : 'dark';

        return {
          popover: term.title ? `popover_${rowIndex}${headerIndex}_${idx}` : null,
          title: term.title,
          className: `${mainClass} ${colorClass} ${activityClass}`,
        }
      },
      getTerms(row, header) {
        return row.items.filter(term => term.contains(header.value));
      },

      onRowHoverIn(index) {
        this.$emit('rowchange', index);
      },

      onRowHoverOut() {
        this.$emit('rowchange', null);
      },

      symbolClass(term, header) {
        let classList = '';

        if (!term) return classList;

        if (term.hasDuration()) {
          const ext = term.isExt(header.value);
          if (ext) {
            classList += ext === 'start' ? 'from iline' : 'to arrow';
          } else {
            classList += 'line iline'
          };
        } else {
          classList = 'dot';
        }
        return classList;
      },
      minWidth(offset) {
        return this.widths[offset] + 'px';
      }
    },
  }
</script>

<style lang="scss">
  @import "../assets/stylesheets/base/index.scss";

  $cell-normal-width: 108px;
  $cell-header-space: 9px;
  $cell-header-width: $cell-normal-width - $cell-header-space * 2;

  .tbl {
    display: table;
  }

  .tbl--header {
    min-width: 500px;
  }

  .tbl__row {
    display: table-row;
  }

  .tbl__cell {
    display: table-cell;

    &.highlighted {
      background: #f7f7f7;
    }
  }

  .tbl__cell-name {
    font-size: 16px;
    padding: 10px 40px 10px 0;
    width: 170px;
    min-width: 170px;
    vertical-align: middle;
  }

  .tbl__cell-name-text {
    cursor: pointer;
    &:hover {
      color: $color-arrow-light;
    }
  }

  .tbl__cell-name-inner {
    *.muted > & {
      color: $color-border;
    }
  }

  .tbl__cell-header {
    text-align: center;
    padding: 0 $cell-header-space;
    min-width: $cell-header-width;
    //width: $cell-header-width;
    font-size: 14px;
  }

  .tbl__cell-value {
    text-align: center;
    vertical-align: middle;
  }

  .tbl__cell-container {
    // width: $cell-normal-width;
    // min-width: $cell-normal-width;
  }

  .tbl__cell-spacer {
    height: 20px;
  }

  .tbl__cell-line {
    background-image: url(../assets/images/dot.svg);
    background-repeat: repeat-y;
    background-position: 50% 0;
  }

  .tbl__header-box {
    border: 1px solid $color-border;
    border-radius: 26px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: 100px;
    margin-left: auto;
    margin-right: auto;

    &.active {
      background: $color-red;
      color: #fff;
      border-color: $color-red;
    }
  }
  .tbl__cell-icons {
    vertical-align: middle;
    text-align: right;

    .icons-set {
      margin-right: 10px;
    }
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

  .value-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
