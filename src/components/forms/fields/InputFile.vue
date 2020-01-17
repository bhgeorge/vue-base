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
      :accept="field.acceptFileTypes ? field.acceptFileTypes.join(',') : false"
      :aria-describedby="showError ? `vf-${reference}__error` : false"
      :aria-required="field.required"
      :autocomplete="field.autocomplete || false"
      :id="`vf-${reference}`"
      :multiple="!!field.multipleFiles"
      :name="field.name"
      @blur="validateField"
      @change="handleInputUpload"
      class="c-input__input c-input__input--file"
      ref="input"
      type="file"
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

  methods: {
    handleInputUpload() {
      this.debouncedUpdateFieldValue({ id: this.reference, val: this.$refs.input.files });
    },
  },
};
</script>
