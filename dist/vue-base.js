'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var portalVue = require('portal-vue');
var vueRuntimeHelpers = require('vue-runtime-helpers');
var Vue = _interopDefault(require('vue'));
var ally_js = require('ally.js');
var vuex = require('vuex');
var lodash = require('lodash');
var Quill = _interopDefault(require('quill'));

var add = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z";
var close = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";
var code = "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z";
var color = "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z";
var component = "M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z";
var download = "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z";
var edit = "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z";
var email = "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z";
var fullscreen = "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z";
var fullscreenExit = "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z";
var github = "M12 .25c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.799 8.207 11.386.6.11.82-.26.82-.579 0-.284-.011-1.039-.017-2.04-3.338.725-4.042-1.609-4.042-1.609-.546-1.386-1.333-1.755-1.333-1.755-1.09-.744.083-.73.083-.73 1.204.086 1.838 1.237 1.838 1.237 1.07 1.834 2.808 1.304 3.492.998.11-.776.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.22-.123-.304-.535-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.957-.267 1.983-.4 3.004-.404a11.51 11.51 0 0 1 3.004.404c2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.175.769.84 1.234 1.91 1.234 3.22 0 4.61-2.806 5.625-5.48 5.922.431.37.815 1.102.815 2.222 0 1.604-.015 2.898-.015 3.291 0 .322.216.695.825.578 4.764-1.59 8.2-6.085 8.2-11.384C24 5.622 18.627.25 12 .25";
var image = "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z";
var menu = "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z";
var minimize = "M6 19h12v2H6z";
var more = "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z";
var newWindow = "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z";
var person = "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z";
var search = "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z";
var settings = "M19.14,12.936 C19.176,12.636 19.2,12.324 19.2,12 C19.2,11.676 19.176,11.364 19.128,11.064 L21.156,9.48 C21.336,9.336 21.384,9.072 21.276,8.868 L19.356,5.544 C19.236,5.328 18.984,5.256 18.768,5.328 L16.38,6.288 C15.876,5.904 15.348,5.592 14.76,5.352 L14.4,2.808 C14.364,2.568 14.16,2.4 13.92,2.4 L10.08,2.4 C9.84,2.4 9.648,2.568 9.612,2.808 L9.252,5.352 C8.664,5.592 8.124,5.916 7.632,6.288 L5.244,5.328 C5.028,5.244 4.776,5.328 4.656,5.544 L2.736,8.868 C2.616,9.084 2.664,9.336 2.856,9.48 L4.884,11.064 C4.836,11.364 4.8,11.688 4.8,12 C4.8,12.312 4.824,12.636 4.872,12.936 L2.844,14.52 C2.664,14.664 2.616,14.928 2.724,15.132 L4.644,18.456 C4.764,18.672 5.016,18.744 5.232,18.672 L7.62,17.712 C8.124,18.096 8.652,18.408 9.24,18.648 L9.6,21.192 C9.648,21.432 9.84,21.6 10.08,21.6 L13.92,21.6 C14.16,21.6 14.364,21.432 14.388,21.192 L14.748,18.648 C15.336,18.408 15.876,18.084 16.368,17.712 L18.756,18.672 C18.972,18.756 19.224,18.672 19.344,18.456 L21.264,15.132 C21.384,14.916 21.336,14.664 21.144,14.52 L19.14,12.936 Z M12,15.6 C10.02,15.6 8.4,13.98 8.4,12 C8.4,10.02 10.02,8.4 12,8.4 C13.98,8.4 15.6,10.02 15.6,12 C15.6,13.98 13.98,15.6 12,15.6 Z";
var swap = "M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z";
var text = "M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z";
var trash = "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z";
var warning = "M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z";
var paths = {
	add: add,
	close: close,
	code: code,
	color: color,
	component: component,
	download: download,
	edit: edit,
	email: email,
	fullscreen: fullscreen,
	fullscreenExit: fullscreenExit,
	github: github,
	image: image,
	menu: menu,
	minimize: minimize,
	more: more,
	newWindow: newWindow,
	person: person,
	search: search,
	settings: settings,
	swap: swap,
	text: text,
	trash: trash,
	warning: warning
};

//

