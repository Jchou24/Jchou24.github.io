(function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://jchou24.github.io/Demos/PagePreviewScrollbar/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"1a7d":function(e,t,r){},"2a73":function(e,t,r){"use strict";r("d38d")},"40b6":function(e,t,r){},"4c20":function(e,t,r){"use strict";r("b570")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"7e54":function(e,t,r){"use strict";r("dff9")},"908c":function(e,t,r){"use strict";r("1a7d")},"9c0c":function(e,t,r){},b570:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("ce5b"),a=r.n(o);r("bf40"),r("5363");n["default"].use(a.a);var i={},l=new a.a(i),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("GitHubCorner",{attrs:{repo:"https://github.com/Jchou24/page-preview-scrollbar",position:"left"}}),n("div",{staticClass:"head"}),n("v-card",{staticClass:"tool-bar pb-4",attrs:{elevation:"6"}},[n("v-card-title",{staticClass:"text-center text-h5"},[e._v(" Scrollbar Settings ")]),n("v-divider"),n("v-card-text",{staticClass:"pb-0"},[n("v-container",[n("v-row",{staticClass:"mb-6"},[n("v-btn",{attrs:{block:"",rounded:""},on:{click:e.AddIcon}},[e._v(" Add Vue Icon ")]),n("v-btn",{attrs:{block:"",rounded:""},on:{click:e.RemoveIcon}},[e._v(" Remove Vue Icon ")]),n("v-btn",{attrs:{block:"",rounded:""},on:{click:e.ResetScrollbar}},[e._v(" Update scrollbar ")])],1),n("v-row",{staticClass:"mb-6"},[n("v-btn",{attrs:{block:"",rounded:"",color:e.GetColor(e.isHideShorterHeight)},on:{click:function(t){e.isHideShorterHeight=!e.isHideShorterHeight}}},[e._v(" Toggle isHideShorterHeight "),n("v-spacer"),e._v(" "+e._s(e.isHideShorterHeight)+" ")],1),n("v-btn",{attrs:{block:"",rounded:"",color:e.GetColor(e.isShowCloseButton)},on:{click:function(t){e.isShowCloseButton=!e.isShowCloseButton}}},[e._v(" Toggle isShowCloseButton "),n("v-spacer"),e._v(" "+e._s(e.isShowCloseButton)+" ")],1),n("v-btn",{attrs:{block:"",rounded:"",color:e.GetColor(e.persist)},on:{click:function(t){e.persist=!e.persist}}},[e._v(" Toggle persist "),n("v-spacer"),e._v(" "+e._s(e.persist)+" ")],1),n("v-btn",{attrs:{block:"",rounded:"",color:e.GetColor(e.isAutoOpacity)},on:{click:function(t){e.isAutoOpacity=!e.isAutoOpacity}}},[e._v(" Toggle isAutoOpacity "),n("v-spacer"),e._v(" "+e._s(e.isAutoOpacity)+" ")],1),n("v-btn",{attrs:{block:"",rounded:"",color:e.GetColor(e.disableRepaint)},on:{click:function(t){e.disableRepaint=!e.disableRepaint}}},[e._v(" Toggle disableRepaint "),n("v-spacer"),e._v(" "+e._s(e.disableRepaint)+" ")],1),n("v-btn",{attrs:{block:"",rounded:"",color:e.GetColor(e.isShowBrowserScrollbar)},on:{click:function(t){e.isShowBrowserScrollbar=!e.isShowBrowserScrollbar}}},[e._v(" Toggle isShowBrowserScrollbar "),n("v-spacer"),e._v(" "+e._s(e.isShowBrowserScrollbar)+" ")],1)],1),n("v-row",{staticClass:"mb-5"},[n("v-divider",{})],1),n("v-row",{staticClass:"mb-6 text-h6 text-center"},[e._v(" Paint specific target ")]),n("v-row",{staticClass:"mb-5"},[n("v-btn",{staticClass:"px-8",attrs:{rounded:"",color:e.GetColor2("html"===e.targetSelector)},on:{click:e.PaintHtml}},[e._v(" html ")]),n("v-btn",{staticClass:"px-8 mx-3",attrs:{rounded:"",color:e.GetColor2("#app"===e.targetSelector)},on:{click:e.PaintApp}},[e._v(" #app ")]),n("v-btn",{staticClass:"px-8",attrs:{rounded:"",color:e.GetColor2(".images"===e.targetSelector)},on:{click:e.PaintImage}},[e._v(" .images ")])],1),n("v-row",[n("v-text-field",{staticClass:"mx-1",attrs:{label:"targetSelector",outlined:"",rounded:"",dense:""},model:{value:e.targetSelector,callback:function(t){e.targetSelector=t},expression:"targetSelector"}})],1),n("v-row",{staticClass:"mb-5"},[n("v-divider",{})],1),n("v-row",{staticClass:"mb-6 text-h6 text-center"},[e._v(" Adjust scrollbar position, height ")]),n("v-row",{staticClass:"mb-5"},[n("v-btn",{staticClass:"px-8",attrs:{rounded:"",color:e.GetColor2(e.isScrollbarAlignTop)},on:{click:function(t){e.isScrollbarAlignTop=!0}}},[e._v(" Align Top ")]),n("v-btn",{staticClass:"px-8 mx-3",attrs:{rounded:"",color:e.GetColor2(!e.isScrollbarAlignTop)},on:{click:function(t){e.isScrollbarAlignTop=!1}}},[e._v(" Align Bottom ")])],1),n("v-row",[n("v-slider",{staticClass:"mx-2",attrs:{min:0,man:100,"append-icon":"mdi-plus-circle-outline","prepend-icon":"mdi-minus-circle-outline"},on:{"click:append":e.IncrementScrollbarHeight,"click:prepend":e.DecrementScrollbarHeight},model:{value:e.scrollbarHeightPercent,callback:function(t){e.scrollbarHeightPercent=t},expression:"scrollbarHeightPercent"}})],1)],1)],1)],1),n("div",{staticClass:"images"},e._l(e.images,(function(t,o){return n("div",{key:o,staticClass:"row"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("h1",[e._v(" "+e._s(o)+" ")])])})),0),n("PagePreviewScrollbar",{ref:"scrollbar",staticClass:"PagePreviewScrollbar",style:e.GetSCrollbarStyle,attrs:{isShowCloseButton:e.isShowCloseButton,isHideShorterHeight:e.isHideShorterHeight,isAutoOpacity:e.isAutoOpacity,disableRepaint:e.disableRepaint,persist:e.persist,targetSelector:e.targetSelector,paintOption:e.option},on:{repainted:e.HandleRepainted,active:e.HandleActive,inactive:e.HandleInActive}})],1)},s=[],u=(r("cb29"),r("a6f4")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"GitHubCorner"},["right"===e.position?r("a",{staticClass:"github-corner",attrs:{href:e.repo,"aria-label":"View source on GitHub",target:"_blank",rel:"noopener noreferrer"}},[r("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[r("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),r("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),r("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]):r("a",{staticClass:"github-corner",attrs:{href:e.repo,"aria-label":"View source on GitHub",target:"_blank",rel:"noopener noreferrer"}},[r("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",left:"0",transform:"scale(-1, 1)"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[r("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),r("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),r("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])])},d=[],v={name:"GitHubCorner",props:{repo:{type:String,default:""},position:{type:String,default:"right"}}},f=v,b=(r("ebc5"),r("2877")),h=Object(b["a"])(f,p,d,!1,null,"377bf8be",null),g=h.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"PagePreviewScrollbar",class:e.GetClass,style:e.GetStyle,on:{mouseenter:e.HandleMouseEnter,mouseleave:e.HandleMouseLeave}},[r("SimpleTransition",{attrs:{enterAnimation:"animate__fadeInRight",leaveAnimation:"animate__fadeOutRight"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"page-preview-scroll-bar"},[r("div",{staticClass:"top-block"}),r("Previewer",{ref:"Previewer",staticClass:"Previewer",attrs:{containerClass:"PagePreviewScrollbar",previewerId:e.previewerId,targetSelector:e.targetSelector,paintOption:e.paintOption},on:{repainted:function(t){return e.emit("repainted")}}}),r("PreviewScroller",{ref:"PreviewScroller",staticClass:"preview-scroller",attrs:{containerClass:"PagePreviewScrollbar",throttle:e.throttle,targetSelector:e.targetSelector}}),e.isShowCloseButton?r("CloseButton",{staticClass:"close-btn-top",nativeOn:{click:function(t){return e.HandleClose(t)}}}):e._e()],1)])],1)},C=[],S=(r("a9e3"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"CloseButton"},[r("span",{staticClass:"material-icons"},[e._v("cancel")])])}],O=(r("619b"),Object(u["defineComponent"])({name:"CloseButton"})),y=O,_=(r("7e54"),Object(b["a"])(y,S,w,!1,null,"867fb5ae",null)),j=_.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{mode:e.mode,"enter-active-class":e.enterClass,"leave-active-class":e.leaveClass}},[e._t("default")],2)},P=[],x=(r("99af"),r("4b3c"),Object(u["defineComponent"])({name:"SimpleTransition",props:{mode:{type:String},enterAnimation:{type:String,default:"animate__fadeIn"},leaveAnimation:{type:String,default:"animate__fadeOut"},speed:{type:String,default:"animate__faster"}},setup:function(e){var t=Object(u["computed"])((function(){return"animate__animated ".concat(e.enterAnimation," ").concat(e.speed)})),r=Object(u["computed"])((function(){return"animate__animated ".concat(e.leaveAnimation," ").concat(e.speed)}));return{enterClass:t,leaveClass:r}}})),A=x,k=Object(b["a"])(A,H,P,!1,null,"43db4784",null),B=k.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Previewer",attrs:{id:e.previewerId}})},T=[],G=(r("4de4"),r("5530")),I=r("e774"),M=Object(u["defineComponent"])({name:"Previewer",props:{previewerId:{type:String,default:"Previewer"},targetSelector:{type:String,default:"html"},paintOption:{type:Object,default:function(){return{}}},containerClass:{type:String,default:"PagePreviewScrollbar"}},setup:function(e,t){var r=t.emit,n=Object(u["computed"])((function(){var t=function(t){var r,n,o="noscript"===(null===(r=t.tagName)||void 0===r?void 0:r.toLowerCase());if(!0===o)return!1;var a=null===(n=t.classList)||void 0===n?void 0:n.contains(e.containerClass);return!1!==a&&!0!==a||!a},r=function(r){var n=e.paintOption.filter;return n?n(r)&&t(r):t(r)};return Object(G["a"])(Object(G["a"])({cacheBust:!0},e.paintOption),{},{filter:r})})),o=function(){var t=document.querySelector(e.targetSelector),o=document.getElementById(e.previewerId);t&&o&&I["a"](t,n.value).then((function(e){var t=new Image;t.src=e;var n=o.children;n.length>0&&(o.innerHTML=""),o.appendChild(t),r("repainted")}))};function a(){o()}return Object(u["watch"])((function(){return e.targetSelector}),o),{Reset:a}}}),L=M,E=(r("908c"),Object(b["a"])(L,R,T,!1,null,null,null)),$=E.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"PreviewScroller"},[r("div",{staticClass:"mask-top",style:e.heightTop}),r("div",{staticClass:"mask-center",style:e.heightCenter}),r("div",{staticClass:"mask-bottom",style:e.heightBottom}),r("div",{staticClass:"cover",on:{mousedown:function(t){return t.preventDefault(),e.HandleMouseDown(t)}}})])},D=[],V=r("bce4"),q=r("1157"),Z=r.n(q),z=r("84a2"),J=r.n(z),U=Object(u["defineComponent"])({name:"PreviewScroller",props:{throttle:{type:Number,default:25},targetSelector:{type:String,default:"html"},containerClass:{type:String,default:"PagePreviewScrollbar"}},setup:function(e){var t=Object(V["a"])(),r=t.height,n=Object(u["ref"])(0),o=Object(u["ref"])(0),a=Object(u["ref"])(0),i=function(){return n.value=Z()(window).scrollTop()||0},l=function(){return o.value=Z()(e.targetSelector).height()||0},c=function(){var t;return a.value=(null===(t=document.querySelector(".".concat(e.containerClass)))||void 0===t?void 0:t.clientHeight)||0},s=Object(u["ref"])(""),p=Object(u["ref"])(""),d=Object(u["ref"])(""),v=0,f=0,b=0,h=function(){i(),l(),c(),v=(n.value-0)*(a.value/o.value),f=r.value*(a.value/o.value),b=a.value-v-f,s.value="height: ".concat(v,"px;"),p.value="height: ".concat(f,"px;"),d.value="height: ".concat(b,"px;")},g=Object(u["ref"])(!1),m=0,C=J()((function(){Z()(window).scrollTop(m)}),e.throttle);function S(t){var r,n=f/2,i=(null===(r=document.querySelector(".".concat(e.containerClass)))||void 0===r?void 0:r.getBoundingClientRect().top)||0,l=t.clientY-i;l=l<0?0:l,l=l>a.value?a.value:l,m=(l-n)/a.value*o.value,C()}function w(e){g.value=!0,S(e)}function O(){g.value=!1}function y(e){g.value&&S(e)}Object(u["onMounted"])((function(){h(),Z()(window).on("scroll",i),Z()(window).on("mouseup",O),Z()(window).on("mousemove",y)}));var _=h;return{heightTop:s,heightCenter:p,heightBottom:d,HandleMouseDown:w,HandleMouseUp:O,HandleMouseMove:y,Reset:_}}}),Y=U,F=(r("2a73"),Object(b["a"])(Y,N,D,!1,null,null,null)),K=F.exports,Q=r("6dd8"),W=r("f7fe"),X=r.n(W),ee=Object(u["defineComponent"])({name:"PagePreviewScrollbar",props:{isHideShorterHeight:{type:Boolean,default:!0},isShowCloseButton:{type:Boolean,default:!0},isAutoOpacity:{type:Boolean,default:!0},persist:{type:Boolean,default:!0},zIndex:{type:Number,default:100},disableRepaint:{type:Boolean,default:!1},previewerId:{type:String,default:"Previewer"},targetSelector:{type:String,default:"html"},throttle:{type:Number,default:25},debounceRepaint:{type:Number,default:1e3},paintOption:{type:Object,default:function(){return{}}}},components:{CloseButton:j,SimpleTransition:B,Previewer:$,PreviewScroller:K},setup:function(e,t){var r=t.emit,n=t.refs,o=Object(V["a"])(),a=(o.width,o.height),i=Object(u["ref"])(e.persist),l=Object(u["ref"])(!1),c=Object(u["computed"])((function(){return"z-index: ".concat(e.zIndex,";")})),s=Object(u["computed"])((function(){return{active:!e.isAutoOpacity||!1!==i.value&&l.value}})),p=function(){var t;e.disableRepaint||null===(t=n.Previewer)||void 0===t||t.Reset()},d=function(){var e;null===(e=n.PreviewScroller)||void 0===e||e.Reset()},v=X()(p,e.debounceRepaint),f=J()(d,e.throttle),b=function(){v(),f()};Object(u["watch"])(i,(function(){i.value?r("active"):r("inactive")}));var h=Object(u["ref"])(0),g=function(){return h.value=Z()(e.targetSelector).height()||0};function m(){return g(),!e.isHideShorterHeight||!(h.value<=1.5*a.value)}var C=Object(u["ref"])(!1);function S(){C.value?(b(),i.value=m()):C.value=!0}function w(){var t=new Q["a"](X()(S,e.debounceRepaint)),r=document.querySelector(e.targetSelector);r&&t.observe(r)}function O(){l.value=!0,m()&&(i.value=!0)}function y(){l.value=!1,m()&&(e.persist||(i.value=!1))}function _(){i.value=!1}return Object(u["onMounted"])((function(){d(),w(),Object(u["nextTick"])(b),Z()(window).on("scroll",f)})),Object(u["watch"])((function(){return e.persist}),(function(){return i.value=e.persist})),Object(u["watch"])((function(){return e.isHideShorterHeight}),S),{isActive:i,emit:r,GetStyle:c,GetClass:s,Reset:b,ResetScroller:d,HandleMouseEnter:O,HandleMouseLeave:y,HandleClose:_}}}),te=ee,re=(r("4c20"),Object(b["a"])(te,m,C,!1,null,"c613ad64",null)),ne=re.exports,oe=r("04b0"),ae=(r("da96"),Object(u["defineComponent"])({name:"App",components:{GitHubCorner:g,PagePreviewScrollbar:ne},setup:function(e,t){var r=t.refs;Object(oe["provideToast"])({toastClassName:"toast-notification",transition:"Vue-Toastification__fade",draggable:!1,timeout:3e3});var n=Object(oe["useToast"])(),o=Object(V["a"])(),a=(o.width,o.height),i=Object(u["ref"])({}),l=Object(u["ref"])(new Array(15).fill(0)),c=function(){return l.value.push(0)},s=function(){return l.value.pop()},p=Object(u["ref"])(!1),d=Object(u["ref"])(!0),v=Object(u["ref"])(!0),f=Object(u["ref"])(!0),b=Object(u["ref"])(!1),h=Object(u["ref"])(!0),g=Object(u["ref"])("html");function m(e){return e?"teal lighten-4":"deep-purple lighten-4"}function C(e){return e?"teal lighten-4":""}function S(){var e;null===(e=r.scrollbar)||void 0===e||e.Reset()}function w(){g.value="html"}function O(){g.value="#app"}function y(){g.value=".images"}function _(){n.success("Repainted")}function j(){n.success("Active")}function H(){n.success("InActive")}Object(u["watch"])(p,(function(){var e=document.querySelector("body");p.value?null===e||void 0===e||e.classList.add("show-scrollbar"):null===e||void 0===e||e.classList.remove("show-scrollbar")}));var P=Object(u["ref"])(100),x=Object(u["ref"])(!0),A=function(){return P.value-=5},k=function(){return P.value+=5},B=Object(u["computed"])((function(){return{height:"".concat(a.value*(P.value/100),"px !important"),top:"".concat(x.value?"0":"unset"," !important"),bottom:"".concat(x.value?"unset":"0"," !important")}}));return Object(u["watch"])(P,X()(S,300)),{isHideShorterHeight:d,isShowCloseButton:v,isShowBrowserScrollbar:p,isAutoOpacity:f,disableRepaint:b,isScrollbarAlignTop:x,persist:h,targetSelector:g,option:i,images:l,scrollbarHeightPercent:P,AddIcon:c,RemoveIcon:s,ResetScrollbar:S,GetColor:m,GetColor2:C,PaintHtml:w,PaintApp:O,PaintImage:y,HandleRepainted:_,HandleActive:j,HandleInActive:H,DecrementScrollbarHeight:A,IncrementScrollbarHeight:k,GetSCrollbarStyle:B}}})),ie=ae,le=(r("5c0b"),Object(b["a"])(ie,c,s,!1,null,null,null)),ce=le.exports;n["default"].config.productionTip=!1,n["default"].use(u["default"]),new n["default"]({vuetify:l,render:function(e){return e(ce)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},d38d:function(e,t,r){},dff9:function(e,t,r){},ebc5:function(e,t,r){"use strict";r("40b6")}});
//# sourceMappingURL=app.aa55c54d.js.map