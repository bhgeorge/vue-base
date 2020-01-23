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
import * as fieldTypes from '../../../../src/components/forms/constants/fieldTypes';

export default {
  data() {
    return {
      formStructure: {
        id: 'sample-form',
        groups: [
          {
            fields: [
              {
                component: fieldTypes.REPEATER,
                id: 'repeater_parent',
                label: 'Repeater',
                name: 'repeater_parent',
                addNewText: 'Add new repeater',
                fields: {
                  repeater: {
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
                },
              },
            ],
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
