(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{965:function(t,e,n){"use strict";n.r(e);var r=/^(attrs|props|on|nativeOn|class|style|hook)$/;function o(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function u(t,e){return t(e={exports:{}},e.exports),e.exports}var a=function(t,e){return{value:e,done:!!t}},c={},s={}.toString,l=function(t){return s.call(t).slice(8,-1)},f=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==l(t)?t.split(""):Object(t)},h=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},p=function(t){return f(h(t))},d=u(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),v=u(function(t){var e=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=e)}),y=(v.version,function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}),g=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t){if(!g(t))throw TypeError(t+" is not an object!");return t},_=function(t){try{return!!t()}catch(t){return!0}},b=!_(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),x=d.document,A=g(x)&&g(x.createElement),S=function(t){return A?x.createElement(t):{}},O=!b&&!_(function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a}),w=Object.defineProperty,j={f:b?Object.defineProperty:function(t,e,n){if(m(t),e=function(t,e){if(!g(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!g(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!g(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!g(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(e,!0),m(n),O)try{return w(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},C=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},E=b?function(t,e,n){return j.f(t,e,C(1,n))}:function(t,e,n){return t[e]=n,t},L={}.hasOwnProperty,M=function(t,e){return L.call(t,e)},T=function(t,e,n){var r,o,i,u=t&T.F,a=t&T.G,c=t&T.S,s=t&T.P,l=t&T.B,f=t&T.W,h=a?v:v[e]||(v[e]={}),p=h.prototype,g=a?d:c?d[e]:(d[e]||{}).prototype;for(r in a&&(n=e),n)(o=!u&&g&&void 0!==g[r])&&M(h,r)||(i=o?g[r]:n[r],h[r]=a&&"function"!=typeof g[r]?n[r]:l&&o?y(i,d):f&&g[r]==i?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(i):s&&"function"==typeof i?y(Function.call,i):i,s&&((h.virtual||(h.virtual={}))[r]=i,t&T.R&&p&&!p[r]&&E(p,r,i)))};T.F=1,T.G=2,T.S=4,T.P=8,T.B=16,T.W=32,T.U=64,T.R=128;var k,R=T,P=E,I=Math.ceil,F=Math.floor,N=function(t){return isNaN(t=+t)?0:(t>0?F:I)(t)},U=Math.min,$=function(t){return t>0?U(N(t),9007199254740991):0},B=Math.max,V=Math.min,G=u(function(t){var e=d["__core-js_shared__"]||(d["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:v.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),H=0,D=Math.random(),q=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++H+D).toString(36))},z=G("keys"),J=function(t){return z[t]||(z[t]=q(t))},W=(k=!1,function(t,e,n){var r,o=p(t),i=$(o.length),u=function(t,e){return(t=N(t))<0?B(t+e,0):V(t,e)}(n,i);if(k&&e!=e){for(;i>u;)if((r=o[u++])!=r)return!0}else for(;i>u;u++)if((k||u in o)&&o[u]===e)return k||u||0;return!k&&-1}),X=J("IE_PROTO"),K="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Q=Object.keys||function(t){return function(t,e){var n,r=p(t),o=0,i=[];for(n in r)n!=X&&M(r,n)&&i.push(n);for(;e.length>o;)M(r,n=e[o++])&&(~W(i,n)||i.push(n));return i}(t,K)},Y=b?Object.defineProperties:function(t,e){m(t);for(var n,r=Q(e),o=r.length,i=0;o>i;)j.f(t,n=r[i++],e[n]);return t},Z=d.document,tt=Z&&Z.documentElement,et=J("IE_PROTO"),nt=function(){},rt=function(){var t,e=S("iframe"),n=K.length;for(e.style.display="none",tt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),rt=t.F;n--;)delete rt.prototype[K[n]];return rt()},ot=Object.create||function(t,e){var n;return null!==t?(nt.prototype=m(t),n=new nt,nt.prototype=null,n[et]=t):n=rt(),void 0===e?n:Y(n,e)},it=u(function(t){var e=G("wks"),n=d.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:q)("Symbol."+t))}).store=e}),ut=j.f,at=it("toStringTag"),ct=function(t,e,n){t&&!M(t=n?t:t.prototype,at)&&ut(t,at,{configurable:!0,value:e})},st={};E(st,it("iterator"),function(){return this});var lt=function(t,e,n){t.prototype=ot(st,{next:C(1,n)}),ct(t,e+" Iterator")},ft=function(t){return Object(h(t))},ht=J("IE_PROTO"),pt=Object.prototype,dt=Object.getPrototypeOf||function(t){return t=ft(t),M(t,ht)?t[ht]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?pt:null},vt=it("iterator"),yt=!([].keys&&"next"in[].keys()),gt=function(){return this},mt=function(t,e,n,r,o,i,u){lt(n,e,r);var a,s,l,f=function(t){if(!yt&&t in v)return v[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},h=e+" Iterator",p="values"==o,d=!1,v=t.prototype,y=v[vt]||v["@@iterator"]||o&&v[o],g=y||f(o),m=o?p?f("entries"):g:void 0,_="Array"==e&&v.entries||y;if(_&&(l=dt(_.call(new t)))!==Object.prototype&&l.next&&ct(l,h,!0),p&&y&&"values"!==y.name&&(d=!0,g=function(){return y.call(this)}),u&&(yt||d||!v[vt])&&E(v,vt,g),c[e]=g,c[h]=gt,o)if(a={values:p?g:f("values"),keys:i?g:f("keys"),entries:m},u)for(s in a)s in v||P(v,s,a[s]);else R(R.P+R.F*(yt||d),e,a);return a};mt(Array,"Array",function(t,e){this._t=p(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,a(1)):a(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");c.Arguments=c.Array;for(var _t=it("toStringTag"),bt="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),xt=0;xt<bt.length;xt++){var At=bt[xt],St=d[At],Ot=St&&St.prototype;Ot&&!Ot[_t]&&E(Ot,_t,At),c[At]=c.Array}var wt,jt=(wt=!0,function(t,e){var n,r,o=String(h(t)),i=N(e),u=o.length;return i<0||i>=u?wt?"":void 0:(n=o.charCodeAt(i))<55296||n>56319||i+1===u||(r=o.charCodeAt(i+1))<56320||r>57343?wt?o.charAt(i):n:wt?o.slice(i,i+2):r-56320+(n-55296<<10)+65536});mt(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=jt(e,n),this._i+=t.length,{value:t,done:!1})});var Ct=it("toStringTag"),Et="Arguments"==l(function(){return arguments}()),Lt=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Ct))?n:Et?l(e):"Object"==(r=l(e))&&"function"==typeof e.callee?"Arguments":r},Mt=it("iterator"),Tt=v.isIterable=function(t){var e=Object(t);return void 0!==e[Mt]||"@@iterator"in e||c.hasOwnProperty(Lt(e))},kt=u(function(t){t.exports={default:Tt,__esModule:!0}});i(kt);var Rt=it("iterator"),Pt=v.getIteratorMethod=function(t){if(null!=t)return t[Rt]||t["@@iterator"]||c[Lt(t)]},It=v.getIterator=function(t){var e=Pt(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return m(e.call(t))},Ft=u(function(t){t.exports={default:It,__esModule:!0}});i(Ft);var Nt=i(u(function(t,e){e.__esModule=!0;var n=o(kt),r=o(Ft);function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,n.default)(Object(t)))return function(t,e){var n=[],o=!0,i=!1,u=void 0;try{for(var a,c=(0,r.default)(t);!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,u=t}finally{try{!o&&c.return&&c.return()}finally{if(i)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()})),Ut=function(t,e,n,r){try{return r?e(m(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&m(o.call(t)),e}},$t=it("iterator"),Bt=Array.prototype,Vt=function(t,e,n){e in t?j.f(t,e,C(0,n)):t[e]=n},Gt=it("iterator"),Ht=!1;try{[7][Gt]().return=function(){Ht=!0}}catch(t){}R(R.S+R.F*!function(t,e){if(!e&&!Ht)return!1;var n=!1;try{var r=[7],o=r[Gt]();o.next=function(){return{done:n=!0}},r[Gt]=function(){return o},t(r)}catch(t){}return n}(function(t){}),"Array",{from:function(t){var e,n,r,o,i,u=ft(t),a="function"==typeof this?this:Array,s=arguments.length,l=s>1?arguments[1]:void 0,f=void 0!==l,h=0,p=Pt(u);if(f&&(l=y(l,s>2?arguments[2]:void 0,2)),null!=p&&(a!=Array||(void 0===(i=p)||c.Array!==i&&Bt[$t]!==i)))for(o=p.call(u),n=new a;!(r=o.next()).done;h++)Vt(n,h,f?Ut(o,l,[r.value,h],!0):r.value);else for(n=new a(e=$(u.length));e>h;h++)Vt(n,h,f?l(u[h],h):u[h]);return n.length=h,n}});var Dt=v.Array.from,qt=u(function(t){t.exports={default:Dt,__esModule:!0}});i(qt);var zt,Jt,Wt,Xt,Kt=i(u(function(t,e){e.__esModule=!0;var n,r=(n=qt)&&n.__esModule?n:{default:n};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}}));zt="keys",Jt=function(){return function(t){return Q(ft(t))}},Wt=(v.Object||{})[zt]||Object[zt],(Xt={})[zt]=Jt(Wt),R(R.S+R.F*_(function(){Wt(1)}),"Object",Xt);var Qt=v.Object.keys,Yt=i(u(function(t){t.exports={default:Qt,__esModule:!0}})),Zt={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"},te=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e=t,"[object RegExp]"!==Object.prototype.toString.call(e))throw new TypeError("Expected a RegExp instance");var r=Yt(Zt).map(function(e){return("boolean"==typeof n[e]?n[e]:t[e])?Zt[e]:""}).join(""),o=new RegExp(n.source||t.source,r);return o.lastIndex="number"==typeof n.lastIndex?n.lastIndex:t.lastIndex,o};var ee=i(u(function(t,e){e.__esModule=!0;var n,r=(n=qt)&&n.__esModule?n:{default:n};e.default=function(t){return Array.isArray(t)?t:(0,r.default)(t)}}));function ne(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e;if("string"==typeof e||e instanceof RegExp)r=[e];else if(!Array.isArray(e))return[];var o=[];r.forEach(function(e){o.push.apply(o,Kt(function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n instanceof RegExp){var o=te(n,{global:!0});return(e.match(o)||[]).reduce(function(n,r){var i=t(e,r,!o.ignoreCase);return[].concat(Kt(n),Kt(i))},[])}var i=n.length;if(0===i)return[];var u=[],a=e,c=n;r||(a=e.toLocaleLowerCase(),c=n.toLocaleLowerCase());for(var s=0,l=a.indexOf(c,s);l>-1;)s=l+i,u.push([l,s]),l=a.indexOf(c,l+1);return u}(t,e,n)))});var i=function(t){var e=ee(t).slice(0);e.sort(function(t,e){return t[0]===e[0]?t[1]<e[1]?-1:1:t[0]<e[0]?-1:1});var n=[],r=-1,o=-1;return e.forEach(function(t){var e=Nt(t,2),i=e[0],u=e[1];o<=i?(-1!==o&&n.push([r,o]),r=i,o=u):o=Math.max(u,o)}),-1!==o&&n.push([r,o]),n}(o),u=[],a=0;return i.forEach(function(e,n){var r=Nt(e,2),o=r[0],i=r[1];a!==o&&u.push({isHighlighted:!1,text:t.slice(a,o)}),u.push({isHighlighted:!0,text:t.slice(o,i),highlightIndex:n}),a=i}),a!==t.length&&u.push({isHighlighted:!1,text:t.slice(a)}),u}var re=[Object,Array,String],oe={name:"text-highlight",props:{queries:[Array,String,RegExp],caseSensitive:Boolean,highlightStyle:re,highlightClass:re,highlightComponent:{type:[String,Object],default:"mark"}},render:function(t){var e=this;return t("span",[this.highlights.map(function(n){var i=n.text,u=n.isHighlighted,a=n.highlightIndex;return u?t(e.highlightComponent,[{class:["text__highlight",e.highlightClass],style:e.highlightStyle,key:a,attrs:{index:a,text:i}},e.attributes].reduce(function(t,e){var n,i,u,a,c;for(u in e)if(n=t[u],i=e[u],n&&r.test(u))if("class"===u&&("string"==typeof n&&(c=n,t[u]=n={},n[c]=!0),"string"==typeof i&&(c=i,e[u]=i={},i[c]=!0)),"on"===u||"nativeOn"===u||"hook"===u)for(a in i)n[a]=o(n[a],i[a]);else if(Array.isArray(n))t[u]=n.concat(i);else if(Array.isArray(i))t[u]=[n].concat(i);else for(a in i)n[a]=i[a];else t[u]=e[u];return t},{}),[i]):i})])},computed:{attributes:function(){return{props:this.$attrs,on:this.$listeners}},highlights:function(){var t=this.$slots.default,e=void 0;return t?(t[0].tag,e=t[0].text):e="",ne(e,this.queries,this.caseSensitive)}}};const ie="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());const ue=document.head||document.getElementsByTagName("head")[0],ae={};var ce=oe;oe.__file="/Users/albertlucianto/Projects/vue-text-highlight/src/components/index.vue";var se=function(t,e,n,r,o,i,u,a,c,s){"function"==typeof u&&(c=a,a=u,u=!1);const l="function"==typeof n?n.options:n;let f;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):e&&(f=u?function(){e.call(this,s(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),f)if(l.functional){const t=l.render;l.render=function(e,n){return f.call(n),t(e,n)}}else{const t=l.beforeCreate;l.beforeCreate=t?[].concat(t,f):[f]}return n}({},function(t){t&&t("data-v-30128855_0",{source:".text__highlight {\n  background: #ffcc00;\n  border-radius: 3px;\n}\n\n/*# sourceMappingURL=index.vue.map */",map:{version:3,sources:["/Users/albertlucianto/Projects/vue-text-highlight/src/components/index.vue","index.vue"],names:[],mappings:"AAiFA;EACA,mBAAA;EACA,kBAAA;AAAA;;AC/EA,oCAAoC",file:"index.vue",sourcesContent:[null,".text__highlight {\n  background: #ffcc00;\n  border-radius: 3px; }\n\n/*# sourceMappingURL=index.vue.map */"]},media:void 0})},ce,void 0,void 0,void 0,function(t){return(t,e)=>(function(t,e){const n=ie?e.media||"default":t,r=ae[n]||(ae[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);let n=e.source;if(e.map&&(n+="\n/*# sourceURL="+e.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),ue.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const t=r.ids.size-1,e=document.createTextNode(n),o=r.element.childNodes;o[t]&&r.element.removeChild(o[t]),o.length?r.element.insertBefore(e,o[t]):r.element.appendChild(e)}}})(t,e)},void 0);e.default=se}}]);