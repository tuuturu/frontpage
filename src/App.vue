<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Header.vue'

export default defineComponent({
  name: 'App',
  components: { Header },
})
</script>

<style scoped lang="scss">
.Header {
  height: 24px;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
