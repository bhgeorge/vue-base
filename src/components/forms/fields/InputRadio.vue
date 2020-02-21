<template>
  <fieldset
    v-show="field.state !== states.HIDDEN"
    :class="classNames"
    :id="`vf-${reference}`"
    tabindex="-1"
  >
    <legend class="c-input__label">{{ field.label }}<sup v-if="field.required">*</sup></legend>
    <!-- Repeat Inputs -->
    <div
      v-for="option in field.options"
      :key="option.value"
      class="c-input__group"
    >
      <input
        :aria-describedby="field.state === states.ERROR ? `vf-${reference}__error` : false"
        :aria-required="field.required"
        :id="`vf-${reference}__${option.value}`"
        :name="field.name"
        :value="option.value"
        @blur="validateField()"
        class="c-input__radio"
        type="radio"
        v-model="fieldVal"
      >
      <label
        :for="`vf-${reference}__${option.value}`"
        class="c-input__label c-input__label--radio"
      >
        {{ option.text }}
      </label>
    </div>
    <p
      :id="`vf-${reference}__error`"
      class="c-input__error"
      v-if="field.state === states.ERROR"
    >
      {{ field.errorText }}
    </p>
  </fieldset>
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
