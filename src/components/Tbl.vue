<template>
  <div class="tbl">
    <div class="tbl__row" v-for="row in rows">
      <div class="tbl__cell tbl__cell-value" v-for="header in headers">
        <div class="symbol" :class="symbolClass(row, header)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'headers', 'rows', 'range', 'active'
    ],

    methods: {
      symbolClass(row, header) {
        let classList = '';
        const t =  row.items.find(term => term.contains(header.value));

        if (!t) return classList;

        if (t.hasDuration()) {
          const ext = t.isExt(header.value);
          if (ext) {
            classList += ext === 'start' ? 'from from--light' : 'to to--light';
          } else {
            classList += 'line line--light'
          };
        } else {
          classList = 'dot';
        }
        if (this.active) {
          classList += !t.contains(this.active.value) ? " inactive" : '';
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
  }
  .tbl__cell-icon {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
</style>
