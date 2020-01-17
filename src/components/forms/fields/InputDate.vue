<template>
  <div
    v-show="field.isVisible"
    :class="classNames"
  >
    <label
      :for="`vf-${reference}`"
      class="c-input__label"
    >
      {{ field.label }}<sup v-if="field.required">*</sup>
    </label>
    <input
      :aria-describedby="showError ? `vf-${reference}__error` : false"
      :aria-required="field.required"
      :autocomplete="field.autocomplete || false"
      :id="`vf-${reference}`"
      :name="field.name"
      @blur="validateField"
      class="c-input__input"
      type="date"
      v-model="fieldVal"
    />
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
        this.debouncedUpdateFieldValue({ id: this.reference, val });
      },
    },
  },
};
</script>
