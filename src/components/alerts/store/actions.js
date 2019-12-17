import getUniqueId from '@/utils/getUniqueId';
import * as types from '../constants/mutation-types';

export const addAlert = ({ commit }, obj) => {
  commit(types.ADD, {
    ...obj,
    id: getUniqueId(),
  });
};

export default {
  addAlert,
};