var script = {
  props: {
    type: {
      type: String,
      required: true,
    },

    modifiers: {
      type: Array,
      required: false,
    },
  },

  computed: {
    classNames() {
      let classNames = ['o-icon'];
      if (this.modifiers) {
        classNames = classNames.concat(this.modifiers);
      }
      return classNames;
    },

    path() {
      return paths[this.type];
    },
  },
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "svg",
    {
      class: _vm.classNames,
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        role: "presentation"
      }
    },
    [_c("path", { attrs: { d: _vm.path, fill: "currentColor" } })]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$1 = {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  components: {
    Icon: __vue_component__,
  },
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    { attrs: { href: _vm.link, target: "_blank", rel: "noopener" } },
    [
      _c("span", [_vm._v(_vm._s(_vm.text))]),
      _vm._v(" "),
      _c("span", { staticClass: "u-visually-hidden" }, [
        _vm._v("(opens in a new tab)")
      ]),
      _vm._v(" "),
      _c("Icon", {
        attrs: {
          type: "newWindow",
          modifiers: ["u-m-left-xxs", "u-font-vert-mid", "o-icon--s"]
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$2 = {
  props: {
    modifiers: {
      type: Array,
      required: false,
    },

    hasClose: {
      type: Boolean,
      default: true,
    },

    portal: {
      type: String,
      default: 'modal',
    },

    describedby: {
      type: String,
      required: false,
    },

    labelledby: {
      type: String,
      required: false,
    },
  },

  components: {
    Icon: __vue_component__,
    Portal: portalVue.Portal,
  },

  data() {
    return {
      initialEl: null,
      tabFocusHandle: null,
      disabledHandle: null,
    };
  },

  computed: {
    classNames() {
      if (this.modifiers && this.modifiers.length > 0) {
        return ['o-modal__dialog'].concat(this.modifiers);
      }
      return ['o-modal__dialog'];
    },
  },

  methods: {
    closeModal() {
      if (this.hasClose) {
        this.$emit('emitClose');
      }
    },

    handleKeyboard(event) {
      // Close on escape if user can close
      if (this.hasClose) {
        if (event.key === 'Escape' || event.keyCode === 27) {
          this.closeModal();
        }
      }
    },
  },

  created() {
    // Remove non-modal content from readability
    this.initialEl = document.activeElement;
    document.body.classList.add('no-scroll');
  },

  mounted() {
    window.addEventListener('keydown', this.handleKeyboard);
    window.requestAnimationFrame(() => {
      this.tabFocusHandle = ally_js.maintain.tabFocus({
        context: this.$refs.dialog,
      });
      this.disabledHandle = ally_js.maintain.disabled({
        filter: this.$refs.dialog,
      });
      this.$refs.document.focus();
    });
  },

  beforeDestroy() {
    // Return non-modal content to readability
    this.tabFocusHandle.disengage();
    this.disabledHandle.disengage();
    document.body.classList.remove('no-scroll');
    window.removeEventListener('keydown', this.handleKeyboard);
    this.initialEl.focus();
  },
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "portal",
    { attrs: { to: _vm.portal } },
    [
      _c("transition", { attrs: { name: "u-trans-pop-in" } }, [
        _c(
          "div",
          {
            ref: "dialog",
            staticClass: "o-modal",
            attrs: { role: "dialog", tabindex: "-1" },
            on: {
              click: function($event) {
                if ($event.target !== $event.currentTarget) {
                  return null
                }
                return _vm.closeModal($event)
              }
            }
          },
          [
            _c(
              "div",
              {
                ref: "document",
                class: _vm.classNames,
                attrs: {
                  "aria-describedby": !!_vm.describedby
                    ? _vm.describedby
                    : false,
                  "aria-labelledby": !!_vm.labelledby ? _vm.labelledby : false,
                  role: "document"
                }
              },
              [
                _c("div", { staticClass: "o-modal__container" }, [
                  _vm.hasClose
                    ? _c(
                        "button",
                        {
                          staticClass: "o-modal__close",
                          attrs: { tabindex: "0" },
                          on: { click: _vm.closeModal }
                        },
                        [
                          _c("Icon", { attrs: { type: "close" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "u-visually-hidden" }, [
                            _vm._v("Close modal")
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "u-p-xl u-bg-theme-background" },
                    [_vm._t("default")],
                    2
                  )
                ])
              ]
            )
          ]
        )
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

var isValidHeadingTag = (str) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(str);

//

var script$3 = {
  props: {
    type: {
      type: String,
      default: 'neutral',
    },

    title: {
      type: String,
      required: false,
    },

    titleTag: {
      type: String,
      default: 'h4',
      validator: (value) => isValidHeadingTag(value),
    },

    hasClose: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    Icon: __vue_component__,
  },
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function(_h, _vm) {
  var _c = _vm._c;
  return _c(
    "div",
    { class: ["c-alert", "c-alert--" + _vm.type] },
    [
      _vm.hasClose
        ? _c(
            "button",
            {
              staticClass: "c-alert__close",
              attrs: { type: "button", name: "closeAlert" }
            },
            [
              _c("Icon", { attrs: { type: "close" } }),
              _vm._v(" "),
              _c("span", { staticClass: "u-visually-hidden" }, [
                _vm._v("\n      Close alert\n    ")
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.title
        ? _c(_vm.titleTag, { tag: "h4", staticClass: "c-alert__title" }, [
            _vm._v("\n    " + _vm._s(_vm.title) + "\n  ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.text
        ? _c("p", [_vm._v("\n    " + _vm._s(_vm.text) + "\n  ")])
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = true;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

const CLOSE = 'close';
const ADD = 'add';

var getUniqueId = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let str = '';
  for (let i = 0; i < 16; i += 1) {
    str += chars.charAt(Math.round(Math.random() * 62));
  }
  return str;
};

const addAlert = ({ commit }, obj) => {
  commit(ADD, {
    ...obj,
    id: getUniqueId(),
  });
};

var actions = {
  addAlert,
};

var mutations = {
  [ADD](state, obj) {
    state.alerts.push(obj);
  },

  [CLOSE](state, index) {
    state.alerts.splice(index, 1);
  },
};

var state = {
  alerts: [],
};

var alertStore = {
  namespaced: true,
  actions,
  mutations,
  state,
};

//

var script$4 = {
  components: {
    Alert: __vue_component__$3,
  },

  computed: {
    ...vuex.mapState('alerts', ['alerts']),
  },

  methods: {
    ...vuex.mapMutations('alerts', [CLOSE]),
  },

  created() {
    if (!this.$store.state.alerts) {
      this.$store.registerModule('alerts', alertStore);
    }
  },
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { attrs: { "aria-live": "polite" } },
    [
      _c(
        "transition-group",
        {
          staticClass: "c-alert__global-container",
          attrs: { mode: "out-in", name: "c-alert-trans", tag: "div" }
        },
        _vm._l(_vm.alerts, function(alert, index) {
          return _c("Alert", {
            key: alert.id,
            attrs: {
              hasClose: true,
              text: alert.text,
              title: alert.title,
              type: alert.type
            },
            on: {
              emitClose: function($event) {
                return _vm.closeAlert(index)
              }
            }
          })
        }),
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$5 = {
  props: {
    navItems: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },

  components: {
    AlertList: __vue_component__$4,
    PortalTarget: portalVue.PortalTarget,
  },

  data() {
    return {
      isNavOpen: false,
    };
  },

  computed: {
    activeSubdir() {
      if (this.$route && this.$route.name) {
        return this.$route.name.split('.')[0];
      }
      return null;
    },

    classNames() {
      const classNames = ['c-site-header'];
      if (this.isNavOpen) {
        classNames.push('active');
      }
      return classNames;
    },

    navToggleIcon() {
      return this.isNavOpen ? 'close' : 'more';
    },
  },

  methods: {
    getNavItemClasses(item) {
      const classes = ['o-list-bare__item', 'c-site-nav__item'];
      if (this.activeSubdir === item.route) {
        classes.push('active');
      }
      return classes;
    },

    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-site", attrs: { id: "app" } },
    [
      _c(
        "a",
        {
          staticClass:
            "u-visually-hidden u-visually-hidden--focus u-bg-red-dark u-c-white u-p",
          attrs: { href: "#site-main", id: "skip-link" }
        },
        [_vm._v("\n    Skip to content\n  ")]
      ),
      _vm._v(" "),
      _c("header", { class: _vm.classNames }, [
        _c(
          "button",
          {
            staticClass: "c-site-nav-toggle u-d-none@m",
            attrs: { name: "toggleNav", type: "button" },
            on: { click: _vm.toggleNav }
          },
          [
            _c("Icon", { attrs: { type: _vm.navToggleIcon } }),
            _vm._v(" "),
            _c("span", { staticClass: "u-visually-hidden" }, [
              _vm._v("Toggle navigation")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "nav",
          { staticClass: "c-site-nav" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "home" } } },
              [_vm._t("navLogo")],
              2
            ),
            _vm._v(" "),
            _vm.navItems.text
              ? _c(
                  "ul",
                  { staticClass: "o-list-bare" },
                  _vm._l(_vm.navItems.text, function(item) {
                    return _c(
                      "li",
                      { key: item.text, class: _vm.getNavItemClasses(item) },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "c-site-nav__link u-p-vert-xs u-p-horiz-s",
                            attrs: {
                              to: {
                                name: item.name,
                                params: Object.assign({}, item.params)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(item.text) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.activeSubdir === item.name && item.sub
                          ? _c(
                              "ul",
                              { staticClass: "o-list-bare" },
                              _vm._l(item.sub, function(subItem) {
                                return _c(
                                  "li",
                                  {
                                    key: subItem.text,
                                    staticClass:
                                      "c-site-nav__link o-list-bare_item u-p-0"
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "u-p-left-l u-p-vert-xs u-font-xs",
                                        attrs: {
                                          to: {
                                            name: subItem.name,
                                            params: Object.assign(
                                              {},
                                              subItem.params
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(subItem.text) +
                                            "\n              "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._t("navActions"),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "o-list-inline u-p-s" },
              _vm._l(_vm.navItems.icons, function(icon) {
                return _c(
                  "li",
                  { key: icon.type, staticClass: "o-list-inline__item" },
                  [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: icon.href,
                          rel: "noreferrer noopener",
                          target: "_blank"
                        }
                      },
                      [
                        _c("Icon", { attrs: { type: icon.type } }),
                        _vm._v(" "),
                        _c("span", { staticClass: "u-visually-hidden" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(icon.text) +
                              " (opens in a new tab)\n            "
                          )
                        ])
                      ],
                      1
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _vm._t("misc"),
            _vm._v(" "),
            _vm._m(0)
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "main",
        { staticClass: "c-site-main", attrs: { id: "site-main" } },
        [_c("router-view")],
        1
      ),
      _vm._v(" "),
      _c("AlertList"),
      _vm._v(" "),
      _c("portal-target", { attrs: { name: "modal", slim: "" } })
    ],
    1
  )
};
var __vue_staticRenderFns__$5 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "c-site-nav__copyright" }, [
      _c("p", { staticClass: "u-font-xs" }, [
        _vm._v("\n          © Brian George 2019\n        ")
      ])
    ])
  }
];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$6 = {
  props: {
    inputId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    dataset: {
      type: Array,
      required: true,
    },
    searchKey: {
      type: String,
      required: false,
    },
    searchExact: {
      type: Boolean,
      default: false,
    },
    resetOnSelect: {
      type: Boolean,
      default: true,
    },
    canAddNew: {
      type: Boolean,
      default: false,
    },
    modifiers: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      query: '',
      activeIndex: 0,
      maxResults: 8,
      resLen: 0,
      showResults: false,
      results: [],
    };
  },
  computed: {
    inputClassNames() {
      let classNames = ['c-input__input'];
      if (this.modifiers) {
        classNames = classNames.concat(this.modifiers);
      }
      return classNames;
    },
  },
  methods: {
    matchExact(a, b) {
      // NOTE: This is more performant than a "starts with" regex
      return a.substr(0, b.length).toLowerCase() === b;
    },
    matchLoose(a, b) {
      return a.toLowerCase().includes(b);
    },
    searchResults() {
      const arr = [];
      const isFlat = !this.searchKey;
      const searchMethod = this.searchExact ? this.matchExact : this.matchLoose;
      if (this.query !== '') {
        const searchQuery = this.query.toLowerCase();

        for (let i = 0; i < this.dataset.length; i += 1) {
          const item = this.dataset[i];
          const key = isFlat ? item : item[this.searchKey];
          if (searchMethod(key, searchQuery)) {
            arr.push(item);

            if (arr.length === this.maxResults) {
              break;
            }
          }
        }
      }
      this.results = arr;
      this.resLen = arr.length === 0 ? 0 : arr.length - 1;
      if (this.activeIndex > this.resLen) {
        this.activeIndex = 0;
      }
    },
    incrementActive() {
      this.activeIndex = this.activeIndex + 1;
      if (this.activeIndex > this.resLen) {
        this.activeIndex = 0;
      }
    },
    decrementActive() {
      this.activeIndex = this.activeIndex - 1;
      if (this.activeIndex < 0) {
        this.activeIndex = this.resLen;
      }
    },
    selectItem(index) {
      if (this.results.length > 0) {
        this.$emit('emitSelect', this.results[index]);
        if (this.resetOnSelect) {
          this.query = '';
        }
      } else if (this.canAddNew) {
        this.$emit('emitAddNew', this.query);
      }
    },
    handleBlur() {
      const that = this;
      // NOTE: This is to allow click events on results to fire before we hide them
      setTimeout(() => {
        that.showResults = false;
      }, 150);
    },
  },
  watch: {
    query() {
      this.searchResults();
    },
  },
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-input c-smart-search" }, [
    _c(
      "label",
      { staticClass: "c-input__label", attrs: { for: _vm.inputId } },
      [_vm._v("\n    " + _vm._s(_vm.label) + "\n  ")]
    ),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.query,
          expression: "query"
        }
      ],
      class: _vm.inputClassNames,
      attrs: {
        id: _vm.inputId,
        type: "search",
        name: _vm.inputId,
        placeholder: "Search",
        autocomplete: "off"
      },
      domProps: { value: _vm.query },
      on: {
        focus: function($event) {
          _vm.showResults = true;
        },
        blur: _vm.handleBlur,
        keydown: [
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            return _vm.decrementActive($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            return _vm.incrementActive($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.selectItem(_vm.activeIndex)
          }
        ],
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.query = $event.target.value;
        }
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showResults,
            expression: "showResults"
          }
        ],
        staticClass: "c-smart-search__results"
      },
      [
        _c(
          "ul",
          { staticClass: "o-list-bare" },
          _vm._l(_vm.results, function(item, index) {
            return _c(
              "li",
              {
                key: item,
                class: {
                  "c-smart-search__results-item": true,
                  active: index === _vm.activeIndex
                },
                on: {
                  click: function($event) {
                    return _vm.selectItem(index)
                  }
                }
              },
              [_vm._v("\n        " + _vm._s(item) + "\n      ")]
            )
          }),
          0
        )
      ]
    )
  ])
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );

const CHECKBOX = 'InputCheckbox';
const KEY_VALUE_PAIR = 'KeyValuePair';
const RADIO = 'InputRadio';
const SELECT = 'InputSelect';
const TEXT = 'InputText';
const TEXTAREA = 'InputTextarea';
const QUILL_RTE = 'QuillRTE';

var fieldTypes = {
  CHECKBOX,
  KEY_VALUE_PAIR,
  RADIO,
  SELECT,
  TEXT,
  TEXTAREA,
  QUILL_RTE,
};

var getMachineSafeStr = (str) => {
  const re = /[^A-Za-z0-9_]+/g;
  return str.replace(re, '_');
};

const baseValue = (field) => field.value;

const compileKeyValuePairs = (field, state) => {
  const pairs = [];
  field.value.forEach((pair) => {
    pairs.push({
      key: state.fields[pair.key].value,
      val: state.fields[pair.val].value
        ? state.fields[pair.val].value : getMachineSafeStr(state.fields[pair.key].value),
    });
  });
  return pairs;
};

const map = {
  [KEY_VALUE_PAIR]: compileKeyValuePairs,
};

var getValueMethod = (type) => map[type] || baseValue;

const COMPARITOR_AND = 'and';
const COMPARITOR_OR = 'or';
const EVAL_IS_ONE_OF = 'isOneOf';
const EVAL_IS = 'is';
const EVAL_NOT = 'not';

var prereqs = {
  COMPARITOR_AND,
  COMPARITOR_OR,
  EVAL_IS_ONE_OF,
  EVAL_IS,
  EVAL_NOT,
};

const CREATE_FORM = 'createForm';
const REGISTER_FIELDS = 'registerFields';
const RESET_FORM = 'resetForm';
const SET_IS_VALID = 'setIsValid';
const SET_IS_VISIBLE = 'setIsVisible';
const UPDATE_FIELD_VALUE = 'updateFieldValue';

/**
 * Normalizes field data.
 *
 * @param {Object} field The field's pertinent data.
 */
const createFieldData = (field) => ({
  value: null,
  isValid: !field.required,
  hasValidated: false,
  getValue: getValueMethod(field.component),
  isVisible: field.prereqs ? field.isVisible : true,
  computeValue: true,
  ...field,
});


/**
 * Registers a form or resets all field values if the form has already been registered.
 *
 * @param {Object} data The form data.
 * @param {String} data.id The form ID.
 * @param {Object[]} data.fields The field data.
 * @param {String} data.fields.id The field's unique ID.
 * @param {String} data.fields.name The field's data name.
 * @param {String} data.fields.component The component to use for this field.
 * @param {Boolean} data.resetIfExists If true, reset this form's data on registration.
 */
const registerForm = ({ commit, state }, data) => {
  // TODO: Split this out, lotta looping
  if (data.id) {
    if (state.forms[data.id]) {
      if (data.resetIfExists) {
        const staticFieldIds = data.fields.map((field) => field.id);
        commit(RESET_FORM, {
          extraFields: lodash.difference(state.forms[data.id].fields, staticFieldIds),
          staticFieldIds,
          formId: data.id,
          fields: data.fields.map((field) => createFieldData(field)),
        });
      }
      return;
    }

    // Initialize field data
    const fields = [];
    const prereqMap = {};
    data.fields.forEach((field) => {
      // Store references for visibility
      if (field.prereqs) {
        field.prereqs.forEach((prereq) => {
          if (!prereqMap[prereq.field]) {
            prereqMap[prereq.field] = [field.id];
            return;
          }
          if (!prereqMap[prereq.field].includes(field.id)) {
            prereqMap[prereq.field].push(field.id);
          }
        });
      }
      // Store the base field data
      fields.push(createFieldData(field));
    });

    const form = {
      id: data.id,
      fields,
      prereqMap,
    };
    commit(CREATE_FORM, form);
  }
};

/**
 * Registers new field data.
 *
 * @param {Object} data
 * @param {String} data.form The form ID to attach the fields to.
 * @param {Object[]} data.fields The field data to initialize.
 */
const registerFields = ({ commit }, data) => {
  const arr = data.fields.map((field) => createFieldData(field));
  commit(REGISTER_FIELDS, { form: data.form, fields: arr });
};

// TODO: I don't know if I am crazy about the switch usage here, classes would solve
/**
 * Evaluates if the form data matches a given set of parameters.
 *
 * @param {Object} state The current form state.
 * @param {Object} data The eval object to match against.
 * @param {String} data.field The field to check against.
 * @param {String} data.eval.method The method to use.
 * @param {Any} data.eval.match The value to match against.
 */
const evalPrereq = (state, data) => {
  switch (data.eval.method) {
    case EVAL_IS_ONE_OF:
      return data.eval.match.includes(state.fields[data.field].value);
    case EVAL_IS:
      return data.eval.match === state.fields[data.field].value;
    case EVAL_NOT:
      // TODO: This doesn't account for array to array comparisons
      if (Array.isArray(state.fields[data.field])) {
        return !state.fields[data.field].includes(data.match);
      }
      return state.fields[data.field] !== data.match;
    default:
      console.error('No valid eval method found.'); // eslint-disable-line no-console
      return false;
  }
};

const checkIfVisible = (state, id) => {
  const field = state.fields[id];
  let hasOr = false;
  for (let i = 0; i < field.prereqs.length; i += 1) {
    const prereq = field.prereqs[i];
    if (!hasOr && prereq.type === COMPARITOR_OR) {
      hasOr = true;
    }

    const passes = evalPrereq(state, prereq);
    if (passes && prereq.type === COMPARITOR_OR) {
      // In OR scenarios, pass on the first positive.
      return passes;
    }
    if (!passes && prereq.type === COMPARITOR_AND) {
      // In AND scenarios, fail on the first negative.
      return passes;
    }
  }
  // If we are here, we have either failed all OR statements or passed all AND statements
  return !hasOr;
};

/**
 * Updates the field's value and handles checking any prerequisites from other fields.
 *
 * @param {Object} data The mutation data.
 * @param {String} data.id The field ID.
 * @param {Any} data.val The field value.
 */
const updateFieldValue = ({ commit, state }, data) => {
  commit(UPDATE_FIELD_VALUE, data);
  if (state.prereqMap[data.id]) {
    state.prereqMap[data.id].forEach((id) => {
      commit(SET_IS_VISIBLE, { id, bool: checkIfVisible(state, id) });
    });
  }
};

var actions$1 = {
  registerForm,
  registerFields,
  updateFieldValue,
};

var getters = {
  /**
   * Loops associated fields to determine validity.
   *
   * @param {String} id The form's ID.
   *
   * @returns {Boolean} isValid.
   */
  isFormValid: (state) => (id) => {
    for (let i = 0; i < state.forms[id].fields.length; i += 1) {
      const fieldId = state.forms[id].fields[i];
      if (state.fields[fieldId].isVisible && !state.fields[fieldId].isValid) {
        return false;
      }
    }
    return true;
  },

  /**
   * Compiles an array of each field's errors.
   *
   * @param {String} id The ID of the form.
   *
   * @returns {Object[]} The error information.
   */
  compileFormErrors: (state) => (id) => {
    const errors = [];
    state.forms[id].fields.forEach((fieldId) => {
      const field = state.fields[fieldId];
      if (field.isVisible && !field.isValid) {
        errors.push({
          id: fieldId,
          label: field.label,
        });
      }
    });
    return errors;
  },

  /**
   * Returns all field data as an object.
   *
   * @param {String} id The form's ID.
   *
   * @returns {Object} The form data object for submission.
   */
  compileFormData: (state) => (id) => {
    const data = {};
    state.forms[id].fields.forEach((field) => {
      const f = state.fields[field];
      if (f.computeValue) {
        if (f.isVisible) {
          data[f.name] = f.getValue(f, state);
        }
      }
    });
    return data;
  },
};

var mutations$1 = {
  [CREATE_FORM](state, form) {
    // Create fields
    form.fields.forEach((field) => {
      Vue.set(state.fields, field.id, field);
    });

    // Create form
    const obj = {
      id: form.id,
      fields: form.fields.map((f) => f.id),
    };
    Vue.set(state.forms, form.id, obj);

    // Create prereq map
    const keys = Object.keys(form.prereqMap);
    keys.forEach((key) => {
      if (state.prereqMap[key]) {
        // TODO: Ensure these keys are unique
        state.prereqMap[key].concat(form.prereqMap[key]);
      } else {
        Vue.set(state.prereqMap, key, form.prereqMap[key]);
      }
    });
  },

  [RESET_FORM](state, obj) {
    // Reset current fields
    obj.fields.forEach((field) => {
      state.fields[field.id] = field;
    });

    // Update fields array on the form
    state.forms[obj.formId].fields = obj.staticFieldIds;
    state.forms[obj.formId].hasBeenValidated = false;

    // Delete excess fields
    obj.extraFields.forEach((field) => {
      delete state.fields[field];
    });
  },

  [SET_IS_VALID](state, obj) {
    state.fields[obj.id].hasValidated = true;
    state.fields[obj.id].isValid = obj.bool;
  },

  [SET_IS_VISIBLE](state, obj) {
    state.fields[obj.id].isVisible = obj.bool;
  },

  [UPDATE_FIELD_VALUE](state, obj) {
    state.fields[obj.id].value = obj.val;
  },

  [REGISTER_FIELDS](state, obj) {
    obj.fields.forEach((f) => {
      Vue.set(state.fields, f.id, f);
      state.forms[obj.form].fields.push(f.id);
    });
  },
};

var state$1 = {
  forms: {},
  fields: {},
  prereqMap: {},
};

var formsStore = {
  namespaced: true,
  actions: actions$1,
  getters,
  mutations: mutations$1,
  state: state$1,
};

//

var script$7 = {
  props: {
    formStructure: {
      type: Object,
      required: true,
      validator: (value) => {
        if (!value.id || typeof value.id !== 'string') {
          return false;
        }
        if (!value.fields || !Array.isArray(value.fields) || value.fields.length === 0) {
          return false;
        }
        return true;
      },
    },
  },

  data() {
    return {
      hasBeenValidated: false,
    };
  },

  computed: {
    isValid() {
      if (!this.hasBeenValidated) {
        return true;
      }
      return this.$store.getters['forms/isFormValid'](this.formStructure.id);
    },

    formErrors() {
      if (this.isValid) {
        return [];
      }
      return this.$store.getters['forms/compileFormErrors'](this.formStructure.id);
    },
  },

  methods: {
    ...vuex.mapActions('forms', ['registerForm']),

    focusField(id) {
      document.getElementById(`vf-${id}`).focus();
    },

    handleSubmit() {
      this.hasBeenValidated = true;
      if (this.isValid) {
        const data = this.$store.getters['forms/compileFormData'](this.formStructure.id);
        this.formStructure.onSubmit(data);
        return;
      }

      // Run validation on all non-validated fields
      this.$refs.field.forEach((field) => {
        if (!field.field.hasValidated) {
          field.validateField();
        }
      });
      this.$refs.errorBox.focus();
    },
  },

  created() {
    if (!this.$store.state.forms) {
      this.$store.registerModule('forms', formsStore);
    }
    this.registerForm(this.formStructure);
  },
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    {
      attrs: { "aria-describedby": _vm.formStructure.id + "__required-msg" },
      on: {
        submit: function($event) {
          $event.preventDefault();
          return _vm.handleSubmit($event)
        }
      }
    },
    [
      _c(
        "p",
        {
          staticClass: "u-font-xs",
          attrs: { id: _vm.formStructure.id + "__required-msg" }
        },
        [_vm._v("\n    * Required Fields\n  ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isValid,
              expression: "!isValid"
            }
          ],
          ref: "errorBox",
          staticClass: "c-alert c-alert--error",
          attrs: {
            "aria-labelledby": _vm.formStructure.id + "__error__title",
            id: _vm.formStructure.id + "__error"
          }
        },
        [
          _c(
            _vm.formStructure.errorHeadingTag || "h3",
            {
              tag: "h3",
              staticClass: "c-alert__title",
              attrs: { id: _vm.formStructure.id + "__error__title" }
            },
            [
              _vm._v(
                "\n      There are issues with the following fields:\n    "
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "c-typography" }, [
            _c(
              "ul",
              { staticClass: "u-font-xs" },
              _vm._l(_vm.formErrors, function(error) {
                return _c("li", { key: error.id }, [
                  _c(
                    "button",
                    {
                      staticClass: "c-btn--text",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.focusField(error.id)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n            " + _vm._s(error.label) + "\n          "
                      )
                    ]
                  )
                ])
              }),
              0
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.formStructure.fields, function(field) {
        return _c(
          "div",
          { key: field.id, staticClass: "u-m-bot" },
          [
            _c(field.component, {
              ref: "field",
              refInFor: true,
              tag: "component",
              attrs: { reference: field.id, formId: _vm.formStructure.id }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "c-btn c-btn--primary",
          attrs: { name: "formSubmit", type: "submit" }
        },
        [
          _vm._v(
            "\n    " + _vm._s(_vm.formStructure.submitText || "Submit") + "\n  "
          )
        ]
      )
    ],
    2
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$7 = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );

const isNotEmpty = {
  test(val) { return val !== null && val.length > 0; },
  errorText(label) { return `${label} must not be empty.`; },
};

const isMachineSafeStr = {
  test(val) {
    const re = /^[A-Za-z0-9_]*$/g;
    return re.test(val);
  },
  errorText() { return 'Enter a machine safe string that contains only letters, numbers, and underscores (_).'; },
};

var vuexFormInput = {
  props: {
    reference: {
      type: String,
      required: true,
    },

    modifiers: {
      type: Array,
      default: () => ([]),
    },
  },

  data() {
    return {
      errorText: '',
      debouncedUpdateFieldValue: lodash.debounce(function (obj) { // eslint-disable-line func-names
        this.updateFieldValue(obj);
      }, 250),
    };
  },

  computed: {
    ...vuex.mapState('forms', {
      field(state) {
        return state.fields[this.reference];
      },
    }),

    showError() {
      return this.field.hasValidated && !this.field.isValid;
    },

    classNames() {
      const classNames = ['c-input'].concat(this.modifiers);
      if (this.field.hasValidated) {
        classNames.push(this.field.isValid ? 'success' : 'error');
      }
      return classNames;
    },
  },

  methods: {
    ...vuex.mapActions('forms', {
      updateFieldValue: UPDATE_FIELD_VALUE,
    }),

    ...vuex.mapMutations('forms', {
      setIsValid: SET_IS_VALID,
    }),

    validateField() {
      const validators = this.field.validation ? this.field.validation.slice(0) : [];
      if (this.field.required) {
        validators.unshift(isNotEmpty);
      } else if (!isNotEmpty.test(this.field.value)) {
        // We are valid but this is empty.
        // TODO: Reset the hasBeenValidated && isValid flag
        return;
      }
      // Ensure that a value is populated
      this.debouncedUpdateFieldValue.flush();
      for (let i = 0; i < validators.length; i += 1) {
        const validation = validators[i];
        if (!validation.test(this.field.value)) {
          this.errorText = validation.errorText(this.field.label);
          this.setIsValid({ id: this.reference, bool: false });
          return;
        }
      }
      this.setIsValid({ id: this.reference, bool: true });
    },
  },
};

//

var script$8 = {
  mixins: [
    vuexFormInput,
  ],

  data() {
    return {
      localValue: [],
    };
  },

  watch: {
    localValue(val) {
      this.updateFieldValue({ id: this.reference, val });
    },
  },

  created() {
    this.localValue = this.field.value || [];
  },
};

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "fieldset",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.field.isVisible,
          expression: "field.isVisible"
        }
      ],
      class: _vm.classNames
    },
    [
      _c("legend", { staticClass: "c-input__label" }, [
        _vm._v(_vm._s(_vm.field.label)),
        _vm.field.required ? _c("sup", [_vm._v("*")]) : _vm._e()
      ]),
      _vm._v(" "),
      _vm._l(_vm.field.options, function(option) {
        return _c("div", { key: option.value, staticClass: "c-input__group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localValue,
                expression: "localValue"
              }
            ],
            staticClass: "c-input__checkbox",
            attrs: {
              "aria-describedby": _vm.showError
                ? "vf-" + _vm.reference + "__error"
                : false,
              "aria-required": _vm.field.required,
              id: "vf-" + _vm.reference + "__" + option.value,
              name: _vm.field.name,
              type: "checkbox"
            },
            domProps: {
              value: option.value,
              checked: Array.isArray(_vm.localValue)
                ? _vm._i(_vm.localValue, option.value) > -1
                : _vm.localValue
            },
            on: {
              blur: _vm.validateField,
              change: function($event) {
                var $$a = _vm.localValue,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false;
                if (Array.isArray($$a)) {
                  var $$v = option.value,
                    $$i = _vm._i($$a, $$v);
                  if ($$el.checked) {
                    $$i < 0 && (_vm.localValue = $$a.concat([$$v]));
                  } else {
                    $$i > -1 &&
                      (_vm.localValue = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)));
                  }
                } else {
                  _vm.localValue = $$c;
                }
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "c-input__label c-input__label--checkbox",
              attrs: { for: "vf-" + _vm.reference + "__" + option.value }
            },
            [_vm._v("\n      " + _vm._s(option.text) + "\n    ")]
          )
        ])
      }),
      _vm._v(" "),
      _vm.showError
        ? _c(
            "p",
            {
              staticClass: "c-input__error",
              attrs: { id: "vf-" + _vm.reference + "__error" }
            },
            [_vm._v("\n    " + _vm._s(_vm.errorText) + "\n  ")]
          )
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$8 = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$9 = {
  mixins: [
    vuexFormInput,
  ],

  computed: {
    fieldVal: {
      get() {
        return this.field.value;
      },
      set(val) {
        this.updateFieldValue({ id: this.reference, val });
      },
    },
  },
};

/* script */
const __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "fieldset",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.field.isVisible,
          expression: "field.isVisible"
        }
      ],
      class: _vm.classNames
    },
    [
      _c("legend", { staticClass: "c-input__label" }, [
        _vm._v(_vm._s(_vm.field.label)),
        _vm.field.required ? _c("sup", [_vm._v("*")]) : _vm._e()
      ]),
      _vm._v(" "),
      _vm._l(_vm.field.options, function(option) {
        return _c("div", { key: option.value, staticClass: "c-input__group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fieldVal,
                expression: "fieldVal"
              }
            ],
            staticClass: "c-input__radio",
            attrs: {
              "aria-describedby": _vm.showError
                ? "vf-" + _vm.reference + "__error"
                : false,
              "aria-required": _vm.field.required,
              id: "vf-" + _vm.reference + "__" + option.value,
              name: _vm.field.name,
              type: "radio"
            },
            domProps: {
              value: option.value,
              checked: _vm._q(_vm.fieldVal, option.value)
            },
            on: {
              blur: _vm.validateField,
              change: function($event) {
                _vm.fieldVal = option.value;
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "c-input__label c-input__label--radio",
              attrs: { for: "vf-" + _vm.reference + "__" + option.value }
            },
            [_vm._v("\n      " + _vm._s(option.text) + "\n    ")]
          )
        ])
      }),
      _vm._v(" "),
      _vm.showError
        ? _c(
            "p",
            {
              staticClass: "c-input__error",
              attrs: { id: "vf-" + _vm.reference + "__error" }
            },
            [_vm._v("\n    " + _vm._s(_vm.errorText) + "\n  ")]
          )
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$9 = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$a = {
  mixins: [
    vuexFormInput,
  ],

  computed: {
    fieldVal: {
      get() {
        return this.field.value;
      },
      set(val) {
        return this.updateFieldValue({ id: this.reference, val });
      },
    },
  },
};

/* script */
const __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.field.isVisible,
          expression: "field.isVisible"
        }
      ],
      class: _vm.classNames
    },
    [
      _c(
        "label",
        {
          staticClass: "c-input__label",
          attrs: { for: "vf-" + _vm.reference }
        },
        [
          _vm._v("\n    " + _vm._s(_vm.field.label)),
          _vm.field.required ? _c("sup", [_vm._v("*")]) : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.fieldVal,
              expression: "fieldVal"
            }
          ],
          staticClass: "c-input__input c-input__input--select",
          attrs: {
            "aria-describedby": _vm.showError
              ? "vf-" + _vm.reference + "__error"
              : false,
            "aria-required": _vm.field.required,
            autocomplete: _vm.field.autocomplete || false,
            id: "vf-" + _vm.reference,
            name: _vm.field.name
          },
          on: {
            blur: _vm.validateField,
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val
                });
              _vm.fieldVal = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0];
            }
          }
        },
        _vm._l(_vm.field.options, function(option) {
          return _c(
            "option",
            { key: option.value, domProps: { value: option.value } },
            [_vm._v("\n      " + _vm._s(option.text) + "\n    ")]
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm.showError
        ? _c(
            "p",
            {
              staticClass: "c-input__error",
              attrs: { id: "vf-" + _vm.reference + "__error" }
            },
            [_vm._v("\n    " + _vm._s(_vm.errorText) + "\n  ")]
          )
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$a = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$b = {
  mixins: [
    vuexFormInput,
  ],

  computed: {
    fieldVal: {
      get() {
        return this.field.value;
      },
      set(val) {
        this.debouncedUpdateFieldValue({ id: this.reference, val });
      },
    },
  },
};

/* script */
const __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.field.isVisible,
          expression: "field.isVisible"
        }
      ],
      class: _vm.classNames
    },
    [
      _c(
        "label",
        {
          staticClass: "c-input__label",
          attrs: { for: "vf-" + _vm.reference }
        },
        [
          _vm._v("\n    " + _vm._s(_vm.field.label)),
          _vm.field.required ? _c("sup", [_vm._v("*")]) : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.fieldVal,
            expression: "fieldVal"
          }
        ],
        staticClass: "c-input__input",
        attrs: {
          "aria-describedby": _vm.showError
            ? "vf-" + _vm.reference + "__error"
            : false,
          "aria-required": _vm.field.required,
          autocomplete: _vm.field.autocomplete || false,
          id: "vf-" + _vm.reference,
          name: _vm.field.name,
          type: "text"
        },
        domProps: { value: _vm.fieldVal },
        on: {
          blur: _vm.validateField,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.fieldVal = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      _vm.showError
        ? _c(
            "p",
            {
              staticClass: "c-input__error",
              attrs: { id: "vf-" + _vm.reference + "__error" }
            },
            [_vm._v("\n    " + _vm._s(_vm.errorText) + "\n  ")]
          )
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$b = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$c = {
  mixins: [
    vuexFormInput,
  ],

  computed: {
    fieldText: {
      get() {
        return this.field.value;
      },
      set(val) {
        this.debouncedUpdateFieldValue({ id: this.reference, val });
      },
    },
  },
};

/* script */
const __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.field.isVisible,
          expression: "field.isVisible"
        }
      ],
      class: _vm.classNames
    },
    [
      _c(
        "label",
        {
          staticClass: "c-input__label",
          attrs: { for: "vf-" + _vm.reference }
        },
        [
          _vm._v("\n    " + _vm._s(_vm.field.label)),
          _vm.field.required ? _c("sup", [_vm._v("*")]) : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.fieldText,
            expression: "fieldText"
          }
        ],
        staticClass: "c-input__input c-input__input--textarea",
        attrs: {
          "aria-describedby": _vm.showError
            ? "vf-" + _vm.reference + "__error"
            : false,
          "aria-required": _vm.field.required,
          id: "vf-" + _vm.reference,
          name: _vm.field.name
        },
        domProps: { value: _vm.fieldText },
        on: {
          blur: _vm.validateField,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.fieldText = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      _vm.showError
        ? _c(
            "p",
            {
              staticClass: "c-input__error",
              attrs: { id: "vf-" + _vm.reference + "__error" }
            },
            [_vm._v("\n    " + _vm._s(_vm.errorText) + "\n  ")]
          )
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$c = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$d = {
  props: {
    formId: {
      type: String,
      required: true,
    },
  },

  mixins: [
    vuexFormInput,
  ],

  components: {
    Icon: __vue_component__,
    InputText: __vue_component__$b,
  },

  data() {
    return {
      pairs: [],
    };
  },

  methods: {
    ...vuex.mapActions('forms', ['registerFields']),

    addNewItem() {
      const idA = getUniqueId();
      const fieldA = {
        id: idA,
        name: 'option_key',
        label: 'Option Name',
        required: true,
        computeValue: false,
        ...this.field.fieldA,
      };

      const idB = getUniqueId();
      const fieldB = {
        id: idB,
        name: 'option_val',
        label: 'Option Value',
        isValid: true,
        computeValue: false,
        validation: [
          isMachineSafeStr,
        ],
        ...this.field.fieldB,
      };

      this.registerFields({ form: this.formId, fields: [fieldA, fieldB] });
      this.pairs.push({ key: idA, val: idB });
      this.updateFieldValue({ id: this.reference, val: this.pairs.slice(0) });
      this.validateField();
    },
    // TODO: Add a delete pair method that deregisters fields and potentially sets invalid
  },
};

/* script */
const __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "fieldset",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.field.isVisible,
          expression: "field.isVisible"
        }
      ]
    },
    [
      _c("legend", { staticClass: "c-input__legend u-m-bot-xs" }, [
        _vm._v("\n    " + _vm._s(_vm.field.label)),
        _vm.field.required ? _c("sup", [_vm._v("*")]) : _vm._e()
      ]),
      _vm._v(" "),
      _vm._l(_vm.pairs, function(pair) {
        return _c("div", { key: pair.key, staticClass: "u-m-bot-xs" }, [
          _c(
            "div",
            { staticClass: "o-grid o-grid--6-6" },
            [
              _c("InputText", { attrs: { reference: pair.key } }),
              _vm._v(" "),
              _c("InputText", { attrs: { reference: pair.val } })
            ],
            1
          )
        ])
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "c-btn--ui",
          attrs: { type: "button" },
          on: { click: _vm.addNewItem }
        },
        [
          _c("Icon", { attrs: { type: "add" } }),
          _vm._v(" " + _vm._s(_vm.field.addNewText) + "\n  ")
        ],
        1
      )
    ],
    2
  )
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = undefined;
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$d = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$e = {
  mixins: [
    vuexFormInput,
  ],

  data() {
    return {
      quill: null,
    };
  },

  // TODO: Look at ways to integrate with Quill to pass this value every so often
  methods: {
    setFieldVal() {
      this.debouncedUpdateFieldValue({
        id: this.reference,
        val: this.quill.getContents,
      });
    },
  },

  mounted() {
    this.quill = new Quill(`#vf-${this.reference}`, {
      modules: {
        toolbar: [
          [{ header: [2, 3, 4, false] }],
          ['bold', 'italic', 'underline'],
        ],
        scrollingContainer: `#vf-${this.reference}__quill-container`,
        theme: 'snow',
      },
    });
  },
};

/* script */
const __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.field.isVisible,
          expression: "field.isVisible"
        }
      ],
      class: _vm.classNames
    },
    [
      _c(
        "label",
        {
          staticClass: "c-input__label",
          attrs: { for: "vf-" + _vm.reference }
        },
        [
          _vm._v("\n    " + _vm._s(_vm.field.label)),
          _vm.field.required ? _c("sup", [_vm._v("*")]) : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "c-quill",
          attrs: { id: "vf-" + _vm.reference + "__quill-container" }
        },
        [_c("div", { attrs: { id: "vf-" + _vm.reference } })]
      ),
      _vm._v(" "),
      _vm.showError
        ? _c(
            "p",
            {
              staticClass: "c-input__error",
              attrs: { id: "vf-" + _vm.reference + "__error" }
            },
            [_vm._v("\n    " + _vm._s(_vm.errorText) + "\n  ")]
          )
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = function (inject) {
    if (!inject) return
    inject("data-v-1c558098_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\ncursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\nmargin: 0;\npadding: 0;\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\npadding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\nlist-style-type: none;\n}\n.ql-editor ul > li::before {\ncontent: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\npointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\ncolor: #777;\ncursor: pointer;\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\ncontent: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\ncontent: '\\2610';\n}\n.ql-editor li::before {\ndisplay: inline-block;\nwhite-space: nowrap;\nwidth: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\nmargin-left: -1.5em;\nmargin-right: 0.3em;\ntext-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\nmargin-left: 0.3em;\nmargin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\npadding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\npadding-right: 1.5em;\n}\n.ql-editor ol li {\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\ncounter-increment: list-0;\n}\n.ql-editor ol li:before {\ncontent: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\ncontent: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\ncontent: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\ncontent: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\ncontent: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\ncontent: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\ncontent: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\ncontent: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\ncontent: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\ncounter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\ncontent: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 28.5em;\n}\n.ql-editor .ql-video {\ndisplay: block;\nmax-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\nmargin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\nmargin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\nbackground-color: #000;\n}\n.ql-editor .ql-bg-red {\nbackground-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\nbackground-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\nbackground-color: #ff0;\n}\n.ql-editor .ql-bg-green {\nbackground-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\nbackground-color: #06c;\n}\n.ql-editor .ql-bg-purple {\nbackground-color: #93f;\n}\n.ql-editor .ql-color-white {\ncolor: #fff;\n}\n.ql-editor .ql-color-red {\ncolor: #e60000;\n}\n.ql-editor .ql-color-orange {\ncolor: #f90;\n}\n.ql-editor .ql-color-yellow {\ncolor: #ff0;\n}\n.ql-editor .ql-color-green {\ncolor: #008a00;\n}\n.ql-editor .ql-color-blue {\ncolor: #06c;\n}\n.ql-editor .ql-color-purple {\ncolor: #93f;\n}\n.ql-editor .ql-font-serif {\nfont-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\nfont-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\nfont-size: 0.75em;\n}\n.ql-editor .ql-size-large {\nfont-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\nfont-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\ndirection: rtl;\ntext-align: inherit;\n}\n.ql-editor .ql-align-center {\ntext-align: center;\n}\n.ql-editor .ql-align-justify {\ntext-align: justify;\n}\n.ql-editor .ql-align-right {\ntext-align: right;\n}\n.ql-editor.ql-blank::before {\ncolor: rgba(0,0,0,0.6);\ncontent: attr(data-placeholder);\nfont-style: italic;\nleft: 15px;\npointer-events: none;\nposition: absolute;\nright: 15px;\n}\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\nbox-sizing: border-box;\nfont-family: Helvetica, Arial, sans-serif;\nfont-size: 13px;\nheight: 100%;\nmargin: 0px;\nposition: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\nvisibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\npointer-events: none;\n}\n.ql-clipboard {\nleft: -100000px;\nheight: 1px;\noverflow-y: hidden;\nposition: absolute;\ntop: 50%;\n}\n.ql-clipboard p {\nmargin: 0;\npadding: 0;\n}\n.ql-editor {\nbox-sizing: border-box;\nline-height: 1.42;\nheight: 100%;\noutline: none;\noverflow-y: auto;\npadding: 12px 15px;\ntab-size: 4;\n-moz-tab-size: 4;\ntext-align: left;\nwhite-space: pre-wrap;\nword-wrap: break-word;\n}\n.ql-editor > * {\ncursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\nmargin: 0;\npadding: 0;\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\npadding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\nlist-style-type: none;\n}\n.ql-editor ul > li::before {\ncontent: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\npointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\ncolor: #777;\ncursor: pointer;\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\ncontent: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\ncontent: '\\2610';\n}\n.ql-editor li::before {\ndisplay: inline-block;\nwhite-space: nowrap;\nwidth: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\nmargin-left: -1.5em;\nmargin-right: 0.3em;\ntext-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\nmargin-left: 0.3em;\nmargin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\npadding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\npadding-right: 1.5em;\n}\n.ql-editor ol li {\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\ncounter-increment: list-0;\n}\n.ql-editor ol li:before {\ncontent: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\ncontent: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\ncontent: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\ncontent: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\ncontent: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\ncontent: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\ncontent: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\ncontent: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\ncontent: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\ncounter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\ncontent: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 28.5em;\n}\n.ql-editor .ql-video {\ndisplay: block;\nmax-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\nmargin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\nmargin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\nbackground-color: #000;\n}\n.ql-editor .ql-bg-red {\nbackground-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\nbackground-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\nbackground-color: #ff0;\n}\n.ql-editor .ql-bg-green {\nbackground-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\nbackground-color: #06c;\n}\n.ql-editor .ql-bg-purple {\nbackground-color: #93f;\n}\n.ql-editor .ql-color-white {\ncolor: #fff;\n}\n.ql-editor .ql-color-red {\ncolor: #e60000;\n}\n.ql-editor .ql-color-orange {\ncolor: #f90;\n}\n.ql-editor .ql-color-yellow {\ncolor: #ff0;\n}\n.ql-editor .ql-color-green {\ncolor: #008a00;\n}\n.ql-editor .ql-color-blue {\ncolor: #06c;\n}\n.ql-editor .ql-color-purple {\ncolor: #93f;\n}\n.ql-editor .ql-font-serif {\nfont-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\nfont-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\nfont-size: 0.75em;\n}\n.ql-editor .ql-size-large {\nfont-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\nfont-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\ndirection: rtl;\ntext-align: inherit;\n}\n.ql-editor .ql-align-center {\ntext-align: center;\n}\n.ql-editor .ql-align-justify {\ntext-align: justify;\n}\n.ql-editor .ql-align-right {\ntext-align: right;\n}\n.ql-editor.ql-blank::before {\ncolor: rgba(0,0,0,0.6);\ncontent: attr(data-placeholder);\nfont-style: italic;\nleft: 15px;\npointer-events: none;\nposition: absolute;\nright: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\nclear: both;\ncontent: '';\ndisplay: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\nbackground: none;\nborder: none;\ncursor: pointer;\ndisplay: inline-block;\nfloat: left;\nheight: 24px;\npadding: 3px 5px;\nwidth: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\nfloat: left;\nheight: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\noutline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\ndisplay: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\ncolor: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\nfill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\nstroke: #06c;\n}\n@media (pointer: coarse) {\n.ql-snow.ql-toolbar button:hover:not(.ql-active),\n.ql-snow .ql-toolbar button:hover:not(.ql-active) {\n  color: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n  stroke: #444;\n}\n}\n.ql-snow {\nbox-sizing: border-box;\n}\n.ql-snow * {\nbox-sizing: border-box;\n}\n.ql-snow .ql-hidden {\ndisplay: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\nvisibility: hidden;\n}\n.ql-snow .ql-tooltip {\nposition: absolute;\ntransform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\ncursor: pointer;\ntext-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\ntransform: translateY(-10px);\n}\n.ql-snow .ql-formats {\ndisplay: inline-block;\nvertical-align: middle;\n}\n.ql-snow .ql-formats:after {\nclear: both;\ncontent: '';\ndisplay: table;\n}\n.ql-snow .ql-stroke {\nfill: none;\nstroke: #444;\nstroke-linecap: round;\nstroke-linejoin: round;\nstroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\nfill: none;\nstroke: #444;\nstroke-miterlimit: 10;\nstroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\nfill: #444;\n}\n.ql-snow .ql-empty {\nfill: none;\n}\n.ql-snow .ql-even {\nfill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\nstroke-width: 1;\n}\n.ql-snow .ql-transparent {\nopacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\ndisplay: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\ndisplay: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\ndisplay: none;\n}\n.ql-snow .ql-editor h1 {\nfont-size: 2em;\n}\n.ql-snow .ql-editor h2 {\nfont-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\nfont-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\nfont-size: 1em;\n}\n.ql-snow .ql-editor h5 {\nfont-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\nfont-size: 0.67em;\n}\n.ql-snow .ql-editor a {\ntext-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\nborder-left: 4px solid #ccc;\nmargin-bottom: 5px;\nmargin-top: 5px;\npadding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\nbackground-color: #f0f0f0;\nborder-radius: 3px;\n}\n.ql-snow .ql-editor pre {\nwhite-space: pre-wrap;\nmargin-bottom: 5px;\nmargin-top: 5px;\npadding: 5px 10px;\n}\n.ql-snow .ql-editor code {\nfont-size: 85%;\npadding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\nbackground-color: #23241f;\ncolor: #f8f8f2;\noverflow: visible;\n}\n.ql-snow .ql-editor img {\nmax-width: 100%;\n}\n.ql-snow .ql-picker {\ncolor: #444;\ndisplay: inline-block;\nfloat: left;\nfont-size: 14px;\nfont-weight: 500;\nheight: 24px;\nposition: relative;\nvertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n", map: {"version":3,"sources":["/Users/briangeorge/Documents/funtimes/vue-base/src/components/forms/fields/QuillRTE.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsEA;;;;;CAKA;AACA;EACA,sBAAA;EACA,yCAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;AACA;AACA;EACA,SAAA;EACA,UAAA;AACA;AACA;EACA,sBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;EACA,qBAAA;AACA;AACA;AACA,YAAA;AACA;AACA;;;;;;;;;;;AAWA,SAAA;AACA,UAAA;AACA,6EAAA;AACA;AACA;;AAEA,mBAAA;AACA;AACA;;AAEA,qBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;;AAEA,oBAAA;AACA;AACA;;AAEA,mBAAA;AACA;AACA;;AAEA,WAAA;AACA,eAAA;AACA,mBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;AACA,qBAAA;AACA,mBAAA;AACA,YAAA;AACA;AACA;AACA,mBAAA;AACA,mBAAA;AACA,iBAAA;AACA;AACA;AACA,kBAAA;AACA,oBAAA;AACA;AACA;;AAEA,mBAAA;AACA;AACA;;AAEA,oBAAA;AACA;AACA;AACA,6EAAA;AACA,yBAAA;AACA;AACA;AACA,sCAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,sEAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,+DAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sCAAA;AACA;AACA;AACA,wDAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,iDAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sCAAA;AACA;AACA;AACA,mCAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,4BAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sCAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,cAAA;AACA,eAAA;AACA;AACA;AACA,cAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,cAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,cAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,4CAAA;AACA;AACA;AACA,2CAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;AACA,cAAA;AACA,mBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,sBAAA;AACA,+BAAA;AACA,kBAAA;AACA,UAAA;AACA,oBAAA;AACA,kBAAA;AACA,WAAA;AACA;AACA;;;;;CAKA;AACA;AACA,sBAAA;AACA,yCAAA;AACA,eAAA;AACA,YAAA;AACA,WAAA;AACA,kBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,eAAA;AACA,WAAA;AACA,kBAAA;AACA,kBAAA;AACA,QAAA;AACA;AACA;AACA,SAAA;AACA,UAAA;AACA;AACA;AACA,sBAAA;AACA,iBAAA;AACA,YAAA;AACA,aAAA;AACA,gBAAA;AACA,kBAAA;AACA,WAAA;AACA,gBAAA;AACA,gBAAA;AACA,qBAAA;AACA,qBAAA;AACA;AACA;AACA,YAAA;AACA;AACA;;;;;;;;;;;AAWA,SAAA;AACA,UAAA;AACA,6EAAA;AACA;AACA;;AAEA,mBAAA;AACA;AACA;;AAEA,qBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;;AAEA,oBAAA;AACA;AACA;;AAEA,mBAAA;AACA;AACA;;AAEA,WAAA;AACA,eAAA;AACA,mBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;AACA,qBAAA;AACA,mBAAA;AACA,YAAA;AACA;AACA;AACA,mBAAA;AACA,mBAAA;AACA,iBAAA;AACA;AACA;AACA,kBAAA;AACA,oBAAA;AACA;AACA;;AAEA,mBAAA;AACA;AACA;;AAEA,oBAAA;AACA;AACA;AACA,6EAAA;AACA,yBAAA;AACA;AACA;AACA,sCAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,sEAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,+DAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sCAAA;AACA;AACA;AACA,wDAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,iDAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sCAAA;AACA;AACA;AACA,mCAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,4BAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,0CAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sCAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,oBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,qBAAA;AACA;AACA;AACA,cAAA;AACA,eAAA;AACA;AACA;AACA,cAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,yBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,cAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,cAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,WAAA;AACA;AACA;AACA,4CAAA;AACA;AACA;AACA,2CAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;AACA,cAAA;AACA,mBAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;AACA,mBAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,sBAAA;AACA,+BAAA;AACA,kBAAA;AACA,UAAA;AACA,oBAAA;AACA,kBAAA;AACA,WAAA;AACA;AACA;;AAEA,WAAA;AACA,WAAA;AACA,cAAA;AACA;AACA;;AAEA,gBAAA;AACA,YAAA;AACA,eAAA;AACA,qBAAA;AACA,WAAA;AACA,YAAA;AACA,gBAAA;AACA,WAAA;AACA;AACA;;AAEA,WAAA;AACA,YAAA;AACA;AACA;;AAEA,aAAA;AACA;AACA;;AAEA,aAAA;AACA;AACA;;;;;;;;;;;;;;AAcA,WAAA;AACA;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BA,UAAA;AACA;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BA,YAAA;AACA;AACA;AACA;;EAEA,WAAA;AACA;AACA;;;;EAIA,UAAA;AACA;AACA;;;;EAIA,YAAA;AACA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,sBAAA;AACA;AACA;AACA,aAAA;AACA;AACA;;AAEA,kBAAA;AACA;AACA;AACA,kBAAA;AACA,2BAAA;AACA;AACA;AACA,eAAA;AACA,qBAAA;AACA;AACA;AACA,4BAAA;AACA;AACA;AACA,qBAAA;AACA,sBAAA;AACA;AACA;AACA,WAAA;AACA,WAAA;AACA,cAAA;AACA;AACA;AACA,UAAA;AACA,YAAA;AACA,qBAAA;AACA,sBAAA;AACA,eAAA;AACA;AACA;AACA,UAAA;AACA,YAAA;AACA,qBAAA;AACA,eAAA;AACA;AACA;;AAEA,UAAA;AACA;AACA;AACA,UAAA;AACA;AACA;AACA,kBAAA;AACA;AACA;;AAEA,eAAA;AACA;AACA;AACA,YAAA;AACA;AACA;AACA,aAAA;AACA;AACA;AACA,eAAA;AACA;AACA;AACA,aAAA;AACA;AACA;AACA,cAAA;AACA;AACA;AACA,gBAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,cAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,iBAAA;AACA;AACA;AACA,0BAAA;AACA;AACA;AACA,2BAAA;AACA,kBAAA;AACA,eAAA;AACA,kBAAA;AACA;AACA;;AAEA,yBAAA;AACA,kBAAA;AACA;AACA;AACA,qBAAA;AACA,kBAAA;AACA,eAAA;AACA,iBAAA;AACA;AACA;AACA,cAAA;AACA,gBAAA;AACA;AACA;AACA,yBAAA;AACA,cAAA;AACA,iBAAA;AACA;AACA;AACA,eAAA;AACA;AACA;AACA,WAAA;AACA,qBAAA;AACA,WAAA;AACA,eAAA;AACA,gBAAA;AACA,YAAA;AACA,kBAAA;AACA,sBAAA;AACA;AACA;EACA,eAAA;EACA,qBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AACA;AACA;EACA,qBAAA;EACA,iBAAA;AACA;AACA;EACA,sBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;AACA;AACA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;AACA;AACA;EACA,WAAA;EACA,UAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,cAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;AACA;AACA;;EAEA,WAAA;AACA;AACA;;EAEA,gBAAA;AACA;AACA;;EAEA,UAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AACA;AACA;EACA,gBAAA;EACA,YAAA;AACA;AACA;EACA,6BAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;AACA;AACA;EACA,kBAAA;EACA,gBAAA;EACA,QAAA;EACA,QAAA;EACA,WAAA;AACA;AACA;;;;;;EAMA,yBAAA;AACA;AACA;EACA,WAAA;AACA;AACA;;EAEA,iBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;EACA,cAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,cAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,YAAA;AACA;AACA;;EAEA,qBAAA;AACA;AACA;;EAEA,gBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;EACA,4CAAA;AACA;AACA;EACA,2CAAA;AACA;AACA;EACA,WAAA;AACA;AACA;;EAEA,iBAAA;AACA;AACA;;EAEA,gBAAA;AACA;AACA;;EAEA,gBAAA;AACA;AACA;;EAEA,eAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,sBAAA;EACA,sBAAA;EACA,+DAAA;EACA,YAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,6BAAA;AACA;AACA;EACA,6BAAA;EACA,qCAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;;EAEA,kBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,sBAAA;EACA,sBAAA;EACA,4BAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;AACA;AACA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;AACA;AACA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AACA;AACA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;;EAEA,aAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,sBAAA;AACA","file":"QuillRTE.vue","sourcesContent":["<template>\n  <div\n    v-show=\"field.isVisible\"\n    :class=\"classNames\"\n  >\n    <label\n      :for=\"`vf-${reference}`\"\n      class=\"c-input__label\"\n    >\n      {{ field.label }}<sup v-if=\"field.required\">*</sup>\n    </label>\n    <div\n      :id=\"`vf-${reference}__quill-container`\"\n      class=\"c-quill\"\n    >\n      <div :id=\"`vf-${reference}`\">\n        <!-- Quill.js -->\n      </div>\n    </div>\n    <p\n      :id=\"`vf-${reference}__error`\"\n      class=\"c-input__error\"\n      v-if=\"showError\"\n    >\n      {{ errorText }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport Quill from 'quill';\nimport vuexFormInput from '../mixins/vuexFormInput';\n\nexport default {\n  mixins: [\n    vuexFormInput,\n  ],\n\n  data() {\n    return {\n      quill: null,\n    };\n  },\n\n  // TODO: Look at ways to integrate with Quill to pass this value every so often\n  methods: {\n    setFieldVal() {\n      this.debouncedUpdateFieldValue({\n        id: this.reference,\n        val: this.quill.getContents,\n      });\n    },\n  },\n\n  mounted() {\n    this.quill = new Quill(`#vf-${this.reference}`, {\n      modules: {\n        toolbar: [\n          [{ header: [2, 3, 4, false] }],\n          ['bold', 'italic', 'underline'],\n        ],\n        scrollingContainer: `#vf-${this.reference}__quill-container`,\n        theme: 'snow',\n      },\n    });\n  },\n};\n</script>\n\n<style lang=\"css\">\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\ncursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\nmargin: 0;\npadding: 0;\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\npadding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\nlist-style-type: none;\n}\n.ql-editor ul > li::before {\ncontent: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\npointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\ncolor: #777;\ncursor: pointer;\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\ncontent: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\ncontent: '\\2610';\n}\n.ql-editor li::before {\ndisplay: inline-block;\nwhite-space: nowrap;\nwidth: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\nmargin-left: -1.5em;\nmargin-right: 0.3em;\ntext-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\nmargin-left: 0.3em;\nmargin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\npadding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\npadding-right: 1.5em;\n}\n.ql-editor ol li {\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\ncounter-increment: list-0;\n}\n.ql-editor ol li:before {\ncontent: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\ncontent: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\ncontent: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\ncontent: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\ncontent: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\ncontent: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\ncontent: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\ncontent: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\ncontent: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\ncounter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\ncontent: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 28.5em;\n}\n.ql-editor .ql-video {\ndisplay: block;\nmax-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\nmargin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\nmargin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\nbackground-color: #000;\n}\n.ql-editor .ql-bg-red {\nbackground-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\nbackground-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\nbackground-color: #ff0;\n}\n.ql-editor .ql-bg-green {\nbackground-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\nbackground-color: #06c;\n}\n.ql-editor .ql-bg-purple {\nbackground-color: #93f;\n}\n.ql-editor .ql-color-white {\ncolor: #fff;\n}\n.ql-editor .ql-color-red {\ncolor: #e60000;\n}\n.ql-editor .ql-color-orange {\ncolor: #f90;\n}\n.ql-editor .ql-color-yellow {\ncolor: #ff0;\n}\n.ql-editor .ql-color-green {\ncolor: #008a00;\n}\n.ql-editor .ql-color-blue {\ncolor: #06c;\n}\n.ql-editor .ql-color-purple {\ncolor: #93f;\n}\n.ql-editor .ql-font-serif {\nfont-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\nfont-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\nfont-size: 0.75em;\n}\n.ql-editor .ql-size-large {\nfont-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\nfont-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\ndirection: rtl;\ntext-align: inherit;\n}\n.ql-editor .ql-align-center {\ntext-align: center;\n}\n.ql-editor .ql-align-justify {\ntext-align: justify;\n}\n.ql-editor .ql-align-right {\ntext-align: right;\n}\n.ql-editor.ql-blank::before {\ncolor: rgba(0,0,0,0.6);\ncontent: attr(data-placeholder);\nfont-style: italic;\nleft: 15px;\npointer-events: none;\nposition: absolute;\nright: 15px;\n}\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\nbox-sizing: border-box;\nfont-family: Helvetica, Arial, sans-serif;\nfont-size: 13px;\nheight: 100%;\nmargin: 0px;\nposition: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\nvisibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\npointer-events: none;\n}\n.ql-clipboard {\nleft: -100000px;\nheight: 1px;\noverflow-y: hidden;\nposition: absolute;\ntop: 50%;\n}\n.ql-clipboard p {\nmargin: 0;\npadding: 0;\n}\n.ql-editor {\nbox-sizing: border-box;\nline-height: 1.42;\nheight: 100%;\noutline: none;\noverflow-y: auto;\npadding: 12px 15px;\ntab-size: 4;\n-moz-tab-size: 4;\ntext-align: left;\nwhite-space: pre-wrap;\nword-wrap: break-word;\n}\n.ql-editor > * {\ncursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\nmargin: 0;\npadding: 0;\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\npadding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\nlist-style-type: none;\n}\n.ql-editor ul > li::before {\ncontent: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\npointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\ncolor: #777;\ncursor: pointer;\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\ncontent: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\ncontent: '\\2610';\n}\n.ql-editor li::before {\ndisplay: inline-block;\nwhite-space: nowrap;\nwidth: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\nmargin-left: -1.5em;\nmargin-right: 0.3em;\ntext-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\nmargin-left: 0.3em;\nmargin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\npadding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\npadding-right: 1.5em;\n}\n.ql-editor ol li {\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\ncounter-increment: list-0;\n}\n.ql-editor ol li:before {\ncontent: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\ncontent: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\ncontent: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\ncontent: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\ncontent: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\ncontent: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\ncontent: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\ncontent: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\ncontent: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\ncounter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\ncontent: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 28.5em;\n}\n.ql-editor .ql-video {\ndisplay: block;\nmax-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\nmargin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\nmargin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\nbackground-color: #000;\n}\n.ql-editor .ql-bg-red {\nbackground-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\nbackground-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\nbackground-color: #ff0;\n}\n.ql-editor .ql-bg-green {\nbackground-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\nbackground-color: #06c;\n}\n.ql-editor .ql-bg-purple {\nbackground-color: #93f;\n}\n.ql-editor .ql-color-white {\ncolor: #fff;\n}\n.ql-editor .ql-color-red {\ncolor: #e60000;\n}\n.ql-editor .ql-color-orange {\ncolor: #f90;\n}\n.ql-editor .ql-color-yellow {\ncolor: #ff0;\n}\n.ql-editor .ql-color-green {\ncolor: #008a00;\n}\n.ql-editor .ql-color-blue {\ncolor: #06c;\n}\n.ql-editor .ql-color-purple {\ncolor: #93f;\n}\n.ql-editor .ql-font-serif {\nfont-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\nfont-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\nfont-size: 0.75em;\n}\n.ql-editor .ql-size-large {\nfont-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\nfont-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\ndirection: rtl;\ntext-align: inherit;\n}\n.ql-editor .ql-align-center {\ntext-align: center;\n}\n.ql-editor .ql-align-justify {\ntext-align: justify;\n}\n.ql-editor .ql-align-right {\ntext-align: right;\n}\n.ql-editor.ql-blank::before {\ncolor: rgba(0,0,0,0.6);\ncontent: attr(data-placeholder);\nfont-style: italic;\nleft: 15px;\npointer-events: none;\nposition: absolute;\nright: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\nclear: both;\ncontent: '';\ndisplay: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\nbackground: none;\nborder: none;\ncursor: pointer;\ndisplay: inline-block;\nfloat: left;\nheight: 24px;\npadding: 3px 5px;\nwidth: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\nfloat: left;\nheight: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\noutline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\ndisplay: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\ncolor: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\nfill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\nstroke: #06c;\n}\n@media (pointer: coarse) {\n.ql-snow.ql-toolbar button:hover:not(.ql-active),\n.ql-snow .ql-toolbar button:hover:not(.ql-active) {\n  color: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n  stroke: #444;\n}\n}\n.ql-snow {\nbox-sizing: border-box;\n}\n.ql-snow * {\nbox-sizing: border-box;\n}\n.ql-snow .ql-hidden {\ndisplay: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\nvisibility: hidden;\n}\n.ql-snow .ql-tooltip {\nposition: absolute;\ntransform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\ncursor: pointer;\ntext-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\ntransform: translateY(-10px);\n}\n.ql-snow .ql-formats {\ndisplay: inline-block;\nvertical-align: middle;\n}\n.ql-snow .ql-formats:after {\nclear: both;\ncontent: '';\ndisplay: table;\n}\n.ql-snow .ql-stroke {\nfill: none;\nstroke: #444;\nstroke-linecap: round;\nstroke-linejoin: round;\nstroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\nfill: none;\nstroke: #444;\nstroke-miterlimit: 10;\nstroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\nfill: #444;\n}\n.ql-snow .ql-empty {\nfill: none;\n}\n.ql-snow .ql-even {\nfill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\nstroke-width: 1;\n}\n.ql-snow .ql-transparent {\nopacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\ndisplay: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\ndisplay: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\ndisplay: none;\n}\n.ql-snow .ql-editor h1 {\nfont-size: 2em;\n}\n.ql-snow .ql-editor h2 {\nfont-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\nfont-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\nfont-size: 1em;\n}\n.ql-snow .ql-editor h5 {\nfont-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\nfont-size: 0.67em;\n}\n.ql-snow .ql-editor a {\ntext-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\nborder-left: 4px solid #ccc;\nmargin-bottom: 5px;\nmargin-top: 5px;\npadding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\nbackground-color: #f0f0f0;\nborder-radius: 3px;\n}\n.ql-snow .ql-editor pre {\nwhite-space: pre-wrap;\nmargin-bottom: 5px;\nmargin-top: 5px;\npadding: 5px 10px;\n}\n.ql-snow .ql-editor code {\nfont-size: 85%;\npadding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\nbackground-color: #23241f;\ncolor: #f8f8f2;\noverflow: visible;\n}\n.ql-snow .ql-editor img {\nmax-width: 100%;\n}\n.ql-snow .ql-picker {\ncolor: #444;\ndisplay: inline-block;\nfloat: left;\nfont-size: 14px;\nfont-weight: 500;\nheight: 24px;\nposition: relative;\nvertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$e = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    false,
    vueRuntimeHelpers.createInjector,
    undefined,
    undefined
  );

// Forms

var index = {
  forms: {
    fieldTypes,
    prereqs,
  },
};

var index$1 = {
  getMachineSafeStr,
  getUniqueId,
  isValidHeadingTag,
};

var index$2 = {
  install(Vue, options = {
    prefix: '',
  }) {
    Vue.component(`${options.prefix}ExternalLink`, __vue_component__$1);
    Vue.component(`${options.prefix}Icon`, __vue_component__);
    Vue.component(`${options.prefix}Modal`, __vue_component__$2);
    Vue.component('Portal', portalVue.Portal);
    Vue.component('PortalTarget', portalVue.PortalTarget);
    Vue.component(`${options.prefix}SidebarLayout`, __vue_component__$5);
    Vue.component(`${options.prefix}SmartSearch`, __vue_component__$6);
    Vue.component(`${options.prefix}VuexForm`, __vue_component__$7);
    Vue.component(`${options.prefix}InputCheckbox`, __vue_component__$8);
    Vue.component(`${options.prefix}InputRadio`, __vue_component__$9);
    Vue.component(`${options.prefix}InputSelect`, __vue_component__$a);
    Vue.component(`${options.prefix}InputText`, __vue_component__$b);
    Vue.component(`${options.prefix}InputTextarea`, __vue_component__$c);
    Vue.component(`${options.prefix}KeyValuePair`, __vue_component__$d);
    Vue.component(`${options.prefix}QuillRTE`, __vue_component__$e);
  },
};

exports.ExternalLink = __vue_component__$1;
exports.Icon = __vue_component__;
exports.Modal = __vue_component__$2;
exports.SidebarLayout = __vue_component__$5;
exports.SmartSearch = __vue_component__$6;
exports.VuexForm = __vue_component__$7;
exports.constants = index;
exports.default = index$2;
exports.utils = index$1;
