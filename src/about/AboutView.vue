<template>
  <div class="AboutView">
    <div class="frame">
      <h2>Mission statement</h2>
      <p class="mission-statement">
        Pave the way for a more data driven world.
      </p>

      <h2>Objectives</h2>
      <div class="objectives">
        <Objective
          title="Become a trusted name in the fight for better world"
          description="For trust, there has to be effect"
        />
        <Objective
          title="Make key data available to everyone"
          description="People should be able to make informed decisions"
        />
      </div>

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
            the result. Fucking up is celebrated, for without the mistake, we
            would be robbed of resulting information.
          </p>
        </li>

        <li>
          <span class="bold">Strength</span>
          <p>
            - Strength is protecting the weak. No one is strong in every sense
            and we all need help from time to time. When you find yourself in a
            position of strength, look towards those who are not and use the
            strength to lift them up.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Objective from './components/Objective.vue'

export default defineComponent({
  name: 'AboutView',
  components: { Objective },
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

p.mission-statement {
  width: 100%;

  font-style: italic;
  text-align: center;
}

li:not(:first-child) {
  margin-top: 1rem;
}

li > p {
  display: inline;
}

.objectives {
  width: 100%;
  padding: 0 2rem;
  margin: 2rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.Objective {
  width: 32%;
}

@media only screen and (max-width: 768px) {
  .frame {
    width: 90%;
  }
}
</style>
