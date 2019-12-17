export default (str) => {
  const re = /[^A-Za-z0-9_]+/g;
  return str.replace(re, '_');
};
