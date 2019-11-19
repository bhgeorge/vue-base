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
              <Icon :type="CLOSE" />
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
import ally from 'ally.js';
import Icon from './Icon';
import { CLOSE } from '@/constants/components/Icon';

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
  },
  data() {
    return {
      initialEl: null,
      handle: null,
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
      this.handle = ally.maintain.tabFocus({
        context: this.$refs.modal,
      });
      window.addEventListener('keydown', this.handleKeyboard);
      this.$refs.modal.focus();
    },
  },
  created() {
    // Remove non-modal content from readability
    this.initialEl = document.activeElement;
    const globalContainer = document.getElementById('site-main');
    document.body.classList.add('no-scroll');
    globalContainer.setAttribute('tabindex', -1);
    globalContainer.setAttribute('aria-hidden', true);
  },
  beforeDestroy() {
    // Return non-modal content to readability
    const globalContainer = document.getElementById('site-main');
    document.body.classList.remove('no-scroll');
    globalContainer.removeAttribute('tabindex');
    globalContainer.removeAttribute('aria-hidden');
    this.handle.disengage();
    window.removeEventListener('keydown', this.handleKeyboard);
    this.initialEl.focus();
  },
};
</script>
