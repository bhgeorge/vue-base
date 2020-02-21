import { debounce } from 'lodash';
import { mapState, mapActions } from 'vuex';
import { UPDATE_FIELD_VALUE, VALIDATE_FIELD } from '../constants/mutation-types'; // eslint-disable-line
import * as states from '../constants/states';

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
      debouncedUpdateFieldValue: debounce(function (obj) { // eslint-disable-line func-names
        this.updateFieldValue(obj);
      }, 250),
      states,
    };
  },

  computed: {
    ...mapState('forms', {
      field(state) {
        return state.fields[this.reference];
      },
    }),

    classNames() {
      return ['c-input', this.field.state].concat(this.modifiers);
    },
  },

  methods: {
    ...mapActions('forms', {
      updateFieldValue: UPDATE_FIELD_VALUE,
      validate: VALIDATE_FIELD,
    }),

    validateField() {
      // Ensure that a value is populated
      this.debouncedUpdateFieldValue.flush();
      this.validate({ id: this.reference });
    },
  },
};
