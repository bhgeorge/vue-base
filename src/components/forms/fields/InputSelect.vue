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
    <select
      :aria-describedby="showError ? `vf-${reference}__error` : false"
      :aria-required="field.required"
      :autocomplete="field.autocomplete || false"
      :id="`vf-${reference}`"
      :name="field.name"
      @blur="validateField"
      class="c-input__input c-input__input--select"
      v-model="fieldVal"
    >
      <option
        v-for="option in field.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
      <optgroup
        v-for="optgroup in field.optgroups"
        :key="optgroup.text"
        :label="optgroup.text"
      >
        <option
          v-for="option in optgroup.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </optgroup>
    </select>
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
        return this.debouncedUpdateFieldValue({ id: this.reference, val });
      },
    },
  },
};
</script>
