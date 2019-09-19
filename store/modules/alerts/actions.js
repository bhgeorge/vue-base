import { generateRandomId } from './../../mixins/generateRandomId';
import * as types from './mutation-types';

export const closeAlert = ({ commit }, index) => {
  commit(types.CLOSE_ALERT, index);
};

export const setAlert = ({ commit }, obj) => {
  commit(types.SET_ALERT, {
    ...obj,
    classes: ['c-alert', 'c-alert--global', `c-alert--${obj.type}`],
    id: generateRandomId(),
  });
};

export default {
  closeAlert,
  setAlert,
};
