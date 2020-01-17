<!-- eslint-disable -->
<template>
  <fieldset
    v-show="field.isVisible"
    class="c-field-repeater c-card c-card--outline"
  >
    <legend class="c-input__legend">
      {{ field.label }}<sup v-if="field.required">*</sup>
    </legend>
    <p
      v-if="items.length === 0"
      :id="`${reference}__empty-text`"
      class="u-font-xs u-font-center u-p u-c-theme-text-alt"
    >
      No items currently added.
    </p>
    <Draggable
      v-model="items"
      class="c-card__body"
      @change="handleMove"
    >
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="u-m-bot-xs"
      >
        <div class="u-p-vert-s u-p-right-s u-d-flex u-w-100"><!-- eslint-disable-line -->
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
            class="u-f-1"
            ref="fields"
          />
        </div>
      </div>
    </Draggable>
    <div class="o-grid o-grid--8-4@m o-grid--12 u-bg-theme-bg-alt u-p-s u-f-align-end">
      <div class="o-col">
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
      items: [],
      typeSelectId: getUniqueId(),
    };
  },

  computed: {
    ...mapState('forms', {
      typeSelect(state) {
        return state.fields[this.typeSelectId];
      },
    }),
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
        this.items.push({
          id,
          component: field.component,
        });
        this.updateFieldValue({ id: this.reference, val: this.items.slice(0) });
        // Wait for the component to be rendered before we access $refs
        window.requestAnimationFrame(() => {
          this.validateField();
        });
      }
    },

    deleteItem(index) {
      // Deregister removed field
      this.deregisterFields({
        fields: [this.items[index].id],
        form: this.formId,
      });
      // Update the field value
      this.items.splice(index, 1);
      this.updateFieldValue({ id: this.reference, val: this.items.slice(0) });
      // Wait for the component to be rendered before we access $refs
      window.requestAnimationFrame(() => {
        this.validateField();
      });
    },

    handleMove() {
      this.debouncedUpdateFieldValue({ id: this.reference, val: this.items.slice(0) });
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
        options: Object.keys(this.field.fields)
          .map((key) => ({
            text: this.field.fields[key].label,
            value: key,
          })),
      }],
    });
  },
};
</script>
