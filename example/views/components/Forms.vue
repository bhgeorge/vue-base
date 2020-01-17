<template>
  <section class="o-section">
    <div class="o-container">
      <div class="u-w-m600">
        <VuexForm :formStructure="formStructure" />
      </div>
    </div>
  </section>
</template>

<script>
import * as fieldTypes from '../../../src/components/forms/constants/fieldTypes';
import { isValidDate, isValidImageFile } from '../../../src/components/forms/utils/validations';
import { COMPARITOR_AND, EVAL_IS } from '../../../src/components/forms/constants/prereqs';

export default {
  data() {
    return {
      formStructure: {
        id: 'sample-form',
        fields: [
          {
            component: fieldTypes.TEXT,
            id: 'input-text',
            label: 'Input Text',
            name: 'inputText',
            required: true,
          },
          {
            component: fieldTypes.SELECT,
            id: 'select',
            label: 'Input Select',
            name: 'inputSelect',
            options: [
              {
                value: 'apples',
                text: 'Apples',
              },
              {
                value: 'bananas',
                text: 'Bananas',
              },
              {
                value: 'cucumbers',
                text: 'Cucumbers',
              },
            ],
            modifiers: ['c-input--dark'],
          },
          {
            component: fieldTypes.RADIO,
            id: 'radio',
            label: 'Input Radio',
            name: 'inputRadio',
            required: true,
            options: [
              {
                value: 'blue',
                text: 'Blue',
              },
              {
                value: 'red',
                text: 'Red',
              },
            ],
          },
          {
            component: fieldTypes.CHECKBOX,
            id: 'checkbox',
            label: 'Input Checkbox',
            name: 'inputCheckbox',
            options: [
              {
                value: 'sandwich',
                text: 'Sandwich',
              },
              {
                value: 'soup',
                text: 'Soup',
              },
            ],
          },
          {
            component: fieldTypes.DATE,
            id: 'date',
            label: 'Input Date',
            name: 'inputDate',
            validation: [
              isValidDate,
            ],
          },
          {
            component: fieldTypes.FILE,
            id: 'file',
            label: 'Input File',
            name: 'inputFile',
            validation: [
              isValidImageFile,
            ],
            acceptFileTypes: ['.jpg', '.png'],
          },
          {
            component: fieldTypes.QUILL_RTE,
            id: 'quill-rte',
            label: 'Quill RTE',
            name: 'quillRTE',
          },
          {
            component: fieldTypes.TEXTAREA,
            id: 'textarea',
            label: 'Input Textarea',
            name: 'inputTextarea',
          },
          {
            component: fieldTypes.KEY_VALUE_PAIR,
            id: 'key-value-pair',
            label: 'Key Value Pair',
            name: 'keyValuePair',
            addNewText: 'Add an option',
            prereqs: [
              {
                type: COMPARITOR_AND,
                field: 'radio',
                eval: {
                  method: EVAL_IS,
                  match: 'red',
                },
              },
            ],
          },
          {
            component: fieldTypes.REPEATER,
            id: 'repeater',
            label: 'Repeater',
            name: 'repeater',
            addNewText: 'Add new field',
            fields: {
              text: {
                component: fieldTypes.TEXT,
                id: 'repeater-text',
                label: 'Input Text [Repeater]',
                name: 'col',
                required: true,
                computeValue: false,
              },
              checkbox: {
                component: fieldTypes.CHECKBOX,
                id: 'repeater-checkbox',
                label: 'Input Checkbox [Repeater]',
                name: 'col',
                computeValue: false,
                options: [
                  {
                    value: 'sandwich',
                    text: 'Sandwich',
                  },
                  {
                    value: 'soup',
                    text: 'Soup',
                  },
                ],
              },
            },
          },
        ],
        onSubmit: this.handleSubmit,
      },
    };
  },

  methods: {
    handleSubmit(data) {
      console.log(data); // eslint-disable-line no-console
    },
  },
};
</script>
