// Components
import ExternalLink from './components/ExternalLink.vue';
import Icon from './components/icons/Icon.vue';
import Modal from './components/Modal.vue';
import Alert from './components/alerts/Alert.vue';
import AlertList from './components/alerts/AlertList.vue';
import SidebarLayout from './layouts/SidebarLayout.vue';
import SidebarNavLink from './layouts/components/SidebarNavLink.vue';
import SearchResult from './components/search/SearchResult.vue';
import SearchAutocomplete from './components/search/SearchAutocomplete.vue';
// Forms
import VuexForm from './components/forms/VuexForm.vue';
import InputCheckbox from './components/forms/fields/InputCheckbox.vue';
import InputDate from './components/forms/fields/InputDate.vue';
import InputFile from './components/forms/fields/InputFile.vue';
import InputRadio from './components/forms/fields/InputRadio.vue';
import InputSelect from './components/forms/fields/InputSelect.vue';
import InputText from './components/forms/fields/InputText.vue';
import InputTextarea from './components/forms/fields/InputTextarea.vue';
import KeyValuePair from './components/forms/fields/KeyValuePair.vue';
import QuillRTE from './components/forms/fields/QuillRTE.vue';
import FieldRepeater from './components/forms/fields/FieldRepeater.vue';
import InputTrueFalse from './components/forms/fields/InputTrueFalse.vue';

// JS goodies
import constants from './constants';
import utils from './utils';
// Mixins
import vuexFormInput from './components/forms/mixins/vuexFormInput';
import filterResults from './mixins/filterResults';

export default {
  install(Vue, options = {
    prefix: '',
  }) {
    // Layouts
    Vue.component(`${options.prefix}SidebarLayout`, SidebarLayout);
    Vue.component(`${options.prefix}SidebarNavLink`, SidebarNavLink);
    // Components
    Vue.component(`${options.prefix}ExternalLink`, ExternalLink);
    Vue.component(`${options.prefix}Icon`, Icon);
    Vue.component(`${options.prefix}Modal`, Modal);
    Vue.component(`${options.prefix}Alert`, Alert);
    Vue.component(`${options.prefix}AlertList`, AlertList);
    Vue.component(`${options.prefix}SearchResult`, SearchResult);
    Vue.component(`${options.prefix}SearchAutocomplete`, SearchAutocomplete);
    // Forms
    Vue.component(`${options.prefix}VuexForm`, VuexForm);
    Vue.component(`${options.prefix}InputCheckbox`, InputCheckbox);
    Vue.component(`${options.prefix}InputDate`, InputDate);
    Vue.component(`${options.prefix}InputFile`, InputFile);
    Vue.component(`${options.prefix}InputRadio`, InputRadio);
    Vue.component(`${options.prefix}InputSelect`, InputSelect);
    Vue.component(`${options.prefix}InputText`, InputText);
    Vue.component(`${options.prefix}InputTextarea`, InputTextarea);
    Vue.component(`${options.prefix}KeyValuePair`, KeyValuePair);
    Vue.component(`${options.prefix}QuillRTE`, QuillRTE);
    Vue.component(`${options.prefix}FieldRepeater`, FieldRepeater);
    Vue.component(`${options.prefix}InputTrueFalse`, InputTrueFalse);
  },
};

export {
  constants,
  utils,
  vuexFormInput,
  filterResults,
};
