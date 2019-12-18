<template>
  <fieldset v-show="field.isVisible">
    <legend class="c-input__legend u-m-bot-xs">
      {{ field.label }}<sup v-if="field.required">*</sup>
    </legend>
    <div
      v-for="pair in pairs"
      :key="pair.key"
      class="u-m-bot-xs"
    >
      <div class="o-grid o-grid--6-6">
        <InputText :reference="pair.key" />
        <InputText :reference="pair.val" />
      </div>
    </div>
    <button
      type="button"
      class="c-btn--ui"
      @click="addNewItem"
    >
      <Icon type="add" /> {{ field.addNewText }}
    </button>
  </fieldset>
</template>

<script>
import { mapActions } from 'vuex';
import Icon from '@/components/icons/Icon.vue';
import getUniqueId from '@/utils/getUniqueId.js';
import InputText from './InputText.vue';
import { isMachineSafeStr } from '../utils/validations.js';
import vuexFormInput from '../mixins/vuexFormInput.js';

export default {
  props: {
    formId: {
      type: String,
      required: true,
    },
  },

  mixins: [
    vuexFormInput,
  ],

  components: {
    Icon,
    InputText,
  },

  data() {
    return {
      pairs: [],
    };
  },

  methods: {
    ...mapActions('forms', ['registerFields']),

    addNewItem() {
      const idA = getUniqueId();
      const fieldA = {
        id: idA,
        name: 'option_key',
        label: 'Option Name',
        required: true,
        computeValue: false,
        ...this.field.fieldA,
      };

      const idB = getUniqueId();
      const fieldB = {
        id: idB,
        name: 'option_val',
        label: 'Option Value',
        isValid: true,
        computeValue: false,
        validation: [
          isMachineSafeStr,
        ],
        ...this.field.fieldB,
      };

      this.registerFields({ form: this.formId, fields: [fieldA, fieldB] });
      this.pairs.push({ key: idA, val: idB });
      this.updateFieldValue({ id: this.reference, val: this.pairs.slice(0) });
      this.validateField();
    },
    // TODO: Add a delete pair method that deregisters fields and potentially sets invalid
  },
};
</script>
