/*!
 * @fellipeac2/vue-material v1.0.0-test3
 * Made with <3 by undefined 2020
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=531)})({0:function(e,t){e.exports=function(e,t,n,r,o,u){var a,s,i,c,l,d=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(a=e,d=e.default),s="function"==typeof d?d.options:d,t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),o&&(s._scopeId=o),u?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},s._ssrRegister=i):r&&(i=r),i&&(c=s.functional,l=c?s.render:s.beforeCreate,c?(s._injectStyles=i,s.render=function(e,t){return i.call(t),l(e,t)}):s.beforeCreate=l?[].concat(l,i):[i]),{esModule:a,exports:d,options:s}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,n=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,s.default)(t,e)},o=n(4),u=r(o),a=n(6),s=r(a)},105:function(e,t,n){"use strict";function r(e){n(162)}var o,u,a,s,i,c,l,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(71),u=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);s=n(163),i=n(0),c=!1,l=r,d=null,f=null,m=i(u.a,s.a,c,l,d,f),t.default=m.exports},162:function(e,t){},163:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"md-empty-state",appear:""}},[n("div",{staticClass:"md-empty-state",class:[e.emptyStateClasses,e.$mdActiveTheme],style:e.emptyStateStyles},[n("div",{staticClass:"md-empty-state-container"},[e.mdIcon?[e.isAssetIcon(e.mdIcon)?n("md-icon",{staticClass:"md-empty-state-icon",attrs:{"md-src":e.mdIcon}}):n("md-icon",{staticClass:"md-empty-state-icon"},[e._v(e._s(e.mdIcon))])]:e._e(),e._v(" "),e.mdLabel?n("strong",{staticClass:"md-empty-state-label"},[e._v(e._s(e.mdLabel))]):e._e(),e._v(" "),e.mdDescription?n("p",{staticClass:"md-empty-state-description"},[e._v(e._s(e.mdDescription))]):e._e(),e._v(" "),e._t("default")],2)])])},o=[],u={render:r,staticRenderFns:o};t.a=u},2:function(t,n){t.exports=e},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,s,i;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),u=r(o),a=n(4),s=r(a),i=function(){var e=new u.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"yyyy-MM-dd",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0,cancel:"Cancel",confirm:"Ok"},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return s.default.metaColors},set:function(e){s.default.metaColors=e}},theme:{get:function(){return s.default.theme},set:function(e){s.default.theme=e}},enabled:{get:function(){return s.default.enabled},set:function(e){s.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=i(),e.prototype.$material=e.material)}},373:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,s;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),u=r(o),a=n(105),s=r(a),t.default=function(e){(0,u.default)(e),e.component(s.default.name,s.default)}},4:function(e,t,n){"use strict";var r,o,u,a,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),u=null,a=null,s=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,u=r.$parent;return o&&o!==t?o:e(u)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){s&&s.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),s=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{isAssetIcon:function(e){return/\w+[\/\\.]\w+/.test(e)}}}},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},531:function(e,t,n){e.exports=n(373)},6:function(e,t,n){!(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return!!e&&"object"==typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===d}function r(e){return Array.isArray(e)?[]:{}}function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?i(r(e),e,t):e}function u(e,t,n){return e.concat(t).map((function(e){return o(e,n)}))}function a(e,t){if(!t.customMerge)return i;var n=t.customMerge(e);return"function"==typeof n?n:i}function s(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=o(e[t],n)})),Object.keys(t).forEach((function(u){n.isMergeableObject(t[u])&&e[u]?r[u]=a(u,n)(e[u],t[u],n):r[u]=o(t[u],n)})),r}function i(e,t,n){var r,a,i;return n=n||{},n.arrayMerge=n.arrayMerge||u,n.isMergeableObject=n.isMergeableObject||c,r=Array.isArray(t),a=Array.isArray(e),i=r===a,i?r?n.arrayMerge(e,t,n):s(e,t,n):o(t,n)}var c=function(n){return e(n)&&!t(n)},l="function"==typeof Symbol&&Symbol.for,d=l?Symbol.for("react.element"):60103;return i.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return i(e,n,t)}),{})},i}))},7:function(e,t){},71:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,s,i,c;Object.defineProperty(t,"__esModule",{value:!0}),o=n(1),u=r(o),a=n(97),s=r(a),i=n(43),c=r(i),t.default=new u.default({name:"MdEmptyState",mixins:[c.default],props:s.default,computed:{emptyStateClasses:function(){return{"md-rounded":this.mdRounded}},emptyStateStyles:function(){if(this.mdRounded){var e=this.mdSize+"px";return{width:e,height:e}}}}})},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mdRounded:Boolean,mdSize:{type:Number,default:420},mdIcon:String,mdLabel:String,mdDescription:String}}})}));