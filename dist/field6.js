(window.webpackJsonpvue_base=window.webpackJsonpvue_base||[]).push([[5],{125:function(e,t,r){"use strict";r(26),r(32),r(27),r(15),r(126),r(28),r(29),r(30),r(31),r(21),r(16);var i=r(0),n=r(61),s=r(22),a=r(4),o=r(127);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a={props:{reference:{type:String,required:!0},modifiers:{type:Array,default:function(){return[]}}},data:function(){return{errorText:"",debouncedUpdateFieldValue:Object(n.debounce)((function(e){this.updateFieldValue(e)}),250)}},computed:u({},Object(s.mapState)("forms",{field:function(e){return e.fields[this.reference]}}),{showError:function(){return this.field.hasValidated&&!this.field.isValid},classNames:function(){var e=["c-input"].concat(this.modifiers);return this.field.hasValidated&&e.push(this.field.isValid?"success":"error"),e}}),methods:u({},Object(s.mapActions)("forms",{updateFieldValue:a.g}),{},Object(s.mapMutations)("forms",{setIsValid:a.e}),{validateField:function(){var e=this.field.validation?this.field.validation.slice(0):[];if(this.field.required)e.unshift(o.b);else if(!o.b.test(this.field.value))return;this.debouncedUpdateFieldValue.flush();for(var t=0;t<e.length;t+=1){var r=e[t];if(!r.test(this.field.value))return this.errorText=r.errorText(this.field.label),void this.setIsValid({id:this.reference,bool:!1})}this.setIsValid({id:this.reference,bool:!0})}})}},126:function(e,t,r){"use strict";var i=r(1),n=r(13),s=r(33),a=r(60),o=r(18),l=r(17),u=r(44),c=r(34),d=r(6)("species"),f=[].slice,p=Math.max;i({target:"Array",proto:!0,forced:!c("slice")},{slice:function(e,t){var r,i,c,v=l(this),h=o(v.length),b=a(e,h),m=a(void 0===t?h:t,h);if(s(v)&&("function"!=typeof(r=v.constructor)||r!==Array&&!s(r.prototype)?n(r)&&null===(r=r[d])&&(r=void 0):r=void 0,r===Array||void 0===r))return f.call(v,b,m);for(i=new(void 0===r?Array:r)(p(m-b,0)),c=0;b<m;b++,c++)b in v&&u(i,c,v[b]);return i.length=c,i}})},127:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return n}));var i={test:function(e){return null!==e&&e.length>0},errorText:function(e){return"".concat(e," must not be empty.")}},n={test:function(e){return/^[A-Za-z0-9_]*$/g.test(e)},errorText:function(){return"Enter a machine safe string that contains only letters, numbers, and underscores (_)."}}},89:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.field.isVisible,expression:"field.isVisible"}],class:e.classNames},[r("label",{staticClass:"c-input__label",attrs:{for:"vf-"+e.reference}},[e._v("\n    "+e._s(e.field.label)),e.field.required?r("sup",[e._v("*")]):e._e()]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.fieldVal,expression:"fieldVal"}],staticClass:"c-input__input",attrs:{"aria-describedby":!!e.showError&&"vf-"+e.reference+"__error","aria-required":e.field.required,autocomplete:e.field.autocomplete||!1,id:"vf-"+e.reference,name:e.field.name,type:"text"},domProps:{value:e.fieldVal},on:{blur:e.validateField,input:function(t){t.target.composing||(e.fieldVal=t.target.value)}}}),e._v(" "),e.showError?r("p",{staticClass:"c-input__error",attrs:{id:"vf-"+e.reference+"__error"}},[e._v("\n    "+e._s(e.errorText)+"\n  ")]):e._e()])};i._withStripped=!0;var n={mixins:[r(125).a],computed:{fieldVal:{get:function(){return this.field.value},set:function(e){this.debouncedUpdateFieldValue({id:this.reference,val:e})}}}},s=r(2),a=Object(s.a)(n,i,[],!1,null,null,null);a.options.__file="src/components/forms/fields/InputText.vue";t.default=a.exports}}]);