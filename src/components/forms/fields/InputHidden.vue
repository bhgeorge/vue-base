<template>
  <input
    v-model="fieldVal"
    type="hidden"
  >
</template>

<script>
import vuexFormInput from '../mixins/vuexFormInput';

export default {
  mixins: [
    vuexFormInput,
  ],

  computed: {
    fieldVal() {
      return this.field.value;
    },
  },
};
</script>
