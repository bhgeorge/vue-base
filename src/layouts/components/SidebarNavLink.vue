<template>
  <li
    :is="htmlTag"
    class="o-cover-link c-nav-link"
    :class="{ 'active': isActive }"
  >
    <div class="c-nav-link__content">
      <!-- Icon -->
      <Icon
        v-if="icon"
        :type="icon"
        :modifiers="['c-nav-link__icon', 'u-m-right-xs', 'u-f-1-0']"
      />
      <!-- Link -->
      <router-link
        v-if="route"
        :to="route"
        class="o-cover-link__item c-nav-link__link"
      >
        {{ text }}
      </router-link>
      <!-- Button -->
      <button
        v-else
        type="button"
        :name="buttonName"
        class="o-cover-link__link c-nav-link__link"
        @click="emitClick"
      >
        {{ text }}
      </button>
    </div>
    <div class="c-nav-link__item-active-bg"></div>
    <!-- Subnav slot -->
    <slot/>
  </li>
</template>

<script>
import getMachineSafeStr from '@/utils/getMachineSafeStr';

export default {
  props: {
    htmlTag: {
      type: String,
      default: 'li',
    },

    icon: {
      type: String,
      default: '',
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    route: {
      type: Object,
      default: null,
    },

    text: {
      type: String,
      required: true,
    },
  },

  computed: {
    buttonName() {
      return getMachineSafeStr(this.text);
    },
  },

  methods: {
    emitClick() {
      this.$emit('emitClick');
    },
  },
};
</script>
