<template functional>
  <div :class="['c-alert', `c-alert--${type}`]">
    <!-- Close Button -->
    <button
      v-if="hasClose"
      class="c-alert__close"
      type="button"
      name="closeAlert"
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
import Icon from '@/components/icons/Icon';
import isValidHeadingTag from '@/utils/isValidHeadingTag';

export default {
  props: {
    type: {
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

    hasClose: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    Icon,
  },
};
</script>
