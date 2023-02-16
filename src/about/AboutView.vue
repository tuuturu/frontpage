<template>
  <div class="AboutView">
    <div class="frame">
      <h2>Mission statement</h2>
      <p>
        Convince the world of the importance of accountability and prove how
        transparency is the key to a better world.
      </p>

      <h2>Origin</h2>
      <p>
        Tuuturu is Maori and means "real". To be real is to be honest. It is the
        first mechanism of many to ensure accountability. History has shown that
        even "core" values can be changed over time, so in the spirit of "trust
        is good, making sure is better", we've established the main core value
        as the name of the ambition.
      </p>

      <h2>Core values</h2>
      <ul>
        <li>
          <span class="bold">Open</span>
          <p>
            - The only way to ensure accountability is to make sure that
            everyone can see what is going on. Doubt breeds distrust, and
            distrust breeds corruption.
          </p>
        </li>

        <li>
          <span class="bold">Accepting</span>
          <p>
            - Differences gives us an edge. We are all equal when we sleep and
            in our ambition to make a better world. The rest is just details.
          </p>
        </li>

        <li>
          <span class="bold">Bold</span>
          <p>
            - We dare to experiment, and when we do, we observe and understand
            the consequences. Fucking up is celebrated, because without the
            mistake, we wouldn't be able to learn from it.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView',
})
</script>

<style lang="scss" scoped>
.AboutView {
  display: flex;
  justify-content: center;
}

.frame {
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: #f5f5f5;
  padding: 4rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.3rem 0.1rem #f5f5f5;

  text-align: left;
}

span.bold {
  font-weight: bold;
}

p {
  line-height: 2rem;
}

li:not(:first-child) {
  margin-top: 1rem;
}

li > p {
  display: inline;
}
</style>
