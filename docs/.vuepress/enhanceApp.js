import Icon from '../../src/components/icons/Icon';

export default ({ Vue }) => {
  Vue.component('Icon', Icon);
  Vue.prototype.VERSION = process.env.VERSION;
};
