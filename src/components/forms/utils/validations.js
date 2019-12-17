export const isNotEmpty = {
  test(val) { return val !== null && val.length > 0; },
  errorText(label) { return `${label} must not be empty.`; },
};

export const isEmail = {
  test(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  },
  errorText() { return 'Enter a valid email address in the format username@domain.com'; },
};

export const isMachineSafeStr = {
  test(val) {
    const re = /^[A-Za-z0-9_]*$/g;
    return re.test(val);
  },
  errorText() { return 'Enter a machine safe string that contains only letters, numbers, and underscores (_).'; },
};

export default {
  isNotEmpty,
  isEmail,
  isMachineSafeStr,
};
