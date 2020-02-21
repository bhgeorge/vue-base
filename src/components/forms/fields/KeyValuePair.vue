<template>
  <fieldset v-show="field.state !== states.HIDDEN">
    <legend
      class="c-input__legend u-m-bot-xs"
      :id="`vf-${reference}`"
    >
      {{ field.label }}<sup v-if="field.required">*</sup>
    </legend>
    <div
      v-for="pair in pairs"
      :key="pair.key"
      class="u-m-bot-xs u-d-flex"
    >
      <button
        class="c-btn--ui o-cover-link__item"
        type="button"
        name="deleteField"
        @click="deleteItem(index)"
      >
        <Icon type="close" />
        <span class="u-visually-hidden">Remove pair</span>
      </button>
      <div class="o-grid o-grid--6-6">
        <InputText
          :reference="pair.key"
          ref="fields"
        />
        <InputText
          :reference="pair.val"
          ref="fields"
        />
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
import getUniqueId from '@/utils/getUniqueId';
import InputText from './InputText.vue';
import { isMachineSafeStr } from '../utils/validations';
import vuexFormInput from '../mixins/vuexFormInput';

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
      let fieldA = {
        id: idA,
        name: 'option_key',
        label: 'Option Name',
        required: true,
        computeValue: false,
      };
      if (this.fields && this.fields.fieldA) {
        fieldA = { ...fieldA, ...this.fields.fieldA };
      }

      const idB = getUniqueId();
      let fieldB = {
        id: idB,
        name: 'option_val',
        label: 'Option Value',
        computeValue: false,
        validation: [
          isMachineSafeStr,
        ],
      };
      if (this.fields && this.fields.fieldB) {
        fieldB = { ...fieldB, ...this.fields.fieldB };
      }

      this.registerFields({ form: this.formId, fields: [fieldA, fieldB] });
      this.pairs.push({ key: idA, val: idB });
      this.updateFieldValue({ id: this.reference, val: this.pairs.slice(0) });
      this.validateField();
    },

    deleteItem(index) {
      // Deregister the pair
      const item = this.pairs[index];
      this.deregisterFields({
        fields: [item.key, item.val],
        form: this.formId,
      });
      // Update the field value
      this.paris.splice(index, 1);
      this.updateFieldValue({ id: this.reference, val: this.pairs.slice(0) });
      // Wait for the component to be rendered before we access $refs
      window.requestAnimationFrame(() => {
        this.validateField();
      });
    },
  },
};
</script>
