// Components
import ExternalLink from './components/ExternalLink';
import Icon from './components/icons/Icon';
import Modal from './components/Modal';
import SidebarLayout from './layouts/SidebarLayout';
import SmartSearch from './components/SmartSearch';
import VuexForm from './components/forms/VuexForm';

// Constants
import constants from './constants/';

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
};
