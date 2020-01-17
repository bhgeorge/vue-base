<template>
  <section class="o-section">
    <div class="o-container">

      <!-- Trigger -->
      <button
        name="showModal"
        type="button"
        class="c-btn c-btn--primary"
        @click="showModal = true"
      >
        Open Modal
      </button>

      <!-- Modal -->
      <Modal
        v-if="showModal"
        labelledby="modal-title"
        @emitClose="showModal = false"
      >
        <!-- Content -->
        <h2
          id="modal-title"
          class="h2 u-font-serif u-m-bot"
        >
          Modal Title
        </h2>
        <p>{{ someLocalVariable }}</p>
        <button
          type="button"
          name="hideModalInText"
          class="c-btn c-btn--secondary u-m-vert"
          @click="showModal = false"
        >
          Close modal
        </button>
      </Modal>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      someLocalVariable: 'foo',
    };
  },
};
</script>
