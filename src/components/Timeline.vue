<template>
  <div class="timeline">
    <div class="timeline__item" v-for="item in items">
      <div class="header-cell">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items']
  }
</script>

<style lang="scss">
  .timeline {
    display: flex;
  }

  .timeline__item {
    flex: 0 0 108px;
    width: 108px;
    padding: 0 9px;
  }
</style>
