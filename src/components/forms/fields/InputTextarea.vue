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
    <textarea
      :aria-describedby="showError ? `vf-${reference}__error` : false"
      :aria-required="field.required"
      :id="`vf-${reference}`"
      :name="field.name"
      @blur="validateField"
      class="c-input__input c-input__input--textarea"
      v-model="fieldText"
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
    fieldText: {
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
