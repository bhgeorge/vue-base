<template functional>
  <section class="o-section">
    <div class="o-container">
      <h1>vue-base</h1>
      <div class="o-grid o-grid--12 o-grid--6-6@m">
        <div
          v-for="link in links"
          :key="link.route"
          class="u-p u-b u-b-gray-light"
        >
          <router-link :to="{ name: link.route }">
            {{ link.text }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          route: 'alert',
          text: 'Alert',
        },
        {
          route: 'forms',
          text: 'Forms',
        },
        {
          route: 'Icon',
          text: 'Icon',
        },
        {
          Modal: 'Modal',
          text: 'modal',
        },
      ],
    };
  },
};
</script>
