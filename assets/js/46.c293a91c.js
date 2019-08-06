(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{454:function(t,e,s){"use strict";e.__esModule=!0,e.default=void 0;var i={name:"BProgress",components:{BProgressBar:s(455).default},provide:function(){return{progress:this}},props:{variant:{type:String,default:null},striped:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},height:{type:String,default:null},precision:{type:Number,default:0},showProgress:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},max:{type:Number,default:100},value:{type:Number,default:0}},computed:{progressHeight:function(){return{height:this.height||null}}},render:function(t){var e=this.$slots.default;return e||(e=t("b-progress-bar",{props:{value:this.value,max:this.max,precision:this.precision,variant:this.variant,animated:this.animated,striped:this.striped,showProgress:this.showProgress,showValue:this.showValue}})),t("div",{class:["progress"],style:this.progressHeight},[e])}};e.default=i},455:function(t,e,s){"use strict";e.__esModule=!0,e.default=void 0;var i=s(456),o={name:"BProgressBar",inject:{progress:{from:"progress",default:function(){return{}}}},props:{value:{type:Number,default:0},label:{type:String,default:null},labelHtml:{type:String},max:{type:Number,default:null},precision:{type:Number,default:null},variant:{type:String,default:null},striped:{type:Boolean,default:null},animated:{type:Boolean,default:null},showProgress:{type:Boolean,default:null},showValue:{type:Boolean,default:null}},computed:{progressBarClasses:function(){return[this.computedVariant?"bg-".concat(this.computedVariant):"",this.computedStriped||this.computedAnimated?"progress-bar-striped":"",this.computedAnimated?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.value/this.computedMax*100+"%"}},computedProgress:function(){var t=Math.pow(10,this.computedPrecision);return Math.round(100*t*this.value/this.computedMax)/t},computedMax:function(){return"number"==typeof this.max?this.max:this.progress.max||100},computedVariant:function(){return this.variant||this.progress.variant},computedPrecision:function(){return"number"==typeof this.precision?this.precision:this.progress.precision||0},computedStriped:function(){return"boolean"==typeof this.striped?this.striped:this.progress.striped||!1},computedAnimated:function(){return"boolean"==typeof this.animated?this.animated:this.progress.animated||!1},computedShowProgress:function(){return"boolean"==typeof this.showProgress?this.showProgress:this.progress.showProgress||!1},computedShowValue:function(){return"boolean"==typeof this.showValue?this.showValue:this.progress.showValue||!1}},render:function(t){var e=t(!1);return this.$slots.default?e=this.$slots.default:this.label||this.labelHtml?e=t("span",{domProps:(0,i.htmlOrText)(this.labelHtml,this.label)}):this.computedShowProgress?e=this.computedProgress.toFixed(this.computedPrecision):this.computedShowValue&&(e=this.value.toFixed(this.computedPrecision)),t("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":this.computedMax.toString(),"aria-valuenow":this.value.toFixed(this.computedPrecision)}},[e])}};e.default=o},456:function(t,e,s){"use strict";e.__esModule=!0,e.stripTags=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(i,"")},e.htmlOrText=function(t,e){return t?{innerHTML:t}:{textContent:e}};var i=/(<([^>]+)>)/gi},458:function(t,e,s){},972:function(t,e,s){"use strict";var i=s(458);s.n(i).a},997:function(t,e,s){"use strict";s.r(e);var i=s(454),o=s.n(i),n=s(5),r=s(106),a=s.n(r),u={name:"CountdownTimer",components:{BProgress:o.a},props:{is_show:{default:!0},max_countdown_time:{default:15e3}},data:function(){return{is_active_countdown:this.determine_is_display(),is_active_countdown_previous:!0,countdown_time:this.max_countdown_time,countdown_timer:null,is_restart:!1,is_display:this.determine_is_display(),is_first_start:!0}},watch:{is_show:function(t,e){var s=this.is_display;this.is_display=this.is_display_screen_size()&&t,1==s&&0==this.is_display&&(this.is_active_countdown_previous=this.is_active_countdown,this.is_active_countdown=!1),0==s&&1==this.is_display&&(this.is_active_countdown=this.is_active_countdown_previous)},is_active_countdown:function(t,e){t!=e&&1==t?this.start():t!=e&&0==t&&this.stop()},"$store.state.layout.pause_waterfall":function(){this.stop()},"$store.state.layout.start_waterfall":function(){this.start()}},methods:{determine_is_display:function(){return this.is_display_screen_size()&&this.is_show},is_display_screen_size:function(){return"xs"!=Object(n.h)()},get_countdown_percatage:function(){return this.countdown_time/this.max_countdown_time*100},start:function(){var t=this;t.clear_countdown_timer(),t.is_active_countdown=!0,t.countdown_timer=setInterval(function(){0==t.is_show&&t.stop(),t.countdown_time==t.max_countdown_time&&(t.is_restart=!1),t.countdown_time-=100,t.countdown_time<=0&&(t.$emit("refresh"),t.is_restart=!0,t.countdown_time=t.max_countdown_time)},100)},stop:function(){this.clear_countdown_timer(),this.is_active_countdown=!1},clear_countdown_timer:function(){try{clearInterval(this.countdown_timer),this.countdown_timer=null}catch(t){}},init:function(){this.recycle(),window.addEventListener("resize",this.on_resize),this.is_display_screen_size()&&this.is_first_start&&this.start(),this.is_first_start=!1},on_resize:a()(function(){var t=this.is_display;this.is_display=this.determine_is_display(),1==t&&0==this.is_display&&(this.is_active_countdown_previous=this.is_active_countdown,this.is_active_countdown=!1),0==t&&1==this.is_display&&(this.is_active_countdown=this.is_active_countdown_previous)},300),recycle:function(){window.removeEventListener("resize",this.on_resize),this.stop()}},mounted:function(){this.init()},beforeDestroy:function(){this.recycle()}},c=(s(972),s(21)),l=Object(c.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return this.is_display?e("BProgress",{staticClass:"countdown-timer",class:{restart:this.is_restart},staticStyle:{display:"flex"},attrs:{value:this.get_countdown_percatage(),variant:"danger"}}):this._e()},[],!1,null,"78f2ead7",null);e.default=l.exports}}]);