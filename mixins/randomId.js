export const generateRandomId = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let str = '';
  for (let i = 0; i < 16; i += 1) {
    str += chars.charAt(Math.round(Math.random() * 62));
  }
  return str;
}

export default {
  generateRandomId,
}
