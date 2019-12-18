export default {
  /**
   * Loops associated fields to determine validity.
   *
   * @param {String} id The form's ID.
   *
   * @returns {Boolean} isValid.
   */
  isFormValid: (state) => (id) => {
    for (let i = 0; i < state.forms[id].fields.length; i += 1) {
      const fieldId = state.forms[id].fields[i];
      if (state.fields[fieldId].isVisible && !state.fields[fieldId].isValid) {
        return false;
      }
    }
    return true;
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
      if (field.isVisible && !field.isValid) {
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
    state.forms[id].fields.forEach((field) => {
      const f = state.fields[field];
      if (f.computeValue) {
        if (f.isVisible) {
          data[f.name] = f.getValue(f, state);
        }
      }
    });
    return data;
  },
};
