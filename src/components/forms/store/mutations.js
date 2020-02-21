import Vue from 'vue';
import { findIndex } from 'lodash';
import {
  CREATE_FORM,
  DEREGISTER_FIELDS,
  REGISTER_FIELDS,
  RESET_FORM,
  SET_ERROR_TEXT,
  SET_STATE,
  UPDATE_FIELD_VALUE,
} from '../constants/mutation-types';

export default {
  [CREATE_FORM](state, form) {
    // Create fields
    form.fields.forEach((field) => {
      Vue.set(state.fields, field.id, field);
    });

    // Create form
    const obj = {
      id: form.id,
      fields: form.fields.map((f) => f.id),
    };
    Vue.set(state.forms, form.id, obj);

    // Create prereq map
    const keys = Object.keys(form.prereqMap);
    keys.forEach((key) => {
      if (state.prereqMap[key]) {
        // TODO: Ensure these keys are unique
        state.prereqMap[key].concat(form.prereqMap[key]);
      } else {
        Vue.set(state.prereqMap, key, form.prereqMap[key]);
      }
    });
  },

  [RESET_FORM](state, obj) {
    // Reset current fields
    obj.fields.forEach((field) => {
      state.fields[field.id] = field;
    });

    // Update fields array on the form
    state.forms[obj.formId].fields = obj.staticFieldIds;
    state.forms[obj.formId].hasBeenValidated = false;

    // Delete excess fields
    obj.extraFields.forEach((field) => {
      delete state.fields[field];
    });
  },

  [SET_STATE](state, obj) {
    state[obj.type][obj.id].state = obj.state;
  },

  [SET_ERROR_TEXT](state, obj) {
    state.fields[obj.id].errorText = obj.text;
  },

  [UPDATE_FIELD_VALUE](state, obj) {
    state.fields[obj.id].value = obj.val;
  },

  [REGISTER_FIELDS](state, obj) {
    obj.fields.forEach((field) => {
      Vue.set(state.fields, field.id, field);
      state.forms[obj.form].fields.push(field.id);
    });
  },

  [DEREGISTER_FIELDS](state, obj) {
    obj.fields.forEach((field) => {
      Vue.delete(state.fields, field);
      const index = findIndex(state.forms[obj.form].fields, (item) => item.id === field);
      if (index !== -1) {
        state.forms[obj.form].fields.splice(index, 1);
      }
    });
  },
};
