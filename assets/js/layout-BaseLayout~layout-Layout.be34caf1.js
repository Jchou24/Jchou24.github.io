(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1006:function(t,e,n){"use strict";n.r(e);n(51),n(74),n(75),n(8),n(32),n(6),n(42);var i=n(15),a=n(73),r=n(106),s=n.n(r),o=n(5),c=n(585);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}var u={name:"BaseLayout",props:{root_class:{type:String,default:""},is_search_page:{type:Boolean}},data:function(){return{applied_root_class:"",is_previous_search_page:!1,current_screen_size:""}},components:{SearchMainContent:c.a},computed:{is_displayer_active:{get:function(){return this.$store.state.layout.is_displayer_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}},is_app_first_enter:{get:function(){return this.$store.state.layout.is_app_first_enter}},content_appear_active_class:{get:function(){return this.is_sidebar_active?"animated zoomIn delay-1s":"animated zoomIn delay-500ms"}},content_enter_active_class:{get:function(){return this.is_previous_search_page?"animated zoomIn delay-300ms":"animated zoomIn"}}},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach(function(e){Object(i.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({init:function(){},init_once:function(){var t=this;t.current_screen_size=Object(o.i)(),n.e(1).then(n.t.bind(null,1007,7)).then(function(e){e.default(document.querySelector("#app"),s()(function(){t.trigger_app_resize(),t.current_screen_size=Object(o.i)()},500))}),n.e(2).then(n.t.bind(null,500,7)).then(function(t){})},after_MainContentLayout_updated:function(){this.applied_root_class=this.root_class,this.set_layout({key:"is_app_first_enter",val:!1})},set_is_sidebar_active:function(){this.set_layout({key:"is_sidebar_active",val:"l"==Object(o.i)()||"xl"==Object(o.i)()})}},Object(a.c)("layout",["trigger_app_resize","set_layout","trigger_main_content_mounted"])),watch:{"$route.path":function(t,e){this.init(),this.is_previous_search_page="/search/"==e&&"/search/"!=t,"xs"==Object(o.i)()&&this.set_layout({key:"is_sidebar_active",val:!1})},"$store.state.layout.refresh_root_class":function(){this.after_MainContentLayout_updated()},is_search_page:function(){var t=this;setTimeout(function(){t.trigger_main_content_mounted()},500)},current_screen_size:function(t,e){t!=e&&this.set_is_sidebar_active()}},beforeMount:function(){this.set_is_sidebar_active()},mounted:function(){this.init_once(),this.init()}},_=(n(590),n(591),n(21)),f=Object(_.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.applied_root_class},[n("transition",{attrs:{appear:"","enter-active-class":"animated fadeInDown"}},[t._t("nav")],2),t._v(" "),n("div",{staticClass:"sidebar-content",class:{"active-display":t.is_sidebar_active}},[n("div",{staticClass:"view-container"},[n("transition",{attrs:{appear:"",mode:"out-in","appear-active-class":"animated fadeInLeft delay-700ms","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"}},[t._t("sidebar")],2)],1)]),t._v(" "),n("div",{key:"1",staticClass:"content view-container animated fadeIn",class:{"active-displayer":t.is_displayer_active,"disactive-displayer":!t.is_displayer_active}},[n("transition",{attrs:{mode:"out-in",appear:"",name:"content","appear-active-class":t.content_appear_active_class,"enter-active-class":t.content_enter_active_class,"leave-active-class":"animated fadeOut fastest"}},[t.is_search_page?t._e():t._t("content")],2),t._v(" "),n("transition",{attrs:{mode:"out-in",name:"search",appear:"","appear-active-class":t.content_appear_active_class,"enter-active-class":"animated zoomIn delay-500ms","leave-active-class":"animated fadeOutRight"}},[n("SearchMainContent",{directives:[{name:"show",rawName:"v-show",value:t.is_search_page,expression:"is_search_page"}]})],1)],1)],1)},[],!1,null,"5d955c92",null);e.default=f.exports},325:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n(107),a=n.n(i),r=(n(73),n(5));function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};t="xs"==Object(r.i)()?t-69:t,a()("html, body").stop(),a()("html, body").animate({scrollTop:t},function(t){var e=0;return e=0<=t&&t<500?500:500<=t&&t<1500?800:1500<=t&&t<2500?1300:2e3,"xs"==Object(r.i)()&&a()("div.sidebar").hasClass("active-display")&&(e=0),e}(Math.abs(t-e)),"easeOutExpo",n)}},346:function(t,e,n){"use strict";n(51),n(74),n(75),n(32),n(42),n(6),n(8);var i=n(15),a=n(107),r=n.n(a),s={name:"BackTopButton",components:{},props:{is_active:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{},mounted:function(){},updated:function(){},destroyed:function(){}},o=(n(587),n(21)),c=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{mode:"out-in","enter-active-class":"animated fadeInRight fast","leave-active-class":"animated fadeOutRight fast"}},[t.is_active?n("div",{staticClass:"back-top-button",on:{click:function(e){return t.$emit("click")}}},[n("i",{staticClass:"material-icons"},[t._v("expand_less")])]):t._e()])},[],!1,null,"890e1196",null).exports,l=n(73),u=n(106),_=n.n(u),f=n(471),h=n(472),d=n(5),v=n(325);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}var m={name:"MainContentLayout",props:{is_minimal_init:{type:Boolean,default:!1}},components:{BackTopButton:c},data:function(){return{scroller_setting:{sub_target:["pre","div.vuepress-flowchart"]},is_active_BackTopButton:!1}},computed:{is_nav_header_active:{get:function(){return this.$store.state.layout.is_nav_header_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}},is_app_first_enter:{get:function(){return this.$store.state.layout.is_app_first_enter}}},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach(function(e){Object(i.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({back_to_top:function(){Object(v.a)(0,this.last_scroll_top)},search_scroll_to_hash:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=this;return!!(e=e||n.$route.hash)&&(setTimeout(function(){var t=new f.a("div.main-content").fit();h.a.search_scroll_to_hash(n,e,t)},t),!0)},set_is_nav_header_active:function(t){"xs"==Object(d.i)()&&0==this.is_sidebar_active&&(t>this.last_scroll_top?this.set_layout({key:"is_nav_header_active",val:!1}):this.set_layout({key:"is_nav_header_active",val:!0}))},on_scroll:_()(function(t){var e=r()(window).scrollTop();this.set_is_nav_header_active(e),this.is_active_BackTopButton=e<this.last_scroll_top&&e>2*document.querySelector("html").clientHeight,this.last_scroll_top=e<=0?0:e},200),on_anchor_click:_()(function(t){t.preventDefault(),this.search_scroll_to_hash(0,t.target.hash)},50),init:function(){this.is_minimal_init||(this.set_layout({key:"is_nav_header_active",val:!0}),this.init_scroll()),this.minimal_init()},init_scroll:function(){var t=this;if(!t.$store.state.layout.is_onpopstate){var e=1500;t.is_app_first_enter&&(e=t.is_sidebar_active?2500:1500),t.search_scroll_to_hash(e)||setTimeout(function(){t.back_to_top()},300)}},minimal_init:function(){var t=this;t.recycle(),n.e(1).then(n.t.bind(null,1007,7)).then(function(e){e.default(t.$el,_()(function(){t.trigger_article_resize()},500))}),window.addEventListener("scroll",t.on_scroll),setTimeout(function(){document.querySelectorAll("a[href^='#']").forEach(function(e){return e.addEventListener("click",t.on_anchor_click)})},1e3),t.trigger_refresh_root_class(),t.trigger_main_content_mounted()},recycle:function(){var t=this;window.removeEventListener("scroll",t.on_scroll),document.querySelectorAll("a[href^='#']").forEach(function(e){return e.removeEventListener("click",t.on_anchor_click)})}},Object(l.c)("layout",["trigger_refresh_root_class","trigger_article_resize","trigger_main_content_mounted","set_layout"])),watch:{},mounted:function(){var t=this;t.$nextTick(function(){t.init()})},updated:function(){var t=this;t.$nextTick(function(){t.trigger_refresh_root_class()})},beforeDestroy:function(){this.recycle()}},y=(n(588),n(589),Object(o.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content",class:{sidebar_disactive:!t.is_sidebar_active}},[n("div",{directives:[{name:"scroller",rawName:"v-scroller.noself.sub_target",value:t.scroller_setting,expression:"scroller_setting",modifiers:{noself:!0,sub_target:!0}}],ref:"article",staticClass:"article",class:{sidebar_disactive:!t.is_sidebar_active}},[n("div",{staticClass:"hidden-nav-header"}),t._v(" "),t._t("default")],2),t._v(" "),n("BackTopButton",{attrs:{is_active:t.is_active_BackTopButton},on:{click:t.back_to_top}})],1)},[],!1,null,"8dfb703a",null));e.a=y.exports},379:function(t,e,n){},381:function(t,e,n){},382:function(t,e,n){},383:function(t,e,n){},384:function(t,e,n){},471:function(t,e,n){"use strict";n.d(e,"a",function(){return l});n(8);var i=n(9),a=(n(324),n(35),n(45),n(56),n(57),n(6),n(65)),r=n(66),s=n(107),o=n.n(s),c=n(5),l=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;Object(a.a)(this,t),this.element=document.querySelector(e),this.is_set_id=n||!1,this.header_tags=[];for(var r=1;r<=i;r++)this.header_tags.push("h"+r)}return Object(r.a)(t,[{key:"_is_h",value:function(t){if(t&&t.localName){var e=!0,n=!1,i=void 0;try{for(var a,r=this.header_tags[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var s=a.value;if(t.localName.includes(s))return!0}}catch(t){n=!0,i=t}finally{try{e||null==r.return||r.return()}finally{if(n)throw i}}}return!1}},{key:"_iter_child",value:function(t){var e=[];if(t){if(this._is_h(t)){var n=Object(c.k)(),a=t.getAttribute("id")?t.getAttribute("id"):n;this.is_set_id&&(a=n),t.id=a,this.is_set_id&&(t.id=n),e.push({id:a,tag:t.localName,level:parseInt(t.localName.slice(-1)),title:o.a.trim(t.textContent)})}var r=!0,s=!1,l=void 0;try{for(var u,_=t.childNodes[Symbol.iterator]();!(r=(u=_.next()).done);r=!0){var f=u.value;e.push.apply(e,Object(i.a)(this._iter_child(f)))}}catch(t){s=!0,l=t}finally{try{r||null==_.return||_.return()}finally{if(s)throw l}}}return e}},{key:"_count_chaptor",value:function(t){var e=[0,0,0,0,0,0],n=0;t.forEach(function(t){var i=t.level-1;e[i]+=1,n>i&&(e[n]=0),t.chaptor=[];for(var a=0;a<=i;a++)t.chaptor.push(e[a]);t.chaptor=t.chaptor.join(".")+".",n=i})}},{key:"fit",value:function(){var t=this._iter_child(this.element);return this._count_chaptor(t),t}}]),t}()},472:function(t,e,n){"use strict";n.d(e,"a",function(){return l});n(159),n(6),n(8),n(324),n(108),n(32);var i=n(65),a=n(66),r=n(15),s=n(107),o=n.n(s),c=n(325),l=function(){function t(){Object(i.a)(this,t)}return Object(a.a)(t,null,[{key:"parse",value:function(e,n){var i=e.query[n];return i?i.split(t.separator).filter(function(t){return t.length}):[]}},{key:"get_tag",value:function(e){return t.parse(e,"tag")}},{key:"get_category",value:function(e){return t.parse(e,"category")}},{key:"search_scroll_to_hash",value:function(t,e,n){if(e){var i=o.a.trim(decodeURI(e)),a=!1;i&&n&&n.forEach(function(t){"#"+o.a.trim(t.title)==i&&(i=t.id,a=!0)}),this.scroll_to_hash(t,i,a)}}},{key:"scroll_to_hash",value:function(t,e,n){if(e){e=e.startsWith("#")?e.substring(1):e;var i=document.getElementById(e);if(i){var a=o()("html, body").scrollTop(),r=i.getBoundingClientRect().top+a;try{console.log("container_top",a),console.log("target.getBoundingClientRect().top",i.getBoundingClientRect().top),console.log("$(hash).scrollTop()",o()("#"+e).scrollTop())}catch(t){}r=0==r?0:r-(n?64:73),Object(c.a)(r,a,function(){t.$store.commit("layout/set_layout",{is_nav_header_active:!0})})}}}}]),t}();Object(r.a)(l,"separator",",")},585:function(t,e,n){"use strict";var i={name:"SearchMainContent",components:{MainContentLayout:n(346).a},props:{},data:function(){return{}},computed:{},methods:{},beforeMount:function(){this.$options.components.Search=function(){return Promise.all([n.e(0),n.e(2),n.e(5),n.e(72)]).then(n.bind(null,1020))}},mounted:function(){},updated:function(){},destroyed:function(){}},a=n(21),r=Object(a.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("MainContentLayout",{staticClass:"search",attrs:{is_minimal_init:!0}},[e("Search")],1)},[],!1,null,"334850e7",null);e.a=r.exports},587:function(t,e,n){"use strict";var i=n(379);n.n(i).a},588:function(t,e,n){"use strict";var i=n(381);n.n(i).a},589:function(t,e,n){"use strict";var i=n(382);n.n(i).a},590:function(t,e,n){"use strict";var i=n(383);n.n(i).a},591:function(t,e,n){"use strict";var i=n(384);n.n(i).a}}]);