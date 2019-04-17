(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{439:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var s={name:"BProgress",components:{BProgressBar:r(440).default},provide:function(){return{progress:this}},props:{variant:{type:String,default:null},striped:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},height:{type:String,default:null},precision:{type:Number,default:0},showProgress:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},max:{type:Number,default:100},value:{type:Number,default:0}},computed:{progressHeight:function(){return{height:this.height||null}}},render:function(e){var t=this.$slots.default;return t||(t=e("b-progress-bar",{props:{value:this.value,max:this.max,precision:this.precision,variant:this.variant,animated:this.animated,striped:this.striped,showProgress:this.showProgress,showValue:this.showValue}})),e("div",{class:["progress"],style:this.progressHeight},[t])}};t.default=s},440:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var s=r(441),i={name:"BProgressBar",inject:{progress:{from:"progress",default:function(){return{}}}},props:{value:{type:Number,default:0},label:{type:String,default:null},labelHtml:{type:String},max:{type:Number,default:null},precision:{type:Number,default:null},variant:{type:String,default:null},striped:{type:Boolean,default:null},animated:{type:Boolean,default:null},showProgress:{type:Boolean,default:null},showValue:{type:Boolean,default:null}},computed:{progressBarClasses:function(){return[this.computedVariant?"bg-".concat(this.computedVariant):"",this.computedStriped||this.computedAnimated?"progress-bar-striped":"",this.computedAnimated?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.value/this.computedMax*100+"%"}},computedProgress:function(){var e=Math.pow(10,this.computedPrecision);return Math.round(100*e*this.value/this.computedMax)/e},computedMax:function(){return"number"==typeof this.max?this.max:this.progress.max||100},computedVariant:function(){return this.variant||this.progress.variant},computedPrecision:function(){return"number"==typeof this.precision?this.precision:this.progress.precision||0},computedStriped:function(){return"boolean"==typeof this.striped?this.striped:this.progress.striped||!1},computedAnimated:function(){return"boolean"==typeof this.animated?this.animated:this.progress.animated||!1},computedShowProgress:function(){return"boolean"==typeof this.showProgress?this.showProgress:this.progress.showProgress||!1},computedShowValue:function(){return"boolean"==typeof this.showValue?this.showValue:this.progress.showValue||!1}},render:function(e){var t=e(!1);return this.$slots.default?t=this.$slots.default:this.label||this.labelHtml?t=e("span",{domProps:(0,s.htmlOrText)(this.labelHtml,this.label)}):this.computedShowProgress?t=this.computedProgress.toFixed(this.computedPrecision):this.computedShowValue&&(t=this.value.toFixed(this.computedPrecision)),e("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":this.computedMax.toString(),"aria-valuenow":this.value.toFixed(this.computedPrecision)}},[t])}};t.default=i},441:function(e,t,r){"use strict";t.__esModule=!0,t.stripTags=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(s,"")},t.htmlOrText=function(e,t){return e?{innerHTML:e}:{textContent:t}};var s=/(<([^>]+)>)/gi},442:function(e,t,r){},964:function(e,t,r){"use strict";var s=r(442);r.n(s).a},984:function(e,t,r){"use strict";r.r(t);r(7),r(10);var s=r(12),i=r(439),a=r.n(i),o=r(67),n=r(97),u=r.n(n),l=r(3),c={name:"ReadingProgress",components:{BProgress:a.a},props:{is_category_page:{type:Boolean,required:!0},is_tag_page:{type:Boolean,required:!0},is_archive_page:{type:Boolean,required:!0},is_search_page:{type:Boolean,required:!0},is_index_page:{type:Boolean,required:!0}},data:function(){return{value:0,scroller_target:"div.article"}},computed:Object(s.a)({page_type:{get:function(){return this.is_index_page?"index":this.is_category_page?"category":this.is_tag_page?"tag":this.is_archive_page?"archive":this.is_search_page?"search":"post"}},active:{get:function(){return this.get_screen_resize,this.is_category_page||this.is_tag_page||this.is_index_page||this.is_archive_page?"xs"==Object(l.h)()&&!this.is_sidebar_active:"xs"!=Object(l.h)()||!this.is_sidebar_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}}},Object(o.b)("layout",["get_screen_resize"])),methods:{init:function(){var e=this;e.recycle(),e.scroller_target="search"==e.page_type?"div.main-content.search div.article":"div.article",document.querySelector(e.scroller_target).addEventListener("scroll",e.count_value),r.e(1).then(r.t.bind(null,967,7)).then(function(t){t.default(document.querySelector(e.scroller_target),u()(e.count_value,1))})},count_value_core:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=document.querySelector(this.scroller_target).scrollTop,s=document.querySelector(this.scroller_target).clientHeight,i=0,a=0;t.forEach(function(e){var t=document.querySelector(e);t&&(i+=t.clientHeight)}),e.forEach(function(e){var t=document.querySelector(e);t&&(a+=t.clientHeight)}),this.value=r<=i?0:r+s>=i+a?100:(r+s-i)/(i+a)*100},count_value:function(){var e=[],t=[];switch(this.page_type){case"index":e=["div.article-waterfall","span.search-result"];break;case"category":e=["div.category-viewer"];break;case"tag":e=["div.category-viewer","div.tag-manager"];break;case"archive":e=["div.archive-article-viewer"];break;case"search":e=["span.search-result"];break;default:e=["article.article-content"],t=["article.article-header"]}this.count_value_core(e,t)},recycle:function(){var e=document.querySelector(this.scroller_target);e&&e.removeEventListener("scroll",this.count_value)}},watch:{"$store.state.layout.main_content_mounted":function(){this.init()}},mounted:function(){this.init()},beforeDestroy:function(){this.recycle()}},h=(r(964),r(9)),p=Object(h.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return this.active?t("BProgress",{staticClass:"reading-progress",attrs:{value:this.value,variant:"secondary"}}):this._e()},[],!1,null,null,null);t.default=p.exports}}]);