<template>
  <a :href="link" target="_blank" rel="noopener">
    <span>{{ text }}</span>
    <span class="u-visually-hidden">(opens in a new tab)</span>
    <Icon
      type="newWindow"
      :modifiers="['u-m-left-xxs', 'u-font-vert-mid', 'o-icon--s']"
    />
  </a>
</template>

<script>
import Icon from '@/components/icons/Icon.vue';

export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  components: {
    Icon,
  },
};
</script>
