<template>
  <div :class="['c-alert', `c-alert--${state}`]">
    <!-- Close Button -->
    <button
      v-if="hasClose"
      class="c-btn c-btn--s c-btn--icon c-btn--close"
      type="button"
      name="closeAlert"
      @click="closeAlert"
    >
      <Icon type="close" />
      <span class="u-visually-hidden">
        Close alert
      </span>
    </button>
    <!-- Title -->
    <h4
      v-if="title"
      :is="titleTag"
      class="c-alert__title">
      {{ title }}
    </h4>
    <!-- Text -->
    <p v-if="text">
      {{ text }}
    </p>
    <!-- Slot -->
    <slot></slot>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon.vue';
import isValidHeadingTag from '@/utils/isValidHeadingTag';

export default {
  props: {
    state: {
      type: String,
      default: 'neutral',
    },

    title: {
      type: String,
      required: false,
    },

    titleTag: {
      type: String,
      default: 'h4',
      validator: (value) => isValidHeadingTag(value),
    },

    text: {
      type: String,
      required: false,
    },

    hasClose: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    Icon,
  },

  data() {
    return {
      timer: null,
    };
  },

  methods: {
    closeAlert() {
      this.$emit('emitClose');
    },
  },

  created() {
    if (this.hasClose) {
      this.timer = setTimeout(() => {
        this.closeAlert();
      }, 2000);
    }
  },

  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
};
</script>
