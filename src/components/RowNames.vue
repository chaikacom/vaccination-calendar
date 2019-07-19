<template>
  <div class="row-names">
    <div class="row-names__item" v-for="name in names">
      {{ name }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['names'],

    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .row-names {

  }

  .row-names__item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border-bottom: 0;
    }
  }
</style>
