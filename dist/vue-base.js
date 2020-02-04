'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var vueRuntimeHelpers = require('vue-runtime-helpers');
var ally_js = require('ally.js');
var portalVue = require('portal-vue');
var vuex = require('vuex');
var lodash = require('lodash');
var Vue = _interopDefault(require('vue'));
var Quill = _interopDefault(require('quill'));
var Draggable = _interopDefault(require('vuedraggable'));

var add = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z";
var check = "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
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
	check: check,
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
                          staticClass: "c-btn c-btn--icon c-btn--close",
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
                    { staticClass: "u-p-xl u-bg-theme-bg" },
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
    state: {
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

    text: {
      type: String,
      required: false,
    },

    hasClose: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    Icon: __vue_component__,
  },

  data() {
    return {
      timer: null,
    };
  },

  methods: {
    closeAlert() {
      this.$emit('emitClose');
    },
  },

  created() {
    if (this.hasClose) {
      this.timer = setTimeout(() => {
        this.closeAlert();
      }, 2000);
    }
  },

  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: ["c-alert", "c-alert--" + _vm.state] },
    [
      _vm.hasClose
        ? _c(
            "button",
            {
              staticClass: "c-btn c-btn--s c-btn--icon c-btn--close",
              attrs: { type: "button", name: "closeAlert" },
              on: { click: _vm.closeAlert }
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
  const __vue_is_functional_template__$3 = false;
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
    ...vuex.mapMutations('alerts', {
      closeAlert: CLOSE,
    }),
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
          return _c(
            "div",
            { key: alert.id, staticClass: "u-m-bot-xs" },
            [
              _c("Alert", {
                attrs: {
                  hasClose: true,
                  text: alert.text,
                  title: alert.title,
                  state: alert.state
                },
                on: {
                  emitClose: function($event) {
                    return _vm.closeAlert(index)
                  }
                }
              })
            ],
            1
          )
        }),
        0
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

  watch: {
    $route() {
      if (this.isNavOpen) {
        this.isNavOpen = false;
      }
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
            "u-visually-hidden u-visually-hidden--focus u-bg-theme-interaction-accent u-c-theme-interaction u-p",
          attrs: { href: "#site-main", id: "skip-link" }
        },
        [_vm._v("\n    Skip to content\n  ")]
      ),
      _vm._v(" "),
      _c("header", { class: _vm.classNames }, [
        _c(
          "button",
          {
            staticClass: "c-site-nav-toggle c-btn c-btn--icon u-d-none@m",
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
              {
                staticClass: "u-bg-theme-nav-bg",
                attrs: { to: { name: "home" } }
              },
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
            _vm.navItems.icons
              ? _c("div", { staticClass: "u-bg-theme-nav-bg" }, [
                  _c("hr", { staticClass: "u-w-100" }),
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
                                  "\n                " +
                                    _vm._s(icon.text) +
                                    " (opens in a new tab)\n              "
                                )
                              ])
                            ],
                            1
                          )
                        ]
                      )
                    }),
                    0
                  )
                ])
              : _vm._e(),
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

