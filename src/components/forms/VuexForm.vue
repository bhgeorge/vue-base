<template>
  <form
    @submit.prevent="handleSubmit"
    :aria-describedby="`${formStructure.id}__required-msg`"
  >
    <p
      :id="`${formStructure.id}__required-msg`"
      class="u-font-xs u-m-bot"
    >
      * Required Fields
    </p>
    <Alert
      v-show="!isValid"
      :aria-labelledby="`${formStructure.id}__error__title`"
      :id="`${formStructure.id}__error`"
      ref="errorBox"
      state="error"
      tabindex="-1"
      title="There are issues with the following fields:"
      titleTag="h3"
    >
      <div class="c-typography">
        <ul class="u-font-xs">
          <li
            v-for="error in formErrors"
            :key="error.id"
          >
            <button
              type="button"
              class="c-btn--text c-link--white"
              @click="focusField(error.id)"
            >
              {{ error.label }}
            </button>
          </li>
        </ul>
      </div>
    </Alert>
    <!-- Groups -->
    <div
      v-for="(group, index) in groups"
      :key="index"
      :class="{ 'c-card--outline': group.title }"
      class="c-card"
    >
      <h4
        v-if="group.title"
        class="c-card__title"
      >
        {{ group.title }}
      </h4>
      <!-- Fields -->
      <div class="c-card__body">
        <div
          v-for="field in group.fields"
          :key="field.id"
          class="u-m-bot"
        >
          <component
            :is="field.component"
            :reference="field.id"
            :formId="formStructure.id"
            ref="field"
          />
        </div>
      </div>
    </div>
    <div class="c-card__body">
      <button
        class="c-btn c-btn--primary"
        name="formSubmit"
        type="submit"
      >
        {{ formStructure.submitText || 'Submit' }}
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import formsStore from './store';

export default {
  props: {
    formStructure: {
      type: Object,
      required: true,
      validator: (value) => {
        if (!value.id || typeof value.id !== 'string') {
          return false;
        }
        if (!value.fields || !Array.isArray(value.fields) || value.fields.length === 0) {
          return false;
        }
        return true;
      },
    },
  },

  data() {
    return {
      hasBeenValidated: false,
    };
  },

  computed: {
    isValid() {
      if (!this.hasBeenValidated) {
        return true;
      }
      return this.$store.getters['forms/isFormValid'](this.formStructure.id);
    },

    formErrors() {
      if (this.isValid) {
        return [];
      }
      return this.$store.getters['forms/compileFormErrors'](this.formStructure.id);
    },

    groups() {
      return this.formStructure.groups
        ? this.formStructure.groups
        : [{ fields: this.formStructure.fields }];
    },
  },

  methods: {
    ...mapActions('forms', ['registerForm']),

    focusField(id) {
      document.getElementById(`vf-${id}`).focus();
    },

    handleSubmit() {
      this.hasBeenValidated = true;
      // Run validation on all non-validated fields
      this.$refs.field.forEach((field) => {
        // Revalidate each field to ensure that we hit child fields
        field.validateField(true);
      });

      if (this.isValid) {
        const data = this.$store.getters['forms/compileFormData'](this.formStructure.id);
        this.formStructure.onSubmit(data);
        return;
      }

      window.requestAnimationFrame(() => {
        this.$refs.errorBox.$el.focus();
      });
    },
  },

  created() {
    if (!this.$store.state.forms) {
      this.$store.registerModule('forms', formsStore);
    }
    this.registerForm(this.formStructure);
  },
};
</script>
