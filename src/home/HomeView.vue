<template>
  <div class="Home">
    <div class="item">
      <p class="bold">Tuuturu is ambition</p>
      <p>
        We strive for something better. Something more. More in terms of human
        development. We've been blinded by technology instead of using
        technology to improve core human mechanisms like democracy, education,
        and health.
      </p>
    </div>

    <div class="item">
      <p class="bold">Tuuturu is dreaming</p>
      <p>
        Dreaming of accountability and transparency. When politicians makes
        promises, it should be easy to prove or disprove their claims. Even if
        the claims are abstract and hard to measure, it should be possible to
        track progress. If the community makes a change, it should be easy to
        see the consequences.
      </p>
    </div>

    <div class="item">
      <p class="bold">Tuuturu is hope</p>
      <p>
        Too many choices are made based on immediate gratification, be it this
        year's budget, the current election period or to soothe the loud
        minority. Let's give voices to the silent and unavoidable data that can
        silence even the strongest rhetoricians.
      </p>
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
$gap: 200px;

p.bold {
  font-weight: bold;
}

.Home {
  margin-top: 8rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 0 10rem;
}

.item {
  width: 50%;

  background-color: #f5f5f5;
  padding: 4rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.1rem #f5f5f5;

  text-align: left;

  align-self: flex-start;
}

.item:not(:first-child) {
  margin-top: 8rem;
}

.item:nth-child(2n) {
  align-self: flex-end;
}
</style>
