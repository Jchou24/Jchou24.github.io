(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{454:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var s={name:"BProgress",components:{BProgressBar:r(455).default},provide:function(){return{progress:this}},props:{variant:{type:String,default:null},striped:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},height:{type:String,default:null},precision:{type:Number,default:0},showProgress:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},max:{type:Number,default:100},value:{type:Number,default:0}},computed:{progressHeight:function(){return{height:this.height||null}}},render:function(e){var t=this.$slots.default;return t||(t=e("b-progress-bar",{props:{value:this.value,max:this.max,precision:this.precision,variant:this.variant,animated:this.animated,striped:this.striped,showProgress:this.showProgress,showValue:this.showValue}})),e("div",{class:["progress"],style:this.progressHeight},[t])}};t.default=s},455:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var s=r(456),i={name:"BProgressBar",inject:{progress:{from:"progress",default:function(){return{}}}},props:{value:{type:Number,default:0},label:{type:String,default:null},labelHtml:{type:String},max:{type:Number,default:null},precision:{type:Number,default:null},variant:{type:String,default:null},striped:{type:Boolean,default:null},animated:{type:Boolean,default:null},showProgress:{type:Boolean,default:null},showValue:{type:Boolean,default:null}},computed:{progressBarClasses:function(){return[this.computedVariant?"bg-".concat(this.computedVariant):"",this.computedStriped||this.computedAnimated?"progress-bar-striped":"",this.computedAnimated?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.value/this.computedMax*100+"%"}},computedProgress:function(){var e=Math.pow(10,this.computedPrecision);return Math.round(100*e*this.value/this.computedMax)/e},computedMax:function(){return"number"==typeof this.max?this.max:this.progress.max||100},computedVariant:function(){return this.variant||this.progress.variant},computedPrecision:function(){return"number"==typeof this.precision?this.precision:this.progress.precision||0},computedStriped:function(){return"boolean"==typeof this.striped?this.striped:this.progress.striped||!1},computedAnimated:function(){return"boolean"==typeof this.animated?this.animated:this.progress.animated||!1},computedShowProgress:function(){return"boolean"==typeof this.showProgress?this.showProgress:this.progress.showProgress||!1},computedShowValue:function(){return"boolean"==typeof this.showValue?this.showValue:this.progress.showValue||!1}},render:function(e){var t=e(!1);return this.$slots.default?t=this.$slots.default:this.label||this.labelHtml?t=e("span",{domProps:(0,s.htmlOrText)(this.labelHtml,this.label)}):this.computedShowProgress?t=this.computedProgress.toFixed(this.computedPrecision):this.computedShowValue&&(t=this.value.toFixed(this.computedPrecision)),e("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":this.computedMax.toString(),"aria-valuenow":this.value.toFixed(this.computedPrecision)}},[t])}};t.default=i},456:function(e,t,r){"use strict";t.__esModule=!0,t.stripTags=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(s,"")},t.htmlOrText=function(e,t){return e?{innerHTML:e}:{textContent:t}};var s=/(<([^>]+)>)/gi},457:function(e,t,r){},971:function(e,t,r){"use strict";var s=r(457);r.n(s).a},998:function(e,t,r){"use strict";r.r(t);r(51),r(74),r(75),r(32),r(42),r(6),r(8);var s=r(15),i=r(454),a=r.n(i),o=r(73),n=r(106),u=r.n(n),c=r(5);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}var p={name:"ReadingProgress",components:{BProgress:a.a},props:{is_category_page:{type:Boolean,required:!0},is_tag_page:{type:Boolean,required:!0},is_archive_page:{type:Boolean,required:!0},is_search_page:{type:Boolean,required:!0},is_index_page:{type:Boolean,required:!0}},data:function(){return{value:0,scroller_target:"html"}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({page_type:{get:function(){return this.is_index_page?"index":this.is_category_page?"category":this.is_tag_page?"tag":this.is_archive_page?"archive":this.is_search_page?"search":"post"}},active:{get:function(){return this.get_screen_resize,this.is_category_page||this.is_tag_page||this.is_index_page||this.is_archive_page?"xs"==Object(c.h)()&&!this.is_sidebar_active:"xs"!=Object(c.h)()||!this.is_sidebar_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}}},Object(o.b)("layout",["get_screen_resize"])),methods:{init:function(){var e=this;e.recycle(),window.addEventListener("scroll",e.count_value),r.e(1).then(r.t.bind(null,974,7)).then(function(t){t.default(document.querySelector(e.scroller_target),u()(e.count_value,1))})},count_value_core:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this,r=0,s=0,i=document.querySelector("html").clientHeight;function a(e){var t=e.getBoundingClientRect().top-69;if(t>=0)return 0;var r=Math.abs(t),s=e.clientHeight;return r>=s?s:r}e.forEach(function(e){var t=document.querySelector(e);t&&(r+=a(t),s+=t.clientHeight)}),t.value=i+r>=s?100:r/s*100},count_value:function(){var e=[];switch(this.page_type){case"index":e=["div.article-waterfall","span.search-result"];break;case"category":e=["div.category-viewer"];break;case"tag":e=["div.category-viewer","div.tag-manager"];break;case"archive":e=["div.archive-article-viewer"];break;case"search":e=["span.search-result"];break;default:e=["article.article-content"]}this.count_value_core(e)},recycle:function(){window.removeEventListener("scroll",this.count_value)}},watch:{"$store.state.layout.main_content_mounted":function(){this.init()}},mounted:function(){this.init()},beforeDestroy:function(){this.recycle()}},h=(r(971),r(21)),d=Object(h.a)(p,function(){var e=this.$createElement,t=this._self._c||e;return this.active?t("BProgress",{staticClass:"reading-progress",attrs:{value:this.value,variant:"secondary"}}):this._e()},[],!1,null,null,null);t.default=d.exports}}]);