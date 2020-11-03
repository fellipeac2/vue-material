/*!
 * @fellipeac2/vue-material v1.0.0-test
 * Made with <3 by undefined 2020
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=522)})({0:function(e,t){e.exports=function(e,t,n,r,a,o){var i,u,s,c,d,l=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(i=e,l=e.default),u="function"==typeof l?l.options:l,t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId=a),o?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=s):r&&(s=r),s&&(c=u.functional,d=c?u.render:u.beforeCreate,c?(u._injectStyles=s,u.render=function(e,t){return s.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,s):[s]),{esModule:i,exports:l,options:u}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,o,i,u;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=o.default.enabled,t=o.default.getThemeName,n=o.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,u.default)(t,e)},a=n(4),o=r(a),i=n(6),u=r(i)},126:function(e,t,n){"use strict";var r,a;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),a=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new a.default({name:"MdCard",props:{mdWithHover:Boolean},data:function(){return{MdCard:{expand:!1}}},provide:function(){return{MdCard:this.MdCard}},computed:{cardClasses:function(){return{"md-with-hover":this.mdWithHover,"md-expand-active":this.MdCard.expand}}}})},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdCardArea",props:{mdInset:Boolean},computed:{areaClasses:function(){return{"md-inset":this.mdInset}}}}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdCardHeader"}},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdCardHeaderText",data:function(){return{parentClasses:null}},mounted:function(){this.parentClasses=this.$parent.$el.classList,this.parentClasses.contains("md-card-header")&&this.parentClasses.add("md-card-header-flex")},beforeDestroy:function(){this.parentClasses.remove("md-card-header-flex")}}},130:function(e,t,n){"use strict";var r,a,o,i;Object.defineProperty(t,"__esModule",{value:!0}),r=(function(){function e(e,t){var n,r,a=[],o=!0,i=!1,u=void 0;try{for(n=e[Symbol.iterator]();!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,u=e}finally{try{!o&&n.return&&n.return()}finally{if(i)throw u}}return a}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),a=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(8),i=(function(e){return e&&e.__esModule?e:{default:e}})(o),t.default={name:"MdCardMedia",props:{mdRatio:a({type:String},(0,i.default)("md-ratio",["16-9","16/9","16:9","4-3","4/3","4:3","1-1","1/1","1:1"])),mdMedium:Boolean,mdBig:Boolean},computed:{mediaClasses:function(){var e,t,n,a,o={};return this.mdRatio&&(e=this.getAspectRatio())&&(t=r(e,2),n=t[0],a=t[1],o["md-ratio-"+n+"-"+a]=!0),(this.mdMedium||this.mdBig)&&(o={"md-medium":this.mdMedium,"md-big":this.mdBig}),o}},methods:{getAspectRatio:function(){var e=[];return-1!==this.mdRatio.indexOf(":")?e=this.mdRatio.split(":"):-1!==this.mdRatio.indexOf("/")?e=this.mdRatio.split("/"):-1!==this.mdRatio.indexOf("-")&&(e=this.mdRatio.split("-")),2===e.length?e:null}}}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdCardMediaActions"}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdCardMediaCover",props:{mdTextScrim:Boolean,mdSolid:Boolean},data:function(){return{backdropBackground:{}}},computed:{coverClasses:function(){return{"md-text-scrim":this.mdTextScrim,"md-solid":this.mdSolid}},coverStyles:function(){return{background:this.backdropBackground}}},methods:{applyScrimColor:function(e){this.$refs.backdrop&&(this.backdropBackground="linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, "+e/2+") 66%, rgba(0, 0, 0, "+e+") 100%)")},applySolidColor:function(e){var t=this.$el.querySelector(".md-card-area");t&&(t.style.background="rgba(0, 0, 0, "+e+")")},getImageLightness:function(e,t,n){var r=document.createElement("canvas");e.crossOrigin="Anonymous",e.onload=function(){var e,n,a=0,o=void 0,i=void 0,u=void 0,s=void 0,c=void 0,d=void 0,l=void 0;for(r.width=this.width,r.height=this.height,o=r.getContext("2d"),o.drawImage(this,0,0),i=o.getImageData(0,0,r.width,r.height),u=i.data,e=0,n=u.length;e<n;e+=4)s=u[e],c=u[e+1],d=u[e+2],l=Math.floor((s+c+d)/3),a+=l;t(Math.floor(a/(this.width*this.height)))},e.onerror=n}},mounted:function(){var e=this,t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.6;e.mdTextScrim?e.applyScrimColor(t):e.mdSolid&&e.applySolidColor(t)},n=this.$el.querySelector("img");n&&(this.mdTextScrim||this.mdSolid)&&this.getImageLightness(n,(function(e){var n=256,r=(100*Math.abs(n-e)/n+15)/100;r>=.7&&(r=.7),t(r)}),t)}}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdCardContent"}},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdCardExpand",inject:["MdCard"]}},135:function(e,t,n){"use strict";var r,a;Object.defineProperty(t,"__esModule",{value:!0}),r=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=(function(){function e(e,t){var n,r,a=[],o=!0,i=!1,u=void 0;try{for(n=e[Symbol.iterator]();!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,u=e}finally{try{!o&&n.return&&n.return()}finally{if(i)throw u}}return a}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),t.default={name:"MdCardExpandTrigger",inject:["MdCard"],render:function(e){var t=this,n=a(this.$slots.default,1),o=n[0],i=" md-card-expand-trigger",u={click:function(){t.MdCard.expand=!t.MdCard.expand}};return o?(o.componentOptions.listeners=r({},o.componentOptions.listeners,u),o.data.staticClass+=i,o):e("div",{staticClass:i,on:u})}}},136:function(e,t,n){"use strict";var r,a;Object.defineProperty(t,"__esModule",{value:!0}),r=n(48),a=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdCardExpandContent",inject:["MdCard"],data:function(){return{marginTop:0,resizeObserver:null,transitionEnabled:!0}},computed:{expand:function(){return this.MdCard.expand},contentStyles:function(){return{"margin-top":"-"+this.marginTop+"px",opacity:0===this.marginTop?1:0,"transition-property":this.transitionEnabled?null:"none"}}},methods:{calculateMarginTop:function(){this.expand?this.marginTop=0:this.marginTop=this.$el.children[0].offsetHeight},calculateMarginTopImmediately:function(){var e=this;this.expand||(this.transitionEnabled=!1,this.$nextTick((function(){e.calculateMarginTop(),e.$nextTick((function(){e.$el.offsetHeight,e.transitionEnabled=!0}))})))}},watch:{expand:function(){this.calculateMarginTop()}},mounted:function(){this.calculateMarginTopImmediately(),this.resizeObserver=(0,a.default)(this.$el,{childList:!0,characterData:!0,subtree:!0},this.calculateMarginTopImmediately)},beforeDestroy:function(){this.resizeObserver.disconnect()}}},137:function(e,t,n){"use strict";var r,a,o,i;Object.defineProperty(t,"__esModule",{value:!0}),r=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(8),o=(function(e){return e&&e.__esModule?e:{default:e}})(a),i=["left","right","space-between"],t.default={name:"MdCardActions",props:{mdAlignment:r({type:String,default:"right"},(0,o.default)("md-alignment",i))}}},2:function(t,n){t.exports=e},278:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,o,i,u,s,c,d,l,f,m,p,h,v,y,_,b,M,g,C,O,x,j,T,S,P,A;Object.defineProperty(t,"__esModule",{value:!0}),a=n(3),o=r(a),i=n(279),u=r(i),s=n(282),c=r(s),d=n(285),l=r(d),f=n(288),m=r(f),p=n(290),h=r(p),v=n(293),y=r(v),_=n(296),b=r(_),M=n(299),g=r(M),C=n(302),O=r(C),x=n(305),j=r(x),T=n(307),S=r(T),P=n(310),A=r(P),t.default=function(e){(0,o.default)(e),e.component(u.default.name,u.default),e.component(c.default.name,c.default),e.component(l.default.name,l.default),e.component(m.default.name,m.default),e.component(h.default.name,h.default),e.component(y.default.name,y.default),e.component(b.default.name,b.default),e.component(g.default.name,g.default),e.component(O.default.name,O.default),e.component(j.default.name,j.default),e.component(S.default.name,S.default),e.component(A.default.name,A.default)}},279:function(e,t,n){"use strict";function r(e){n(280)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(126),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(281),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},280:function(e,t){},281:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card",class:[e.$mdActiveTheme,e.cardClasses]},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},282:function(e,t,n){"use strict";function r(e){n(283)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(127),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(284),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},283:function(e,t){},284:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card-area",class:e.areaClasses},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},285:function(e,t,n){"use strict";function r(e){n(286)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(128),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(287),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},286:function(e,t){},287:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card-header"},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},288:function(e,t,n){"use strict";var r,a,o,i,u,s,c,d,l,f;Object.defineProperty(t,"__esModule",{value:!0}),r=n(129),a=n.n(r);for(o in r)"default"!==o&&(function(e){n.d(t,e,(function(){return r[e]}))})(o);i=n(289),u=n(0),s=!1,c=null,d=null,l=null,f=u(a.a,i.a,s,c,d,l),t.default=f.exports},289:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card-header-text"},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},290:function(e,t,n){"use strict";function r(e){n(291)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(130),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(292),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},291:function(e,t){},292:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card-media",class:e.mediaClasses},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},293:function(e,t,n){"use strict";function r(e){n(294)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(131),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(295),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},294:function(e,t){},295:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card-media-actions"},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},296:function(e,t,n){"use strict";function r(e){n(297)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(132),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(298),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},297:function(e,t){},298:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card-media-cover",class:e.coverClasses},[e._t("default"),e._v(" "),e.mdTextScrim?n("div",{ref:"backdrop",staticClass:"md-card-backdrop",style:e.coverStyles}):e._e()],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},299:function(e,t,n){"use strict";function r(e){n(300)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(133),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(301),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,o,i,u,s;Object.defineProperty(t,"__esModule",{value:!0}),n(7),a=n(5),o=r(a),i=n(4),u=r(i),s=function(){var e=new o.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"yyyy-MM-dd",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0,cancel:"Cancel",confirm:"Ok"},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return u.default.metaColors},set:function(e){u.default.metaColors=e}},theme:{get:function(){return u.default.theme},set:function(e){u.default.theme=e}},enabled:{get:function(){return u.default.enabled},set:function(e){u.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},300:function(e,t){},301:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card-content"},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},302:function(e,t,n){"use strict";function r(e){n(303)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(134),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(304),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},303:function(e,t){},304:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card-expand"},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},305:function(e,t,n){"use strict";function r(e){n(306)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(135),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(0),s=null,c=!1,d=r,l=null,f=null,m=u(o.a,s,c,d,l,f),t.default=m.exports},306:function(e,t){},307:function(e,t,n){"use strict";function r(e){n(308)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(136),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(309),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},308:function(e,t){},309:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card-expand-content",style:e.contentStyles},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},310:function(e,t,n){"use strict";function r(e){n(311)}var a,o,i,u,s,c,d,l,f,m;Object.defineProperty(t,"__esModule",{value:!0}),a=n(137),o=n.n(a);for(i in a)"default"!==i&&(function(e){n.d(t,e,(function(){return a[e]}))})(i);u=n(312),s=n(0),c=!1,d=r,l=null,f=null,m=s(o.a,u.a,c,d,l,f),t.default=m.exports},311:function(e,t){},312:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-card-actions",class:"md-alignment-"+e.mdAlignment},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},4:function(e,t,n){"use strict";var r,a,o,i,u;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),a=(function(e){return e&&e.__esModule?e:{default:e}})(r),o=null,i=null,u=null,t.default=new a.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var a=r.mdTheme,o=r.$parent;return a&&a!==t?a:e(o)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){o&&o.setAttribute("content",e)},setThemeColors:function(e){i&&i.setAttribute("content",e)},setMaskColors:function(e){u&&u.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;o=document.querySelector('[name="msapplication-TileColor"]'),i=document.querySelector('[name="theme-color"]'),u=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("MutationObserver"in window){var r=new window.MutationObserver(n);return r.observe(e,t),{disconnect:function(){r.disconnect()}}}}},5:function(e,t,n){"use strict";var r,a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return a.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),a=(function(e){return e&&e.__esModule?e:{default:e}})(r)},522:function(e,t,n){e.exports=n(278)},6:function(e,t,n){!(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return!!e&&"object"==typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===l}function r(e){return Array.isArray(e)?[]:{}}function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s(r(e),e,t):e}function o(e,t,n){return e.concat(t).map((function(e){return a(e,n)}))}function i(e,t){if(!t.customMerge)return s;var n=t.customMerge(e);return"function"==typeof n?n:s}function u(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=a(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=i(o,n)(e[o],t[o],n):r[o]=a(t[o],n)})),r}function s(e,t,n){var r,i,s;return n=n||{},n.arrayMerge=n.arrayMerge||o,n.isMergeableObject=n.isMergeableObject||c,r=Array.isArray(t),i=Array.isArray(e),s=r===i,s?r?n.arrayMerge(e,t,n):u(e,t,n):a(t,n)}var c=function(n){return e(n)&&!t(n)},d="function"==typeof Symbol&&Symbol.for,l=d?Symbol.for("react.element"):60103;return s.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return s(e,n,t)}),{})},s}))},7:function(e,t){},8:function(e,t,n){"use strict";var r,a;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),a=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=function(e,t){return{validator:function(n){return!!t.includes(n)||(a.default.util.warn("The "+e+" prop is invalid. Given value: "+n+". Available options: "+t.join(", ")+".",void 0),!1)}}}}})}));