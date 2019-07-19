<template>
  <div class="sticky-table">
    <div class="sticky-table__aside">
      <div class="sticky-table__list">
        <div class="sticky-table__list-item">Корь</div>
        <div class="sticky-table__list-item">Краснуха</div>
        <div class="sticky-table__list-item">Эпидемический паротит</div>
        <div class="sticky-table__list-item">Пневмококковая инфекция</div>
        <div class="sticky-table__list-item">Дифтерия</div>
        <div class="sticky-table__list-item">Коклюш</div>
        <div class="sticky-table__list-item">Столбняк</div>
        <div class="sticky-table__list-item">Полиомиелит</div>
        <div class="sticky-table__list-item">Гемофильная инфекция тип b</div>
        <div class="sticky-table__list-item">Грипп</div>
      </div>
    </div>
    <div class="sticky-table__main">
      <div class="sticky-table__top">
        <div class="sticky-table__top-inner" v-sync-scroll>
          <timeline :items="items"></timeline>
        </div>
      </div>
      <div class="sticky-table__center" ref="grid">
        <div class="sticky-table__center-inner" v-sync-scroll>
          <div class="table">
            <div class="table__row">
              <td class="table__cell">
                <div class="dot"></div>
              </td>
              <td class="table__cell">
                <div class="dot"></div>
              </td>
              <td class="table__cell">
                <div class="from from--light from--prev"></div>
              </td>
              <td class="table__cell">
                <div class="line line--light"></div>
              </td>
              <td class="table__cell">
                <div class="to to--light"></div>
              </td>
            </div>

            <div class="table__row">
              <td class="table__cell">
              </td>
              <td class="table__cell">
                <div class="dot"></div>
              </td>
              <td class="table__cell">
                <div class="from from--dark"></div>
              </td>
              <td class="table__cell">
                <div class="line line--dark"></div>
              </td>
              <td class="table__cell">
                <div class="to to--dark"></div>
              </td>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-table__bottom" v-sync-scroll>
        <div class="sticky-table__bottom-inner">
          <timeline :items="items"></timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adults from '../data/adults.json';
import Timeline from './Timeline.vue';

export default {
  components: { Timeline },
  data() {
    return {
      ref: null,
      items: [1,2,3,4,5]
    }
  },

  mounted() {
  },
}
</script>

<style lang="scss">
  @import "../assets/stylesheets/base/index";

  .sticky-table {
    font-family: $font-regular;
    display: flex;
  }

  .sticky-table__aside {
    flex: 0 0 200px;
  }

  .sticky-table__list {

  }

  .sticky-table__list-item {
    color: $color-text;
    font-size: 16px;
    line-height: 1.5em;
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .sticky-table__top {
    position: sticky;
    top: 0;
    overflow: hidden;
  }

  .sticky-table__top-inner {
    margin-bottom: -17px;
    overflow: auto;
  }

  .sticky-table__center {
    // overflow: auto;
    // margin-bottom: -30px;
    overflow: hidden;
  }

  .sticky-table__center-inner {
    overflow: auto;
    margin-bottom: -18px;
  }

  .sticky-table__bottom {
    position: sticky;
    bottom: 0;
    overflow: auto;
  }

  .testtable td {
    min-width: 120px;
  }

  .sticky-table__bottom-inner {
    position: relative;
    height: 1px;
    visibility: hidden;
    /*height: 20px;*/
    /*overflow: hidden;*/
    & > * {
      position: absolute;
      left: 0;
      height: 1px;
      overflow: hidden;
      /*transform: translateY(100%);*/
    }
  }
</style>
