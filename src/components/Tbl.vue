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
      'headers', 'rows', 'range'
    ],

    methods: {
      symbolClass(row, header) {
        const t =  row.items.find(term => term.contains(header.value));
        if (!t) return '';
        if (t.hasDuration()) {
          const ext = t.isExt(header.value);
          if (ext) {
            let classList = 'start' ? 'from from--light' : 'to to--light';
            return classList;
          } else {
            if (t.from.value < this.range.from.value) return 'from from--light from--prev';
            if (t.to.value > this.range.to.value) return 'to to--light to--next';
            return 'line line--light'
          };
        }
        return 'dot';
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
    padding: 10px 0;
    min-width: 108px;
    max-width: 180px;
  }
  .tbl__cell-name {
    padding-right: 40px;
    width: 170px;
    vertical-align: middle;
  }
  .tbl__cell-header {
    text-align: center;
    padding: 0 9px;
    min-width: 90px;
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
