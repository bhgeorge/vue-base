import { debounce } from 'lodash';
import { mapState, mapActions, mapMutations } from 'vuex';
import { SET_IS_VALID, UPDATE_FIELD_VALUE } from '../constants/mutation-types';
import { isNotEmpty } from '../utils/validations';

export default {
  props: {
    reference: {
      type: String,
      required: true,
    },

    modifiers: {
      type: Array,
      default: () => ([]),
    },
  },

  data() {
    return {
      errorText: '',
      debouncedUpdateFieldValue: debounce(function (obj) { // eslint-disable-line func-names
        this.updateFieldValue(obj);
      }, 250),
    };
  },

  computed: {
    ...mapState('forms', {
      field(state) {
        return state.fields[this.reference];
      },
    }),

    showError() {
      return this.field.hasValidated && !this.field.isValid;
    },

    classNames() {
      const classNames = ['c-input'].concat(this.modifiers);
      if (this.field.hasValidated) {
        classNames.push(this.field.isValid ? 'success' : 'error');
      }
      return classNames;
    },
  },

  methods: {
    ...mapActions('forms', {
      updateFieldValue: UPDATE_FIELD_VALUE,
    }),

    ...mapMutations('forms', {
      setIsValid: SET_IS_VALID,
    }),

    // TODO: Look at moving this to the store module
    validateField(isFromSubmit = false) {
      // Run validation on children
      if (isFromSubmit && !!this.$refs.fields) {
        this.$refs.fields.forEach((field) => {
          field.validateField();
        });
      }
      // Add required validation or skip if null
      const validators = this.field.validation ? this.field.validation.slice(0) : [];
      if (this.field.required) {
        validators.unshift(isNotEmpty);
      } else if (!this.field.value) {
        this.setIsValid({ id: this.reference, bool: true });
        return;
      }
      // Ensure that a value is populated
      this.debouncedUpdateFieldValue.flush();
      // TODO: Handle async validation within a synchronous order
      for (let i = 0; i < validators.length; i += 1) {
        const validation = validators[i];
        if (!validation.test(this.field.value)) {
          this.errorText = validation.errorText(this.field.label);
          this.setIsValid({ id: this.reference, bool: false });
          return;
        }
      }
      this.setIsValid({ id: this.reference, bool: true });
    },
  },
};
