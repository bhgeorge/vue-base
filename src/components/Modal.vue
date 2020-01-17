<template>
  <portal :to="portal">
    <transition name="u-trans-pop-in">
      <div
        @click.self="closeModal"
        class="o-modal"
        ref="dialog"
        role="dialog"
        tabindex="-1"
      >
        <div
          :aria-describedby="!!describedby ? describedby : false"
          :aria-labelledby="!!labelledby ? labelledby : false"
          :class="classNames"
          ref="document"
          role="document"
        >
          <div class="o-modal__container">
            <button
              v-if="hasClose"
              @click="closeModal"
              class="c-btn c-btn--icon c-btn--close"
              tabindex="0"
            >
              <Icon type="close" />
              <span class="u-visually-hidden">Close modal</span>
            </button>
            <div class="u-p-xl u-bg-theme-bg">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
import { maintain } from 'ally.js';
import { Portal } from 'portal-vue';
import Icon from '@/components/icons/Icon.vue';

export default {
  props: {
    modifiers: {
      type: Array,
      required: false,
    },

    hasClose: {
      type: Boolean,
      default: true,
    },

    portal: {
      type: String,
      default: 'modal',
    },

    describedby: {
      type: String,
      required: false,
    },

    labelledby: {
      type: String,
      required: false,
    },
  },

  components: {
    Icon,
    Portal,
  },

  data() {
    return {
      initialEl: null,
      tabFocusHandle: null,
      disabledHandle: null,
    };
  },

  computed: {
    classNames() {
      if (this.modifiers && this.modifiers.length > 0) {
        return ['o-modal__dialog'].concat(this.modifiers);
      }
      return ['o-modal__dialog'];
    },
  },

  methods: {
    closeModal() {
      if (this.hasClose) {
        this.$emit('emitClose');
      }
    },

    handleKeyboard(event) {
      // Close on escape if user can close
      if (this.hasClose) {
        if (event.key === 'Escape' || event.keyCode === 27) {
          this.closeModal();
        }
      }
    },
  },

  created() {
    // Remove non-modal content from readability
    this.initialEl = document.activeElement;
    document.body.classList.add('no-scroll');
  },

  mounted() {
    window.addEventListener('keydown', this.handleKeyboard);
    window.requestAnimationFrame(() => {
      this.tabFocusHandle = maintain.tabFocus({
        context: this.$refs.dialog,
      });
      this.disabledHandle = maintain.disabled({
        filter: this.$refs.dialog,
      });
      this.$refs.document.focus();
    });
  },

  beforeDestroy() {
    // Return non-modal content to readability
    this.tabFocusHandle.disengage();
    this.disabledHandle.disengage();
    document.body.classList.remove('no-scroll');
    window.removeEventListener('keydown', this.handleKeyboard);
    this.initialEl.focus();
  },
};
</script>
