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

export const isValidDate = {
  test(val) {
    return typeof new Date(val).getMonth === 'function';
  },
  errorText() { return 'Enter a valid date.'; },
};

export const isValidImageFile = {
  test(val) {
    if (val instanceof FileList === false) {
      return false;
    }
    const acceptableFormats = ['image/jpeg', 'image/pjpeg', 'image/png'];
    for (let i = 0; i < val.length; i += 1) {
      if (!acceptableFormats.includes(val[i].type)) {
        return false;
      }
    }
    return true;
  },
  errorText() { return 'Upload an image file in one of the following formats: jpg, jpeg, png.'; },
};

export const isValidURL = {
  test(val) {
    const re = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return re.test(val);
  },
  errorText() { return 'Enter a valid URL in the format: https://domain.com'; },
};

export default {
  isNotEmpty,
  isEmail,
  isMachineSafeStr,
  isValidDate,
};
