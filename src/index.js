import Vue from 'vue';

import ExternalLink from './components/ExternalLink';
import Icon from './components/icons/Icon';
import Modal from './components/Modal';
import SmartSearch from './components/SmartSearch';

export default {
  install(Vue, options = { useForm: true }) {
    Vue.component('ExternalLink', ExternalLink);
    Vue.component('Icon', Icon);
    Vue.component('Modal', Modal);
    Vue.component('SmartSearch', SmartSearch);
    // if (options.useForm) {
    //   Vue.component('VuexForm', VuexForm);
    // }
  }
}

export {
  ExternalLink,
  Icon,
  Modal,
  SmartSearch
};
