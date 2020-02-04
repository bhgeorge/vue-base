<!-- eslint-disable -->
<template>
  <fieldset
    v-show="field.isVisible"
    class="c-field-repeater c-card c-card--outline u-m-top-0"
  >
    <legend class="c-input__legend">
      {{ field.label }}<sup v-if="field.required">*</sup>
    </legend>
    <p
      v-if="!fieldValue || fieldValue.length === 0"
      :id="`${reference}__empty-text`"
      class="u-font-xs u-font-center u-p u-c-theme-text-alt"
    >
      No items currently added.
    </p>
    <Draggable
      v-model="fieldValue"
      class="c-card__body u-p-left-0"
    >
      <div
        v-for="(item, index) in fieldValue"
        :key="item.id"
        class="u-m-bot-xs"
      >
        <div class="u-p-vert-s u-d-flex u-w-100"><!-- eslint-disable-line -->
          <div class="o-cover-link">
            <button
              class="c-btn--ui o-cover-link__item"
              type="button"
              name="deleteField"
              @click="deleteItem(index)"
            >
              <Icon type="close" />
              <span class="u-visually-hidden">Remove field</span>
            </button>
          </div>
          <component
            :is="item.component"
            :reference="item.id"
            :formId="formId"
            class="u-f-1"
            ref="fields"
          />
        </div>
      </div>
    </Draggable>
    <div class="c-card__footer o-grid o-grid--8-4@m o-grid--12 u-bg-theme-bg-alt u-p-s u-f-align-end">
      <div
        v-show="fieldKeys.length > 1"
        class="o-col"
      >
        <InputSelect :reference="typeSelectId" />
      </div>
      <div class="o-col">
        <button
          type="button"
          class="c-btn c-btn--s c-btn--secondary u-d-flex u-f-align-center"
          @click="addNewItem"
        >
          <Icon type="add" /> {{ field.addNewText }}
        </button>
      </div>
    </div>
  </fieldset>
</template>
<!-- eslint-enable -->

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import Draggable from 'vuedraggable';
import getUniqueId from '@/utils/getUniqueId';
import Icon from '@/components/icons/Icon.vue';
import InputSelect from './InputSelect.vue';
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
    Draggable,
    Icon,
    InputSelect,
  },

  data() {
    return {
      typeSelectId: getUniqueId(),
    };
  },

  computed: {
    ...mapState('forms', {
      typeSelect(state) {
        return state.fields[this.typeSelectId];
      },
    }),

    fieldKeys() {
      return Object.keys(this.field.fields);
    },

    fieldValue: {
      get() {
        return this.field.value;
      },
      set(val) {
        this.updateFieldValue({
          id: this.reference,
          val,
        });
      },
    },
  },

  methods: {
    ...mapActions('forms', ['registerFields']),

    ...mapMutations('forms', ['deregisterFields']),

    addNewItem() {
      if (this.typeSelect.value) {
        const id = getUniqueId();
        const field = {
          ...this.field.fields[this.typeSelect.value],
          id,
        };
        this.registerFields({ form: this.formId, fields: [field] });
        const val = this.field.value || [];
        this.updateFieldValue({
          id: this.reference,
          val: [
            ...val,
            { id, component: field.component },
          ],
        });
        // Wait for the component to be rendered before we access $refs
        window.requestAnimationFrame(() => {
          this.validateField();
        });
      }
    },

    deleteItem(index) {
      // TODO: Deregister children of the field as well
      // Deregister removed field
      this.deregisterFields({
        fields: [this.field.value[index].id],
        form: this.formId,
      });
      // Update the field value
      const val = this.field.value.slice(0);
      val.splice(index, 1);
      this.updateFieldValue({
        id: this.reference,
        val,
      });
      // Wait for the component to be rendered before we access $refs
      window.requestAnimationFrame(() => {
        this.validateField();
      });
    },
  },

  created() {
    this.registerFields({
      form: this.formId,
      fields: [{
        id: this.typeSelectId,
        name: 'type_select',
        label: 'Field to add',
        computeValue: false,
        options: this.fieldKeys.map((key) => ({
          text: this.field.fields[key].label,
          value: key,
        })),
        value: this.fieldKeys[0],
      }],
    });
  },
};
</script>
