import { KEY_VALUE_PAIR, REPEATER } from '../../constants/fieldTypes';
import getMachineSafeStr from '@/utils/getMachineSafeStr';

const baseValue = (field) => {
  if (Array.isArray(field.value)) {
    return field.value.slice(0);
  }
  if (typeof field.value === 'object' && field.value !== null) {
    return { ...field.value };
  }
  return field.value;
};

const compileKeyValuePairs = (field, state) => {
  if (!field.value) {
    return [];
  }
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

const compileRepeater = (field, state) => {
  if (!field.value || field.value.length === 0) {
    return [];
  }
  return field.value.map((item) => {
    const f = state.fields[item.id];
    return {
      name: f.name,
      value: f.getValue(f, state),
    };
  });
};

const map = {
  [KEY_VALUE_PAIR]: compileKeyValuePairs,
  [REPEATER]: compileRepeater,
};

export default (type) => map[type] || baseValue;
