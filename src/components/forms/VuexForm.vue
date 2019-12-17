<template>
  <form
    @submit.prevent="handleSubmit"
    :aria-describedby="`${formStructure.id}__required-msg`"
  >
    <p
      :id="`${formStructure.id}__required-msg`"
      class="u-font-xs"
    >
      * Required Fields
    </p>
    <div
      v-show="!isValid"
      :aria-labelledby="`${formStructure.id}__error__title`"
      :id="`${formStructure.id}__error`"
      class="c-alert c-alert--error"
      ref="errorBox"
    >
      <h3
        :is="formStructure.errorHeadingTag || 'h3'"
        :id="`${formStructure.id}__error__title`"
        class="c-alert__title"
      >
        There are issues with the following fields:
      </h3>
      <div class="c-typography">
        <ul class="u-font-xs">
          <li
            v-for="error in formErrors"
            :key="error.id"
          >
            <button
              type="button"
              class="c-btn--text"
              @click="focusField(error.id)"
            >
              {{ error.label }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-for="field in formStructure.fields"
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
    <button
      class="c-btn c-btn--primary"
      name="formSubmit"
      type="submit"
    >
      {{ formStructure.submitText || 'Submit' }}
    </button>
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
  },

  methods: {
    ...mapActions('forms', ['registerForm']),

    focusField(id) {
      document.getElementById(`vf-${id}`).focus();
    },

    handleSubmit() {
      this.hasBeenValidated = true;
      if (this.isValid) {
        const data = this.$store.getters['forms/compileFormData'](this.formStructure.id);
        this.formStructure.onSubmit(data);
        return;
      }

      // Run validation on all non-validated fields
      this.$refs.field.forEach((field) => {
        if (!field.field.hasValidated) {
          field.validateField();
        }
      });
      this.$refs.errorBox.focus();
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
