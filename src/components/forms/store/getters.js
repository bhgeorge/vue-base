import { ERROR, SUCCESS, PENDING } from '../constants/states';

export default {
  /**
   * Returns form state by looping fields.
   * State Hierarchy ERROR -> PENDING -> SUCCESS
   *
   * @param {String} id The form's ID.
   *
   * @returns {String} The form's state.
   */
  formState: (state) => (id) => {
    let isPending = false;
    for (let i = 0; i < state.forms[id].fields.length; i += 1) {
      const fieldId = state.forms[id].fields[i];
      const fieldState = state.fields[fieldId].state;
      if (fieldState === ERROR) {
        return ERROR;
      }
      if (fieldState === PENDING) {
        isPending = true;
      }
    }
    return isPending ? PENDING : SUCCESS;
  },

  /**
   * Compiles an array of each field's errors.
   *
   * @param {String} id The ID of the form.
   *
   * @returns {Object[]} The error information.
   */
  compileFormErrors: (state) => (id) => {
    const errors = [];
    state.forms[id].fields.forEach((fieldId) => {
      const field = state.fields[fieldId];
      if (field.state === ERROR) {
        errors.push({
          id: fieldId,
          label: field.label,
        });
      }
    });
    return errors;
  },

  /**
   * Returns all field data as an object.
   *
   * @param {String} id The form's ID.
   *
   * @returns {Object} The form data object for submission.
   */
  compileFormData: (state) => (id) => {
    const data = {};
    state.forms[id].fields.forEach((fieldId) => {
      const field = state.fields[fieldId];
      if (field.computeValue && field.state === SUCCESS) {
        data[field.name] = field.getValue(field, state);
      }
    });
    return data;
  },
};
