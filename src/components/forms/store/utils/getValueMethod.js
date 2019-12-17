import { KEY_VALUE_PAIR } from '../../constants/fieldTypes';
import getMachineSafeStr from '@/utils/getMachineSafeStr';

const baseValue = (field) => field.value;

const compileKeyValuePairs = (field, state) => {
  const pairs = [];
  field.value.forEach((pair) => {
    pairs.push({
      key: state.fields[pair.key].value,
      val: state.fields[pair.val].value
        ? state.fields[pair.val].value : getMachineSafeStr(state.fields[pair.key].value),
    });
  });
  return pairs;
};

const map = {
  [KEY_VALUE_PAIR]: compileKeyValuePairs,
};

export default (type) => map[type] || baseValue;
