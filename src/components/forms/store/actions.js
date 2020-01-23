import { difference } from 'lodash';
import getValueMethod from './utils/getValueMethod';
import {
  COMPARITOR_OR,
  COMPARITOR_AND,
  EVAL_IS,
  EVAL_IS_ONE_OF,
  EVAL_NOT,
} from '../constants/prereqs';
import * as types from '../constants/mutation-types';

/**
 * Normalizes field data.
 *
 * @param {Object} field The field's pertinent data.
 */
const createFieldData = (field) => ({
  value: field.value || null,
  isValid: !field.required,
  hasValidated: false,
  getValue: getValueMethod(field.component),
  isVisible: field.prereqs ? field.isVisible : true,
  computeValue: true,
  ...field,
});


/**
 * Registers a form or resets all field values if the form has already been registered.
 *
 * @param {Object} data The form data.
 * @param {String} data.id The form ID.
 * @param {Object[]} data.fields The field data.
 * @param {String} data.fields.id The field's unique ID.
 * @param {String} data.fields.name The field's data name.
 * @param {String} data.fields.component The component to use for this field.
 * @param {Boolean} data.resetIfExists If true, reset this form's data on registration.
 */
export const registerForm = ({ commit, state }, data) => {
  // TODO: Split this out, lotta looping
  if (data.id) {
    if (state.forms[data.id]) {
      if (data.resetIfExists) {
        const staticFieldIds = data.fields.map((field) => field.id);
        commit(types.RESET_FORM, {
          extraFields: difference(state.forms[data.id].fields, staticFieldIds),
          staticFieldIds,
          formId: data.id,
          fields: data.fields.map((field) => createFieldData(field)),
        });
      }
      return;
    }

    // Initialize field data
    const fields = [];
    const prereqMap = {};

    const registerField = (field) => {
      // Store references for visibility
      if (field.prereqs) {
        field.prereqs.forEach((prereq) => {
          if (!prereqMap[prereq.field]) {
            prereqMap[prereq.field] = [field.id];
            return;
          }
          if (!prereqMap[prereq.field].includes(field.id)) {
            prereqMap[prereq.field].push(field.id);
          }
        });
      }
      // Store the base field data
      fields.push(createFieldData(field));
    };

    if (data.groups) {
      data.groups.forEach((group) => {
        group.fields.forEach((field) => {
          registerField(field);
        });
      });
    }

    if (data.fields) {
      data.fields.forEach((field) => {
        registerField(field);
      });
    }

    const form = {
      id: data.id,
      fields,
      prereqMap,
    };
    commit(types.CREATE_FORM, form);
  }
};

/**
 * Registers new field data.
 *
 * @param {Object} data
 * @param {String} data.form The form ID to attach the fields to.
 * @param {Object[]} data.fields The field data to initialize.
 */
export const registerFields = ({ commit }, data) => {
  const arr = data.fields.map((field) => createFieldData(field));
  commit(types.REGISTER_FIELDS, { form: data.form, fields: arr });
};

// TODO: I don't know if I am crazy about the switch usage here, classes would solve
/**
 * Evaluates if the form data matches a given set of parameters.
 *
 * @param {Object} state The current form state.
 * @param {Object} data The eval object to match against.
 * @param {String} data.field The field to check against.
 * @param {String} data.eval.method The method to use.
 * @param {Any} data.eval.match The value to match against.
 */
const evalPrereq = (state, data) => {
  switch (data.eval.method) {
    case EVAL_IS_ONE_OF:
      return data.eval.match.includes(state.fields[data.field].value);
    case EVAL_IS:
      return data.eval.match === state.fields[data.field].value;
    case EVAL_NOT:
      // TODO: This doesn't account for array to array comparisons
      if (Array.isArray(state.fields[data.field])) {
        return !state.fields[data.field].includes(data.match);
      }
      return state.fields[data.field] !== data.match;
    default:
      console.error('No valid eval method found.'); // eslint-disable-line no-console
      return false;
  }
};

/**
 * Sets the visibility of a field based on its prerequisites.
 *
 * @param {Object} state The current state.
 * @param {String} id The id of the field to check visibility of.
 *
 * @returns {Boolean} Visibility state.
 */
const checkIfVisible = (state, id) => {
  const field = state.fields[id];
  let hasOr = false;
  for (let i = 0; i < field.prereqs.length; i += 1) {
    const prereq = field.prereqs[i];
    if (!hasOr && prereq.type === COMPARITOR_OR) {
      hasOr = true;
    }

    const passes = evalPrereq(state, prereq);
    if (passes && prereq.type === COMPARITOR_OR) {
      // In OR scenarios, pass on the first positive.
      return passes;
    }
    if (!passes && prereq.type === COMPARITOR_AND) {
      // In AND scenarios, fail on the first negative.
      return passes;
    }
  }
  // If we are here, we have either failed all OR statements or passed all AND statements
  return !hasOr;
};

/**
 * Updates the field's value and handles checking any prerequisites from other fields.
 *
 * @param {Object} data The mutation data.
 * @param {String} data.id The field ID.
 * @param {Any} data.val The field value.
 */
export const updateFieldValue = ({ commit, state }, data) => {
  commit(types.UPDATE_FIELD_VALUE, data);
  if (state.prereqMap[data.id]) {
    state.prereqMap[data.id].forEach((id) => {
      commit(types.SET_IS_VISIBLE, { id, bool: checkIfVisible(state, id) });
    });
  }
};

export default {
  registerForm,
  registerFields,
  updateFieldValue,
};
