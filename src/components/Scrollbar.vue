<template>
  <div class="scrollbar">
    <div class="scrollbar__button" :style="{ marginLeft: offset + '%', width: length + '%' }"></div>
  </div>
</template>

<script>
  export default {
    props: ['offset', 'length']
  }
</script>

<style lang="scss">
  .scrollbar {
    background: #eee;
  }

  .scrollbar__button {
    height: 10px;
    background: #ccc;
    width: 100px;
    &:hover {
      background: #7a7a7a;
    }
  }
</style>
