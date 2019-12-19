import { Portal, PortalTarget } from 'portal-vue';

// Components
import ExternalLink from './components/ExternalLink.vue';
import Icon from './components/icons/Icon.vue';
import Modal from './components/Modal.vue';
import SidebarLayout from './layouts/SidebarLayout.vue';
import SmartSearch from './components/SmartSearch.vue';
// Forms
import VuexForm from './components/forms/VuexForm.vue';
import InputCheckbox from './components/forms/fields/InputCheckbox.vue';
import InputRadio from './components/forms/fields/InputRadio.vue';
import InputSelect from './components/forms/fields/InputSelect.vue';
import InputText from './components/forms/fields/InputText.vue';
import InputTextarea from './components/forms/fields/InputTextarea.vue';
import KeyValuePair from './components/forms/fields/KeyValuePair.vue';
import QuillRTE from './components/forms/fields/QuillRTE.vue';



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
    Vue.component('Portal', Portal);
    Vue.component('PortalTarget', PortalTarget);
    Vue.component(`${options.prefix}SidebarLayout`, SidebarLayout);
    Vue.component(`${options.prefix}SmartSearch`, SmartSearch);
    Vue.component(`${options.prefix}VuexForm`, VuexForm);
    Vue.component(`${options.prefix}InputCheckbox`, InputCheckbox);
    Vue.component(`${options.prefix}InputRadio`, InputRadio);
    Vue.component(`${options.prefix}InputSelect`, InputSelect);
    Vue.component(`${options.prefix}InputText`, InputText);
    Vue.component(`${options.prefix}InputTextarea`, InputTextarea);
    Vue.component(`${options.prefix}KeyValuePair`, KeyValuePair);
    Vue.component(`${options.prefix}QuillRTE`, QuillRTE);
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
