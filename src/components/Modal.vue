<template lang="html">
  <portal :to="portal">
    <transition
      @after-enter="handleEnter"
      name="u-trans-pop-in"
    >
      <div
        @click.self="closeModal"
        class="o-modal"
        ref="modal"
        role="dialog"
        tabindex="-1"
      >
        <div
          :class="classNames"
          role="document"
        >
          <div class="o-modal__container">
            <button
              v-if="hasClose"
              @click="closeModal"
              class="o-modal__close"
              tabindex="0"
            >
              <Icon type="close" />
              <span class="u-visually-hidden">Close modal</span>
            </button>
            <div class="u-p-xl u-bg-theme-background">
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
// TODO: Include this into vue when we extend this component
import { Portal } from 'portal-vue';
import Icon from './Icon';

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

    handleEnter() {
      this.tabFocusHandle = maintain.tabFocus({
        context: this.$refs.modal,
      });
      this.disabledHandle = maintain.disabled({
        filter: this.$refs.modal,
      });
      window.addEventListener('keydown', this.handleKeyboard);
      this.$refs.modal.focus();
    },
  },

  created() {
    // Remove non-modal content from readability
    this.initialEl = document.activeElement;
    document.body.classList.add('no-scroll');
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