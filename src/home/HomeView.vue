<template>
  <div class="Home">
    <div class="item item-left">
      <p>Tuuturu is an ambition.</p>
    </div>
    <div class="item item-right">
      <p>It is a dream.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {},
})
</script>

<style scoped lang="scss">
$gap: 250px;

.Home {
  margin: 0 8px;
  margin-top: $gap;
  height: 100%;

  display: grid;
  grid-column: 800px 800px;
  column-gap: 64px;
  grid-row: 800px 800px;
  grid-row-gap: $gap;
}

.item {
  min-height: 700px;

  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.1rem #f5f5f5;
}

.item-left {
  grid-column: 1 / 2;
  grid-column-start: 1;
  grid-row: 1;
}

.item-right {
  grid-column: 2 / 3;
  grid-row-start: 2;
  grid-row: 2;
}
</style>
