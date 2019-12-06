<template lang="html">
  <svg :class="classNames" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" role="presentation">
    <path :d="path" fill="currentColor" />
  </svg>
</template>

<script>
import paths from './icons.json';

export default {
  props: {
    type: {
      type: String,
      required: true,
    },

    modifiers: {
      type: Array,
      required: false,
    },
  },

  computed: {
    classNames() {
      let classNames = ['o-icon'];
      if (this.modifiers) {
        classNames = classNames.concat(this.modifiers);
      }
      return classNames;
    },

    path() {
      return paths[this.type];
    },
  },
};
</script>
