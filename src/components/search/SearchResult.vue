<template>
  <li
    :class="{ 'active': active }"
    class="c-search-result o-list-bare__item o-cover-link u-d-flex u-f-align-center"
  >
    <div
      v-if="result.icon"
      class="u-f-1-auto u-p-left-s"
    >
      <Icon
        :type="result.icon"
        :modifiers="['o-icon--l', 'u-font-vert-mid']"
      />
    </div>
    <div class="u-p-xs">
      <button
        class="c-search-result__name o-cover-link__item"
        name="selectResult"
        tabindex="-1"
        type="button"
        @click="emitSelect"
      >
        {{ result.name }}
      </button>
      <p
        v-if="result.desc"
        class="u-font-xs u-c-theme-text-alt u-m-left-xs"
      >
        {{ result.desc }}
      </p>
    </div>
  </li>
</template>

<script>
import Icon from '@/components/icons/Icon.vue';

export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },

    result: {
      type: Object,
      required: true,
    },
  },

  components: {
    Icon,
  },

  methods: {
    emitSelect() {
      this.$emit('emitSelect', this.result);
    },
  },
};
</script>
