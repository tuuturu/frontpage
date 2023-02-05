<template>
  <div class="frame">
    <h1>Tuuturu</h1>

    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Header',
}
</script>

<style lang="scss">
h1 {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;

  color: #333;
  font-weight: 400;
}

a {
  font-weight: 600;

  color: #222222;
  text-decoration: underline;
  margin-right: 1rem;
}
a:hover {
  color: #474747;
}
a:active {
  color: #0a0a0a;
}

.frame {
  padding: 1rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
