<template>
  <div
    v-show="field.isVisible"
    :class="classNames"
  >
    <input
      :aria-describedby="showError ? `vf-${reference}__error` : false"
      :aria-required="field.required"
      :id="`vf-${reference}`"
      :name="field.name"
      @blur="validateField"
      class="c-input__checkbox"
      type="checkbox"
      value="true"
      v-model="fieldVal"
    >
    <label
      :for="`vf-${reference}`"
      class="c-input__label c-input__label--checkbox"
    >
      {{ field.label }}
    </label>
    <p
      :id="`vf-${reference}__error`"
      class="c-input__error"
      v-if="showError"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<script>
import vuexFormInput from '../mixins/vuexFormInput';

export default {
  mixins: [
    vuexFormInput,
  ],

  computed: {
    fieldVal: {
      get() {
        return this.field.value;
      },
      set(val) {
        this.updateFieldValue({ id: this.reference, val });
      },
    },
  },
};
</script>