var script$6 = {
  props: {
    active: {
      type: Boolean,
      default: false,
    },

    result: {
      type: Object,
      required: true,
    },
  },

  components: {
    Icon: __vue_component__,
  },

  methods: {
    emitSelect() {
      this.$emit('emitSelect', this.result);
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
  return _c(
    "li",
    {
      staticClass:
        "c-search-result o-list-bare__item o-cover-link u-d-flex u-f-align-center",
      class: { active: _vm.active }
    },
    [
      _vm.result.icon
        ? _c(
            "div",
            { staticClass: "u-f-1-auto u-p-left-s" },
            [
              _c("Icon", {
                attrs: {
                  type: _vm.result.icon,
                  modifiers: ["o-icon--l", "u-font-vert-mid"]
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "u-p-xs" }, [
        _c(
          "button",
          {
            staticClass: "c-search-result__name o-cover-link__item",
            attrs: { name: "selectResult", tabindex: "-1", type: "button" },
            on: { click: _vm.emitSelect }
          },
          [_vm._v("\n      " + _vm._s(_vm.result.name) + "\n    ")]
        ),
        _vm._v(" "),
        _vm.result.desc
          ? _c(
              "p",
              { staticClass: "u-font-xs u-c-theme-text-alt u-m-left-xs" },
              [_vm._v("\n      " + _vm._s(_vm.result.desc) + "\n    ")]
            )
          : _vm._e()
      ])
    ]
  )
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

//

const MAX_RESULTS = 8;

var script$7 = {
  props: {
    // TODO: Make this a trie
    dataset: {
      type: Array,
      required: true,
    },

    describedby: {
      type: String,
      required: false,
    },

    label: {
      type: String,
      required: true,
    },

    searchExact: {
      type: Boolean,
      default: false,
    },

    searchKey: {
      type: String,
      default: 'name',
    },
  },

  components: {
    SearchResult: __vue_component__$6,
  },

  data() {
    return {
      activeResultIndex: 0,
      debouncedFilterResults: lodash.debounce(this.filterResults, 250),
      id: getUniqueId(),
      query: '',
      results: [],
      showResults: false,
    };
  },

  methods: {
    matchExact(a, b) {
      // NOTE: This is more performant than a "starts with" regex
      return a.substr(0, b.length).toLowerCase() === b;
    },

    matchLoose(a, b) {
      return a.toLowerCase().includes(b);
    },

    getFilteredResults() {
      if (!this.query) {
        return [];
      }

      const results = [];
      const query = this.query.toLowerCase();
      const isMatch = this.searchExact ? this.matchExact : this.matchLoose;

      for (let i = 0; i < this.dataset.length; i += 1) {
        const item = this.dataset[i];
        if (isMatch(item[this.searchKey], query)) {
          results.push(item);

          if (results.length === MAX_RESULTS) {
            return results;
          }
        }
      }

      return results;
    },

    filterResults() {
      this.results = this.getFilteredResults();
      if (this.activeResultIndex > this.results.length - 1) {
        this.activeResultIndex = 0;
      }
    },

    incrementActiveResultIndex() {
      this.activeResultIndex += 1;
      if (this.activeResultIndex === this.results.length) {
        this.activeResultIndex = 0;
      }
    },

    decrementActiveResultIndex() {
      this.activeResultIndex -= 1;
      if (this.activeResultIndex < 0) {
        this.activeResultIndex = this.results.length - 1;
      }
    },

    resetLocalState() {
      this.query = '';
      this.results = [];
    },

    selectItem(result = null) {
      const obj = result || this.results[this.activeResultIndex];
      this.$emit('emitSelect', obj);
      this.resetLocalState();
    },

    handleBlur() {
      setTimeout(() => {
        this.showResults = false;
      }, 150);
    },
  },
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-input c-autocomplete" }, [
    _c("label", { staticClass: "c-input__label", attrs: { for: _vm.id } }, [
      _vm._v("\n    " + _vm._s(_vm.label) + "\n  ")
    ]),
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
      staticClass: "c-input__input",
      attrs: {
        id: _vm.id,
        "aria-describedby": _vm.describedby || false,
        autocomplete: "off",
        name: "search",
        type: "search"
      },
      domProps: { value: _vm.query },
      on: {
        change: _vm.debouncedFilterResults,
        keyup: _vm.debouncedFilterResults,
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
            return _vm.decrementActiveResultIndex($event)
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
            return _vm.incrementActiveResultIndex($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.selectItem()
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
        staticClass: "c-autocomplete__results"
      },
      [
        _c(
          "ul",
          { staticClass: "o-list-bare" },
          _vm._l(_vm.results, function(result, index) {
            return _c("SearchResult", {
              key: result.id,
              attrs: {
                active: index === _vm.activeResultIndex,
                result: result
              },
              on: { emitSelect: _vm.selectItem }
            })
          }),
          1
        )
      ]
    )
  ])
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

const CHECKBOX = 'InputCheckbox';
const DATE = 'InputDate';
const FILE = 'InputFile';
const KEY_VALUE_PAIR = 'KeyValuePair';
const QUILL_RTE = 'QuillRTE';
const RADIO = 'InputRadio';
const REPEATER = 'FieldRepeater';
const SELECT = 'InputSelect';
const TEXT = 'InputText';
const TEXTAREA = 'InputTextarea';
const TRUE_FALSE = 'InputTrueFalse';

var fieldTypes = {
  CHECKBOX,
  DATE,
  FILE,
  KEY_VALUE_PAIR,
  QUILL_RTE,
  RADIO,
  REPEATER,
  SELECT,
  TEXT,
  TEXTAREA,
  TRUE_FALSE,
};

var getMachineSafeStr = (str) => {
  const re = /[^A-Za-z0-9_]+/g;
  return str.replace(re, '_');
};

const baseValue = (field) => {
  if (Array.isArray(field.value)) {
    return field.value.slice(0);
  }
  if (typeof field.value === 'object' && field.value !== null) {
    return { ...field.value };
  }
  return field.value;
};

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

const compileRepeater = (field, state) => {
  if (!field.value || field.value.length === 0) {
    return [];
  }
  return field.value.map((item) => {
    const f = state.fields[item.id];
    return {
      name: f.name,
      value: f.getValue(f, state),
    };
  });
};

const map = {
  [KEY_VALUE_PAIR]: compileKeyValuePairs,
  [REPEATER]: compileRepeater,
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
const DEREGISTER_FIELDS = 'deregisterFields';
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
  value: field.value || null,
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

    const registerField = (field) => {
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
    };

    if (data.groups) {
      data.groups.forEach((group) => {
        group.fields.forEach((field) => {
          registerField(field);
        });
      });
    }

    if (data.fields) {
      data.fields.forEach((field) => {
        registerField(field);
      });
    }

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

/**
 * Sets the visibility of a field based on its prerequisites.
 *
 * @param {Object} state The current state.
 * @param {String} id The id of the field to check visibility of.
 *
 * @returns {Boolean} Visibility state.
 */
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
    obj.fields.forEach((field) => {
      Vue.set(state.fields, field.id, field);
      state.forms[obj.form].fields.push(field.id);
    });
  },

  [DEREGISTER_FIELDS](state, obj) {
    obj.fields.forEach((field) => {
      Vue.delete(state.fields, field);
      const index = lodash.findIndex(state.forms[obj.form].fields, (item) => item.id === field);
      if (index !== -1) {
        state.forms[obj.form].fields.splice(index, 1);
      }
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

var script$8 = {
  props: {
    formStructure: {
      type: Object,
      required: true,
      validator: (value) => {
        if (!value.id || typeof value.id !== 'string') {
          return false;
        }
        if (!value.fields && !value.groups) {
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

    groups() {
      return this.formStructure.groups
        ? this.formStructure.groups
        : [{ fields: this.formStructure.fields }];
    },
  },

  methods: {
    ...vuex.mapActions('forms', ['registerForm']),

    focusField(id) {
      document.getElementById(`vf-${id}`).focus();
    },

    handleSubmit() {
      this.hasBeenValidated = true;
      // Run validation on all non-validated fields
      this.$refs.field.forEach((field) => {
        // Revalidate each field to ensure that we hit child fields
        field.validateField(true);
      });

      if (this.isValid) {
        const data = this.$store.getters['forms/compileFormData'](this.formStructure.id);
        this.formStructure.onSubmit(data);
        return;
      }

      window.requestAnimationFrame(() => {
        this.$refs.errorBox.$el.focus();
      });
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
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function() {
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
          staticClass: "u-font-xs u-m-bot",
          attrs: { id: _vm.formStructure.id + "__required-msg" }
        },
        [_vm._v("\n    * Required Fields\n  ")]
      ),
      _vm._v(" "),
      _c(
        "Alert",
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
          attrs: {
            "aria-labelledby": _vm.formStructure.id + "__error__title",
            id: _vm.formStructure.id + "__error",
            state: "error",
            tabindex: "-1",
            title: "There are issues with the following fields:",
            titleTag: "h3"
          }
        },
        [
          _c("div", { staticClass: "c-typography" }, [
            _c(
              "ul",
              { staticClass: "u-font-xs" },
              _vm._l(_vm.formErrors, function(error) {
                return _c("li", { key: error.id }, [
                  _c(
                    "button",
                    {
                      staticClass: "c-btn--text c-link--white",
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
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.groups, function(group, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "c-card",
            class: { "c-card--outline": group.title }
          },
          [
            group.title
              ? _c("h4", { staticClass: "c-card__title" }, [
                  _vm._v("\n      " + _vm._s(group.title) + "\n    ")
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "c-card__body" },
              _vm._l(group.fields, function(field) {
                return _c(
                  "div",
                  { key: field.id, staticClass: "u-m-bot" },
                  [
                    _c(field.component, {
                      ref: "field",
                      refInFor: true,
                      tag: "component",
                      attrs: {
                        reference: field.id,
                        formId: _vm.formStructure.id
                      }
                    })
                  ],
                  1
                )
              }),
              0
            )
          ]
        )
      }),
      _vm._v(" "),
      _c("div", { staticClass: "c-card__body" }, [
        _c(
          "button",
          {
            staticClass: "c-btn c-btn--primary",
            attrs: { name: "formSubmit", type: "submit" }
          },
          [
            _vm._v(
              "\n      " +
                _vm._s(_vm.formStructure.submitText || "Submit") +
                "\n    "
            )
          ]
        )
      ])
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

const isNotEmpty = {
  test(val) { return val !== null && val.length > 0; },
  errorText(label) { return `${label} must not be empty.`; },
};

const isEmail = {
  test(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  },
  errorText() { return 'Enter a valid email address in the format username@domain.com'; },
};

const isMachineSafeStr = {
  test(val) {
    const re = /^[A-Za-z0-9_]*$/g;
    return re.test(val);
  },
  errorText() { return 'Enter a machine safe string that contains only letters, numbers, and underscores (_).'; },
};

const isValidDate = {
  test(val) {
    return typeof new Date(val).getMonth === 'function';
  },
  errorText() { return 'Enter a valid date.'; },
};

var formValidations = {
  isNotEmpty,
  isEmail,
  isMachineSafeStr,
  isValidDate,
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

    // TODO: Look at moving this to the store module
    validateField(isFromSubmit = false) {
      // Run validation on children
      if (isFromSubmit && !!this.$refs.fields) {
        this.$refs.fields.forEach((field) => {
          field.validateField();
        });
      }
      // Add required validation or skip if null
      const validators = this.field.validation ? this.field.validation.slice(0) : [];
      if (this.field.required) {
        validators.unshift(isNotEmpty);
      } else if (!this.field.value) {
        this.setIsValid({ id: this.reference, bool: true });
        return;
      }
      // Ensure that a value is populated
      this.debouncedUpdateFieldValue.flush();
      // TODO: Handle async validation within a synchronous order
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

var script$9 = {
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
        this.debouncedUpdateFieldValue({ id: this.reference, val });
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
          type: "date"
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

  methods: {
    handleInputUpload() {
      this.debouncedUpdateFieldValue({ id: this.reference, val: this.$refs.input.files });
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
        ref: "input",
        staticClass: "c-input__input c-input__input--file",
        attrs: {
          accept: _vm.field.acceptFileTypes
            ? _vm.field.acceptFileTypes.join(",")
            : false,
          "aria-describedby": _vm.showError
            ? "vf-" + _vm.reference + "__error"
            : false,
          "aria-required": _vm.field.required,
          autocomplete: _vm.field.autocomplete || false,
          id: "vf-" + _vm.reference,
          multiple: !!_vm.field.multipleFiles,
          name: _vm.field.name,
          type: "file"
        },
        on: { blur: _vm.validateField, change: _vm.handleInputUpload }
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
const __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function() {
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
  mixins: [
    vuexFormInput,
  ],

  computed: {
    fieldVal: {
      get() {
        return this.field.value;
      },
      set(val) {
        return this.debouncedUpdateFieldValue({ id: this.reference, val });
      },
    },
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
        [
          _vm._l(_vm.field.options, function(option) {
            return _c(
              "option",
              { key: option.value, domProps: { value: option.value } },
              [_vm._v("\n      " + _vm._s(option.text) + "\n    ")]
            )
          }),
          _vm._v(" "),
          _vm._l(_vm.field.optgroups, function(optgroup) {
            return _c(
              "optgroup",
              { key: optgroup.text, attrs: { label: optgroup.text } },
              _vm._l(optgroup.options, function(option) {
                return _c(
                  "option",
                  { key: option.value, domProps: { value: option.value } },
                  [_vm._v("\n        " + _vm._s(option.text) + "\n      ")]
                )
              }),
              0
            )
          })
        ],
        2
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
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

//

var script$f = {
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
const __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function() {
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
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = undefined;
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$f = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$g = {
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
    InputText: __vue_component__$e,
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
      let fieldA = {
        id: idA,
        name: 'option_key',
        label: 'Option Name',
        required: true,
        computeValue: false,
      };
      if (this.fields && this.fields.fieldA) {
        fieldA = { ...fieldA, ...this.fields.fieldA };
      }

      const idB = getUniqueId();
      let fieldB = {
        id: idB,
        name: 'option_val',
        label: 'Option Value',
        isValid: true,
        computeValue: false,
        validation: [
          isMachineSafeStr,
        ],
      };
      if (this.fields && this.fields.fieldB) {
        fieldB = { ...fieldB, ...this.fields.fieldB };
      }

      this.registerFields({ form: this.formId, fields: [fieldA, fieldB] });
      this.pairs.push({ key: idA, val: idB });
      this.updateFieldValue({ id: this.reference, val: this.pairs.slice(0) });
      this.validateField();
    },

    deleteItem(index) {
      // Deregister the pair
      const item = this.pairs[index];
      this.deregisterFields({
        fields: [item.key, item.val],
        form: this.formId,
      });
      // Update the field value
      this.paris.splice(index, 1);
      this.updateFieldValue({ id: this.reference, val: this.pairs.slice(0) });
      // Wait for the component to be rendered before we access $refs
      window.requestAnimationFrame(() => {
        this.validateField();
      });
    },
  },
};

/* script */
const __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function() {
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
        return _c(
          "div",
          { key: pair.key, staticClass: "u-m-bot-xs u-d-flex" },
          [
            _c(
              "button",
              {
                staticClass: "c-btn--ui o-cover-link__item",
                attrs: { type: "button", name: "deleteField" },
                on: {
                  click: function($event) {
                    return _vm.deleteItem(_vm.index)
                  }
                }
              },
              [
                _c("Icon", { attrs: { type: "close" } }),
                _vm._v(" "),
                _c("span", { staticClass: "u-visually-hidden" }, [
                  _vm._v("Remove pair")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "o-grid o-grid--6-6" },
              [
                _c("InputText", {
                  ref: "fields",
                  refInFor: true,
                  attrs: { reference: pair.key }
                }),
                _vm._v(" "),
                _c("InputText", {
                  ref: "fields",
                  refInFor: true,
                  attrs: { reference: pair.val }
                })
              ],
              1
            )
          ]
        )
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
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

  /* style */
  const __vue_inject_styles__$g = undefined;
  /* scoped */
  const __vue_scope_id__$g = undefined;
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$g = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$h = {
  mixins: [
    vuexFormInput,
  ],

  data() {
    return {
      quill: null,
    };
  },

  // TODO: Fix issue w/ validation

  methods: {
    setFieldVal() {
      this.debouncedUpdateFieldValue({
        id: this.reference,
        val: this.quill.getContents(),
      });
    },
  },

  mounted() {
    this.quill = new Quill(`#vf-${this.reference}`, {
      toolbar: [
        [{ header: [2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike'],
      ],
      scrollingContainer: `#vf-${this.reference}__quill-container`,
      theme: 'snow',
    });

    // TODO: Ensure this is a delta
    if (this.field.value) {
      this.quill.setContents({ delta: this.field.value, source: 'api' });
    }

    // Update stored value on debounced text change
    this.quill.on('text-change', () => {
      this.setFieldVal();
    });
  },
};

/* script */
const __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function() {
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
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  const __vue_inject_styles__$h = function (inject) {
    if (!inject) return
    inject("data-v-1c22c513_0", { source: "@charset \"UTF-8\";\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: \"•\";\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: \"☑\";\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: \"☐\";\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) \". \";\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, 0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: \"•\";\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: \"☑\";\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: \"☐\";\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) \". \";\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, 0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: color(\"theme-interaction\", \"hover\");\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n.ql-snow.ql-toolbar button:hover:not(.ql-active),\n.ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n}\n}\n.ql-snow {\n  box-sizing: border-box;\n}\n.ql-snow * {\n  box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: \"Normal\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: \"Heading 1\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: \"Heading 2\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: \"Heading 3\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: \"Heading 4\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: \"Heading 5\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: \"Heading 6\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: \"Sans Serif\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: \"Serif\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: \"Monospace\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: \"Normal\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: \"Small\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: \"Large\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: \"Huge\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: \"Edit\";\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: \"Remove\";\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: \"Save\";\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n\n/*# sourceMappingURL=QuillRTE.vue.map */", map: {"version":3,"sources":["QuillRTE.vue","/Users/briangeorge/Documents/funtimes/vue-base/src/components/forms/fields/QuillRTE.vue"],"names":[],"mappings":"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","file":"QuillRTE.vue","sourcesContent":["@charset \"UTF-8\";\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\n.ql-editor > * {\n  cursor: text;\n}\n\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n\n.ql-editor ul > li::before {\n  content: \"•\";\n}\n\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n\n.ql-editor ul[data-checked=true] > li::before {\n  content: \"☑\";\n}\n\n.ql-editor ul[data-checked=false] > li::before {\n  content: \"☐\";\n}\n\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) \". \";\n}\n\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) \". \";\n}\n\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) \". \";\n}\n\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) \". \";\n}\n\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) \". \";\n}\n\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) \". \";\n}\n\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) \". \";\n}\n\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) \". \";\n}\n\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) \". \";\n}\n\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) \". \";\n}\n\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, 0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\n.ql-editor > * {\n  cursor: text;\n}\n\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n\n.ql-editor ul > li::before {\n  content: \"•\";\n}\n\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n\n.ql-editor ul[data-checked=true] > li::before {\n  content: \"☑\";\n}\n\n.ql-editor ul[data-checked=false] > li::before {\n  content: \"☐\";\n}\n\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) \". \";\n}\n\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) \". \";\n}\n\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) \". \";\n}\n\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) \". \";\n}\n\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) \". \";\n}\n\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) \". \";\n}\n\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) \". \";\n}\n\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) \". \";\n}\n\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) \". \";\n}\n\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) \". \";\n}\n\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, 0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: color(\"theme-interaction\", \"hover\");\n}\n\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n.ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  box-sizing: border-box;\n}\n\n.ql-snow * {\n  box-sizing: border-box;\n}\n\n.ql-snow .ql-hidden {\n  display: none;\n}\n\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n\n.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n\n.ql-snow .ql-empty {\n  fill: none;\n}\n\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n\n.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}\n\n.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}\n\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"])::before {\n  content: attr(data-label);\n}\n\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: \"Normal\";\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: \"Heading 1\";\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: \"Heading 2\";\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: \"Heading 3\";\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: \"Heading 4\";\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: \"Heading 5\";\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: \"Heading 6\";\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: \"Sans Serif\";\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: \"Serif\";\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: \"Monospace\";\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: \"Normal\";\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: \"Small\";\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: \"Large\";\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: \"Huge\";\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  padding: 8px;\n}\n\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: \"Edit\";\n  margin-left: 16px;\n  padding-right: 8px;\n}\n\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: \"Remove\";\n  margin-left: 8px;\n}\n\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: \"Save\";\n  padding-right: 0px;\n}\n\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n\n.ql-snow a {\n  color: #06c;\n}\n\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n\n/*# sourceMappingURL=QuillRTE.vue.map */","<template>\n  <div\n    v-show=\"field.isVisible\"\n    :class=\"classNames\"\n  >\n    <label\n      :for=\"`vf-${reference}`\"\n      class=\"c-input__label\"\n    >\n      {{ field.label }}<sup v-if=\"field.required\">*</sup>\n    </label>\n    <div\n      :id=\"`vf-${reference}__quill-container`\"\n      class=\"c-quill\"\n    >\n      <div :id=\"`vf-${reference}`\">\n        <!-- Quill.js -->\n      </div>\n    </div>\n    <p\n      :id=\"`vf-${reference}__error`\"\n      class=\"c-input__error\"\n      v-if=\"showError\"\n    >\n      {{ errorText }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport Quill from 'quill';\nimport vuexFormInput from '../mixins/vuexFormInput';\n\nexport default {\n  mixins: [\n    vuexFormInput,\n  ],\n\n  data() {\n    return {\n      quill: null,\n    };\n  },\n\n  // TODO: Fix issue w/ validation\n\n  methods: {\n    setFieldVal() {\n      this.debouncedUpdateFieldValue({\n        id: this.reference,\n        val: this.quill.getContents(),\n      });\n    },\n  },\n\n  mounted() {\n    this.quill = new Quill(`#vf-${this.reference}`, {\n      toolbar: [\n        [{ header: [2, 3, 4, false] }],\n        ['bold', 'italic', 'underline', 'strike'],\n      ],\n      scrollingContainer: `#vf-${this.reference}__quill-container`,\n      theme: 'snow',\n    });\n\n    // TODO: Ensure this is a delta\n    if (this.field.value) {\n      this.quill.setContents({ delta: this.field.value, source: 'api' });\n    }\n\n    // Update stored value on debounced text change\n    this.quill.on('text-change', () => {\n      this.setFieldVal();\n    });\n  },\n};\n</script>\n\n<style lang=\"scss\">\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\ncursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\nmargin: 0;\npadding: 0;\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\npadding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\nlist-style-type: none;\n}\n.ql-editor ul > li::before {\ncontent: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\npointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\ncolor: #777;\ncursor: pointer;\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\ncontent: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\ncontent: '\\2610';\n}\n.ql-editor li::before {\ndisplay: inline-block;\nwhite-space: nowrap;\nwidth: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\nmargin-left: -1.5em;\nmargin-right: 0.3em;\ntext-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\nmargin-left: 0.3em;\nmargin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\npadding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\npadding-right: 1.5em;\n}\n.ql-editor ol li {\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\ncounter-increment: list-0;\n}\n.ql-editor ol li:before {\ncontent: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\ncontent: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\ncontent: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\ncontent: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\ncontent: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\ncontent: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\ncontent: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\ncontent: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\ncontent: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\ncounter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\ncontent: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 28.5em;\n}\n.ql-editor .ql-video {\ndisplay: block;\nmax-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\nmargin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\nmargin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\nbackground-color: #000;\n}\n.ql-editor .ql-bg-red {\nbackground-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\nbackground-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\nbackground-color: #ff0;\n}\n.ql-editor .ql-bg-green {\nbackground-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\nbackground-color: #06c;\n}\n.ql-editor .ql-bg-purple {\nbackground-color: #93f;\n}\n.ql-editor .ql-color-white {\ncolor: #fff;\n}\n.ql-editor .ql-color-red {\ncolor: #e60000;\n}\n.ql-editor .ql-color-orange {\ncolor: #f90;\n}\n.ql-editor .ql-color-yellow {\ncolor: #ff0;\n}\n.ql-editor .ql-color-green {\ncolor: #008a00;\n}\n.ql-editor .ql-color-blue {\ncolor: #06c;\n}\n.ql-editor .ql-color-purple {\ncolor: #93f;\n}\n.ql-editor .ql-font-serif {\nfont-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\nfont-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\nfont-size: 0.75em;\n}\n.ql-editor .ql-size-large {\nfont-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\nfont-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\ndirection: rtl;\ntext-align: inherit;\n}\n.ql-editor .ql-align-center {\ntext-align: center;\n}\n.ql-editor .ql-align-justify {\ntext-align: justify;\n}\n.ql-editor .ql-align-right {\ntext-align: right;\n}\n.ql-editor.ql-blank::before {\ncolor: rgba(0,0,0,0.6);\ncontent: attr(data-placeholder);\nfont-style: italic;\nleft: 15px;\npointer-events: none;\nposition: absolute;\nright: 15px;\n}\n/*!\n* Quill Editor v1.3.6\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\nbox-sizing: border-box;\nfont-family: Helvetica, Arial, sans-serif;\nfont-size: 13px;\nheight: 100%;\nmargin: 0px;\nposition: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\nvisibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\npointer-events: none;\n}\n.ql-clipboard {\nleft: -100000px;\nheight: 1px;\noverflow-y: hidden;\nposition: absolute;\ntop: 50%;\n}\n.ql-clipboard p {\nmargin: 0;\npadding: 0;\n}\n.ql-editor {\nbox-sizing: border-box;\nline-height: 1.42;\nheight: 100%;\noutline: none;\noverflow-y: auto;\npadding: 12px 15px;\ntab-size: 4;\n-moz-tab-size: 4;\ntext-align: left;\nwhite-space: pre-wrap;\nword-wrap: break-word;\n}\n.ql-editor > * {\ncursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\nmargin: 0;\npadding: 0;\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\npadding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\nlist-style-type: none;\n}\n.ql-editor ul > li::before {\ncontent: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\npointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\ncolor: #777;\ncursor: pointer;\npointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\ncontent: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\ncontent: '\\2610';\n}\n.ql-editor li::before {\ndisplay: inline-block;\nwhite-space: nowrap;\nwidth: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\nmargin-left: -1.5em;\nmargin-right: 0.3em;\ntext-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\nmargin-left: 0.3em;\nmargin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\npadding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\npadding-right: 1.5em;\n}\n.ql-editor ol li {\ncounter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\ncounter-increment: list-0;\n}\n.ql-editor ol li:before {\ncontent: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\ncontent: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\ncounter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\ncontent: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\ncounter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\ncontent: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\ncounter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\ncontent: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\ncounter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\ncontent: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\ncounter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\ncontent: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\ncounter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\ncontent: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\ncounter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\ncontent: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\ncounter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\ncounter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\ncontent: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\npadding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\npadding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\npadding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\npadding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\npadding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\npadding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\npadding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\npadding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\npadding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\npadding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\npadding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\npadding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\npadding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\npadding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\npadding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\npadding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\npadding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\npadding-right: 28.5em;\n}\n.ql-editor .ql-video {\ndisplay: block;\nmax-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\nmargin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\nmargin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\nbackground-color: #000;\n}\n.ql-editor .ql-bg-red {\nbackground-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\nbackground-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\nbackground-color: #ff0;\n}\n.ql-editor .ql-bg-green {\nbackground-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\nbackground-color: #06c;\n}\n.ql-editor .ql-bg-purple {\nbackground-color: #93f;\n}\n.ql-editor .ql-color-white {\ncolor: #fff;\n}\n.ql-editor .ql-color-red {\ncolor: #e60000;\n}\n.ql-editor .ql-color-orange {\ncolor: #f90;\n}\n.ql-editor .ql-color-yellow {\ncolor: #ff0;\n}\n.ql-editor .ql-color-green {\ncolor: #008a00;\n}\n.ql-editor .ql-color-blue {\ncolor: #06c;\n}\n.ql-editor .ql-color-purple {\ncolor: #93f;\n}\n.ql-editor .ql-font-serif {\nfont-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\nfont-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\nfont-size: 0.75em;\n}\n.ql-editor .ql-size-large {\nfont-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\nfont-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\ndirection: rtl;\ntext-align: inherit;\n}\n.ql-editor .ql-align-center {\ntext-align: center;\n}\n.ql-editor .ql-align-justify {\ntext-align: justify;\n}\n.ql-editor .ql-align-right {\ntext-align: right;\n}\n.ql-editor.ql-blank::before {\ncolor: rgba(0,0,0,0.6);\ncontent: attr(data-placeholder);\nfont-style: italic;\nleft: 15px;\npointer-events: none;\nposition: absolute;\nright: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\nclear: both;\ncontent: '';\ndisplay: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\nbackground: none;\nborder: none;\ncursor: pointer;\ndisplay: inline-block;\nfloat: left;\nheight: 24px;\npadding: 3px 5px;\nwidth: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\nfloat: left;\nheight: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\noutline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\ndisplay: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\ncolor: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\nfill: color('theme-interaction', 'hover');\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\nstroke: #06c;\n}\n@media (pointer: coarse) {\n.ql-snow.ql-toolbar button:hover:not(.ql-active),\n.ql-snow .ql-toolbar button:hover:not(.ql-active) {\n  color: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n  stroke: #444;\n}\n}\n.ql-snow {\nbox-sizing: border-box;\n}\n.ql-snow * {\nbox-sizing: border-box;\n}\n.ql-snow .ql-hidden {\ndisplay: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\nvisibility: hidden;\n}\n.ql-snow .ql-tooltip {\nposition: absolute;\ntransform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\ncursor: pointer;\ntext-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\ntransform: translateY(-10px);\n}\n.ql-snow .ql-formats {\ndisplay: inline-block;\nvertical-align: middle;\n}\n.ql-snow .ql-formats:after {\nclear: both;\ncontent: '';\ndisplay: table;\n}\n.ql-snow .ql-stroke {\nfill: none;\nstroke: #444;\nstroke-linecap: round;\nstroke-linejoin: round;\nstroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\nfill: none;\nstroke: #444;\nstroke-miterlimit: 10;\nstroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\nfill: #444;\n}\n.ql-snow .ql-empty {\nfill: none;\n}\n.ql-snow .ql-even {\nfill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\nstroke-width: 1;\n}\n.ql-snow .ql-transparent {\nopacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\ndisplay: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\ndisplay: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\ndisplay: none;\n}\n.ql-snow .ql-editor h1 {\nfont-size: 2em;\n}\n.ql-snow .ql-editor h2 {\nfont-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\nfont-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\nfont-size: 1em;\n}\n.ql-snow .ql-editor h5 {\nfont-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\nfont-size: 0.67em;\n}\n.ql-snow .ql-editor a {\ntext-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\nborder-left: 4px solid #ccc;\nmargin-bottom: 5px;\nmargin-top: 5px;\npadding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\nbackground-color: #f0f0f0;\nborder-radius: 3px;\n}\n.ql-snow .ql-editor pre {\nwhite-space: pre-wrap;\nmargin-bottom: 5px;\nmargin-top: 5px;\npadding: 5px 10px;\n}\n.ql-snow .ql-editor code {\nfont-size: 85%;\npadding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\nbackground-color: #23241f;\ncolor: #f8f8f2;\noverflow: visible;\n}\n.ql-snow .ql-editor img {\nmax-width: 100%;\n}\n.ql-snow .ql-picker {\ncolor: #444;\ndisplay: inline-block;\nfloat: left;\nfont-size: 14px;\nfont-weight: 500;\nheight: 24px;\nposition: relative;\nvertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$h = undefined;
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$h = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    false,
    vueRuntimeHelpers.createInjector,
    undefined,
    undefined
  );

//

var script$i = {
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
    Draggable,
    Icon: __vue_component__,
    InputSelect: __vue_component__$d,
  },

  data() {
    return {
      typeSelectId: getUniqueId(),
    };
  },

  computed: {
    ...vuex.mapState('forms', {
      typeSelect(state) {
        return state.fields[this.typeSelectId];
      },
    }),

    fieldKeys() {
      return Object.keys(this.field.fields);
    },

    fieldValue: {
      get() {
        return this.field.value;
      },
      set(val) {
        this.updateFieldValue({
          id: this.reference,
          val,
        });
      },
    },
  },

  methods: {
    ...vuex.mapActions('forms', ['registerFields']),

    ...vuex.mapMutations('forms', ['deregisterFields']),

    addNewItem() {
      if (this.typeSelect.value) {
        const id = getUniqueId();
        const field = {
          ...this.field.fields[this.typeSelect.value],
          id,
        };
        this.registerFields({ form: this.formId, fields: [field] });
        const val = this.field.value || [];
        this.updateFieldValue({
          id: this.reference,
          val: [
            ...val,
            { id, component: field.component },
          ],
        });
        // Wait for the component to be rendered before we access $refs
        window.requestAnimationFrame(() => {
          this.validateField();
        });
      }
    },

    deleteItem(index) {
      // TODO: Deregister children of the field as well
      // Deregister removed field
      this.deregisterFields({
        fields: [this.field.value[index].id],
        form: this.formId,
      });
      // Update the field value
      const val = this.field.value.slice(0);
      val.splice(index, 1);
      this.updateFieldValue({
        id: this.reference,
        val,
      });
      // Wait for the component to be rendered before we access $refs
      window.requestAnimationFrame(() => {
        this.validateField();
      });
    },
  },

  created() {
    this.registerFields({
      form: this.formId,
      fields: [{
        id: this.typeSelectId,
        name: 'type_select',
        label: 'Field to add',
        computeValue: false,
        options: this.fieldKeys.map((key) => ({
          text: this.field.fields[key].label,
          value: key,
        })),
        value: this.fieldKeys[0],
      }],
    });
  },
};

/* script */
const __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function() {
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
      staticClass: "c-field-repeater c-card c-card--outline u-m-top-0"
    },
    [
      _c("legend", { staticClass: "c-input__legend" }, [
        _vm._v("\n    " + _vm._s(_vm.field.label)),
        _vm.field.required ? _c("sup", [_vm._v("*")]) : _vm._e()
      ]),
      _vm._v(" "),
      !_vm.fieldValue || _vm.fieldValue.length === 0
        ? _c(
            "p",
            {
              staticClass: "u-font-xs u-font-center u-p u-c-theme-text-alt",
              attrs: { id: _vm.reference + "__empty-text" }
            },
            [_vm._v("\n    No items currently added.\n  ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "Draggable",
        {
          staticClass: "c-card__body",
          model: {
            value: _vm.fieldValue,
            callback: function($$v) {
              _vm.fieldValue = $$v;
            },
            expression: "fieldValue"
          }
        },
        _vm._l(_vm.fieldValue, function(item, index) {
          return _c("div", { key: item.id, staticClass: "u-m-bot-xs" }, [
            _c(
              "div",
              { staticClass: "u-p-vert-s u-p-right-s u-d-flex u-w-100" },
              [
                _c("div", { staticClass: "o-cover-link" }, [
                  _c(
                    "button",
                    {
                      staticClass: "c-btn--ui o-cover-link__item",
                      attrs: { type: "button", name: "deleteField" },
                      on: {
                        click: function($event) {
                          return _vm.deleteItem(index)
                        }
                      }
                    },
                    [
                      _c("Icon", { attrs: { type: "close" } }),
                      _vm._v(" "),
                      _c("span", { staticClass: "u-visually-hidden" }, [
                        _vm._v("Remove field")
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(item.component, {
                  ref: "fields",
                  refInFor: true,
                  tag: "component",
                  staticClass: "u-f-1",
                  attrs: { reference: item.id, formId: _vm.formId }
                })
              ],
              1
            )
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "c-card__footer o-grid o-grid--8-4@m o-grid--12 u-bg-theme-bg-alt u-p-s u-f-align-end"
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.fieldKeys.length > 1,
                  expression: "fieldKeys.length > 1"
                }
              ],
              staticClass: "o-col"
            },
            [_c("InputSelect", { attrs: { reference: _vm.typeSelectId } })],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "o-col" }, [
            _c(
              "button",
              {
                staticClass:
                  "c-btn c-btn--s c-btn--secondary u-d-flex u-f-align-center",
                attrs: { type: "button" },
                on: { click: _vm.addNewItem }
              },
              [
                _c("Icon", { attrs: { type: "add" } }),
                _vm._v(" " + _vm._s(_vm.field.addNewText) + "\n      ")
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$i = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$j = {
  mixins: [
    vuexFormInput,
  ],

  data() {
    return {
      localValue: false,
    };
  },

  watch: {
    localValue(val) {
      this.updateFieldValue({ id: this.reference, val: val[0] === 'true' });
    },
  },

  created() {
    this.localValue = this.field.value || [];
  },
};

/* script */
const __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function() {
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
          id: "vf-" + _vm.reference,
          name: _vm.field.name,
          type: "checkbox",
          value: "true"
        },
        domProps: {
          checked: Array.isArray(_vm.localValue)
            ? _vm._i(_vm.localValue, "true") > -1
            : _vm.localValue
        },
        on: {
          blur: _vm.validateField,
          change: function($event) {
            var $$a = _vm.localValue,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = "true",
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
          attrs: { for: "vf-" + _vm.reference }
        },
        [_vm._v("\n    " + _vm._s(_vm.field.label) + "\n  ")]
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
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

  /* style */
  const __vue_inject_styles__$j = undefined;
  /* scoped */
  const __vue_scope_id__$j = undefined;
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$j = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    false,
    undefined,
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
  formValidations,
};

var filterResults = {
  props: {
    dataset: {
      type: Array,
      required: true,
    },

    maxSearchResults: {
      type: Number,
      default: NaN,
    },

    searchExact: {
      type: Boolean,
      default: false,
    },

    // Used when dataset is an Object[]
    searchKey: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      searchQuery: '',
      searchResults: [],
      debouncedFilterSearchResults: lodash.debounce(function () { // eslint-disable-line func-names
        this.searchResults = this.filterSearchResults();
      }, 250),
    };
  },

  computed: {
    isSearchFlat() {
      return !this.searchKey;
    },

    searchMethod() {
      return this.searchExact ? this.matchExact : this.matchLoose;
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

    filterSearchResults() {
      if (this.searchQuery === '') {
        return [];
      }

      const results = [];
      const query = this.query.toLowerCase();

      for (let i = 0; i < this.dataset.length; i += 1) {
        const item = this.dataset[i];
        const key = this.isSearchFlat ? item : item[this.searchKey];
        if (this.searchMethod(key, query)) {
          results.push(item);

          if (results.length === this.maxSearchResults) {
            return results;
          }
        }
      }
      return results;
    },
  },
};

// Components

var index$2 = {
  install(Vue, options = {
    prefix: '',
  }) {
    // Layouts
    Vue.component(`${options.prefix}SidebarLayout`, __vue_component__$5);
    // Components
    Vue.component(`${options.prefix}ExternalLink`, __vue_component__$1);
    Vue.component(`${options.prefix}Icon`, __vue_component__);
    Vue.component(`${options.prefix}Modal`, __vue_component__$2);
    Vue.component(`${options.prefix}Alert`, __vue_component__$3);
    Vue.component(`${options.prefix}AlertList`, __vue_component__$4);
    Vue.component(`${options.prefix}SearchResult`, __vue_component__$6);
    Vue.component(`${options.prefix}SearchAutocomplete`, __vue_component__$7);
    // Forms
    Vue.component(`${options.prefix}VuexForm`, __vue_component__$8);
    Vue.component(`${options.prefix}InputCheckbox`, __vue_component__$9);
    Vue.component(`${options.prefix}InputDate`, __vue_component__$a);
    Vue.component(`${options.prefix}InputFile`, __vue_component__$b);
    Vue.component(`${options.prefix}InputRadio`, __vue_component__$c);
    Vue.component(`${options.prefix}InputSelect`, __vue_component__$d);
    Vue.component(`${options.prefix}InputText`, __vue_component__$e);
    Vue.component(`${options.prefix}InputTextarea`, __vue_component__$f);
    Vue.component(`${options.prefix}KeyValuePair`, __vue_component__$g);
    Vue.component(`${options.prefix}QuillRTE`, __vue_component__$h);
    Vue.component(`${options.prefix}FieldRepeater`, __vue_component__$i);
    Vue.component(`${options.prefix}InputTrueFalse`, __vue_component__$j);
  },
};

exports.constants = index;
exports.default = index$2;
exports.filterResults = filterResults;
exports.utils = index$1;
exports.vuexFormInput = vuexFormInput;
