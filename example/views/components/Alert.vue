<template>
  <section class="o-section">
    <div class="o-container">

      <!-- Global Alerts from Vuex store -->
      <AlertList />

      <!-- Simple -->
      <div class="u-m-vert">
        <Alert
          state="success"
          title="Hooray!"
          text="We made a simple alert"
        />
      </div>

      <!-- With Slot Content -->
      <Alert state="error">
        <p>Slot content will be placed at the end of the alert.</p>
        <button
          class="c-btn c-btn--s c-btn--primary u-m-top-xs"
          @click="triggerGlobalAlert"
        >
          Trigger Global Alert
        </button>
      </Alert>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    triggerGlobalAlert() {
      this.count += 1;

      this.$store.dispatch('alerts/addAlert', {
        state: 'warning',
        title: 'Global alert here!',
        text: `You've triggered ${this.count} alerts.`,
      });
    },
  },
};
</script>
