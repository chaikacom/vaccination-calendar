<template>
  <div class="grid">
    <!--<div class="grid__row" v-for="(row, y) in data" :key="y">-->
      <!--<div class="grid__col" v-for="(col, x) in row.positions" :key="x">-->
        <!--{{ col }}-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import adults from '../data/adults.json';
import Row from '../models/Row';

const row = new Row(adults.items[0]);

export default {
  data() {
    return {
      adults,
    };
  },
};
</script>

<style lang="scss">
  .grid {
    display: table;
  }
  .grid__row {
    display: table-row;
  }
  .grid__col {
    display: table-cell;
    min-width: 100px;
    border-bottom: 1px solid #eee;
    padding: 10px;
  }
</style>
