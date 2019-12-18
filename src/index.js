// Components
import ExternalLink from './components/ExternalLink.vue';
import Icon from './components/icons/Icon.vue';
import Modal from './components/Modal.vue';
import SidebarLayout from './layouts/SidebarLayout.vue';
import SmartSearch from './components/SmartSearch.vue';
import VuexForm from './components/forms/VuexForm.vue';

// JS goodies
import constants from './constants';
import utils from './utils';

export default {
  install(Vue, options = {
    prefix: '',
  }) {
    Vue.component(`${options.prefix}ExternalLink`, ExternalLink);
    Vue.component(`${options.prefix}Icon`, Icon);
    Vue.component(`${options.prefix}Modal`, Modal);
    Vue.component(`${options.prefix}SidebarLayout`, SidebarLayout);
    Vue.component(`${options.prefix}SmartSearch`, SmartSearch);
    Vue.component(`${options.prefix}VuexForm`, VuexForm);
  },
};

export {
  ExternalLink,
  Icon,
  Modal,
  SidebarLayout,
  SmartSearch,
  VuexForm,
  constants,
  utils,
};
