<template>
  <div class="tbl">
    <div class="tbl__row" v-for="(termRow, rowIndex) in terms">
      <div class="tbl__cell tbl__cell-value tbl__cell-line tbl__cell-container"
           @mouseenter="onRowHoverIn(rowIndex)"
           @mouseleave="onRowHoverOut(rowIndex)"
           v-for="term in termRow">
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
      'headers', 'rows', 'range', 'active', 'activeRow'
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

            const hasHover = this.activeRow !== null;
            const hasActive = this.active !== null;
            let activityClass = '';

            if (hasActive || hasHover) {
              const isActive = hasActive && term.contains(this.active.value);
              const isHovered = hasHover && this.activeRow === rowIndex;
              activityClass = !isActive && !isHovered ? ' inactive ' : '';
            }

            return {
              popover: term.title ? `popover_${rowIndex}${headerIndex}` : null,
              title: term.title,
              className: this.symbolClass(term, header) + activityClass,
            }
          })
        })
      },
    },

    methods: {
      getTerm(row, header) {
        this.term = row.items.find(item => item.contains(header.value));
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
            classList += ext === 'start' ? 'from from--light' : 'to to--light';
          } else {
            classList += 'line line--light'
          };
        } else {
          classList = 'dot';
        }
        return classList;
      },
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

    &.muted {
      color: $color-border;
    }
  }

  .tbl__cell-name-text {
    cursor: pointer;
    &:hover {
      color: $color-arrow-light;
    }
  }

  .tbl__cell-header {
    text-align: center;
    padding: 0 $cell-header-space;
    min-width: $cell-header-width;
    width: $cell-header-width;
    font-size: 14px;
  }

  .tbl__cell-value {
    text-align: center;
    vertical-align: middle;
  }

  .tbl__cell-container {
    width: $cell-normal-width;
    min-width: $cell-normal-width;
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
</style>
