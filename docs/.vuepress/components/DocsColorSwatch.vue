<template>
  <div class="c-docs-color-swatch">
    <div class="c-docs-color-swatch__color" :style="{ background: hex }"></div>
    <p>{{ colorHue }} - {{ colorShade }}</p>
  </div>
</template>

<script>
export default {
  props: {
    hex: {
      type: String,
      required: true,
      // TODO: Add validation
    },
    colorHue: {
      type: String,
      required: true,
    },
    colorShade: {
      type: String,
      default: 'Base',
    },
  },
};
</script>

<style lang="scss">
  .c-docs-color-swatch {
    &__color {
      padding: 1rem;
    }
  }
</style>
