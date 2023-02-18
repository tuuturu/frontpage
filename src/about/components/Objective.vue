<template>
  <div class="Objective">
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Objective',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.Objective {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  box-shadow: 0 0 0.3rem 0.1rem #e0e0e0;
  border-radius: 0.3rem;
}

h2,
p {
  width: 100%;
  text-align: center;
}
</style>
