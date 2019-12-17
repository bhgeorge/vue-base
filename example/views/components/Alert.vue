<template functional>
  <section class="o-section">
    <div class="o-container">

      <!-- Global Alerts from Vuex store -->
      <AlertList />

      <!-- Simple -->
      <Alert
        type="success"
        title="Hooray!"
        body="We made a simple alert"
      />

      <!-- With Slot Content -->
      <Alert>
        <p>Slot content will be placed at the end of the alert.</p>
        <button>I'm a button</button>
      </Alert>

    </div>
  </section>
</template>
