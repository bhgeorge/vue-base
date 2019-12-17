import {
  ADD,
  CLOSE,
} from '../constants/mutation-types';

export default {
  [ADD](state, obj) {
    state.alerts.push(obj);
  },

  [CLOSE](state, index) {
    state.alerts.splice(index, 1);
  },
};
