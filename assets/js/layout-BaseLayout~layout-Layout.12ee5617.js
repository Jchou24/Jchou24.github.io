(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{315:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var i=a(98),n=a.n(i),s=(a(67),a(3));function r(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},i="xs"==Object(s.h)()?n()("nav.nav-header").height()+10:n()("div.article").offset().top;n()("div.article").stop(),n()("div.article").animate({scrollTop:t-i},function(t){var e=0;return e=0<=t&&t<500?500:500<=t&&t<1500?800:1500<=t&&t<2500?1300:2e3,"xs"==Object(s.h)()&&n()("div.sidebar").hasClass("active-display")&&(e=0),e}(Math.abs(t-e)),"easeOutExpo",a)}},334:function(t,e,a){"use strict";a(7),a(10);var i=a(12),n={name:"BackTopButton",components:{},props:{is_active:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{},mounted:function(){},updated:function(){},destroyed:function(){}},s=(a(561),a(9)),r=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{mode:"out-in","enter-active-class":"animated fadeInRight fast","leave-active-class":"animated fadeOutRight fast"}},[t.is_active?a("div",{staticClass:"back-top-button",on:{click:function(e){return t.$emit("click")}}},[a("i",{staticClass:"material-icons"},[t._v("expand_less")])]):t._e()])},[],!1,null,"cc2429a0",null).exports,o=a(67),c=a(97),l=a.n(c),u=a(449),_=a(450),h=a(3),d=a(315),f=a(451),v={name:"MainContentLayout",props:{is_minimal_init:{type:Boolean,default:!1}},components:{BackTopButton:r},data:function(){return{scroller_setting:{sub_target:["pre","div.vuepress-flowchart"]},is_active_BackTopButton:!1}},computed:{is_nav_header_active:{get:function(){return this.$store.state.layout.is_nav_header_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}},is_app_first_enter:{get:function(){return this.$store.state.layout.is_app_first_enter}}},methods:Object(i.a)({back_to_top:function(){Object(d.a)(0,this.last_scroll_top)},search_scroll_to_hash:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,a=this;return!!(e=e||a.$route.hash)&&(setTimeout(function(){var t=new u.a("div.main-content").fit();_.a.search_scroll_to_hash(a,e,t)},t),!0)},set_is_nav_header_active:function(t){"xs"==Object(h.h)()&&0==this.is_sidebar_active&&(t>this.last_scroll_top?(this.set_layout({key:"is_nav_header_active",val:!1}),f()):(this.set_layout({key:"is_nav_header_active",val:!0}),f()))},set_scroll_position:function(){if(this.$store.state.layout.is_onpopstate){this.set_layout({key:"is_onpopstate",val:!1});var t=this.$store.state.layout.scrollBehavior[this.$route.path];t&&(document.querySelector("div.article").scrollTop=t.scrollTop)}},on_scroll:l()(function(t){var e=t.target.scrollTop;this.set_is_nav_header_active(e),this.is_active_BackTopButton=e<this.last_scroll_top&&e>2*document.querySelector("div.article").clientHeight,this.last_scroll_top=e<=0?0:e},200),on_anchor_click:function(t){this.search_scroll_to_hash(0,t.target.hash)},init:function(){this.is_minimal_init||(this.set_layout({key:"is_nav_header_active",val:!0}),this.init_scroll()),this.minimal_init()},init_scroll:function(){var t=this;if(t.$store.state.layout.is_onpopstate)t.set_scroll_position();else{var e=1500;t.is_app_first_enter&&(e=t.is_sidebar_active?2e3:1500),t.search_scroll_to_hash(e)||setTimeout(function(){t.back_to_top()},300)}},minimal_init:function(){var t=this;t.recycle(),a.e(1).then(a.t.bind(null,967,7)).then(function(e){e.default(t.$el,l()(function(){t.trigger_article_resize()},500))}),document.querySelectorAll("div.article").forEach(function(e){return e.addEventListener("scroll",t.on_scroll)}),setTimeout(function(){document.querySelectorAll("a[href^='#']").forEach(function(e){return e.addEventListener("click",t.on_anchor_click)})},1e3),t.trigger_refresh_root_class(),t.trigger_main_content_mounted()},recycle:function(){var t=this;document.querySelectorAll("div.article").forEach(function(e){return e.removeEventListener("scroll",t.on_scroll)}),document.querySelectorAll("a[href^='#']").forEach(function(e){return e.removeEventListener("click",t.on_anchor_click)})}},Object(o.c)("layout",["trigger_refresh_root_class","trigger_article_resize","trigger_main_content_mounted","set_layout"])),watch:{},mounted:function(){var t=this;t.$nextTick(function(){t.init()})},updated:function(){var t=this;t.$nextTick(function(){t.trigger_refresh_root_class()})},beforeDestroy:function(){this.recycle()}},p=(a(562),a(563),Object(s.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-content"},[e("div",{directives:[{name:"scroller",rawName:"v-scroller.noself.sub_target",value:this.scroller_setting,expression:"scroller_setting",modifiers:{noself:!0,sub_target:!0}}],ref:"article",staticClass:"article",class:{sidebar_disactive:!this.is_sidebar_active}},[e("div",{staticClass:"hidden-nav-header"}),this._v(" "),this._t("default")],2),this._v(" "),e("BackTopButton",{attrs:{is_active:this.is_active_BackTopButton},on:{click:this.back_to_top}})],1)},[],!1,null,"727b83fa",null));e.a=p.exports},368:function(t,e,a){},370:function(t,e,a){},371:function(t,e,a){},372:function(t,e,a){},373:function(t,e,a){},449:function(t,e,a){"use strict";a.d(e,"a",function(){return d});a(7),a(10);var i=a(6),n=(a(314),a(105)),s=a.n(n),r=(a(32),a(40),a(20)),o=a.n(r),c=a(61),l=a(62),u=a(98),_=a.n(u),h=a(3),d=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;Object(c.a)(this,t),this.element=document.querySelector(e),this.is_set_id=a||!1,this.header_tags=[];for(var n=1;n<=i;n++)this.header_tags.push("h"+n)}return Object(l.a)(t,[{key:"_is_h",value:function(t){if(t&&t.localName){var e=!0,a=!1,i=void 0;try{for(var n,s=o()(this.header_tags);!(e=(n=s.next()).done);e=!0){var r=n.value;if(t.localName.includes(r))return!0}}catch(t){a=!0,i=t}finally{try{e||null==s.return||s.return()}finally{if(a)throw i}}}return!1}},{key:"_iter_child",value:function(t){var e=[];if(t){if(this._is_h(t)){var a=Object(h.j)(),n=t.getAttribute("id")?t.getAttribute("id"):a;this.is_set_id&&(n=a),t.id=n,this.is_set_id&&(t.id=a),e.push({id:n,tag:t.localName,level:s()(t.localName.slice(-1)),title:_.a.trim(t.textContent)})}var r=!0,c=!1,l=void 0;try{for(var u,d=o()(t.childNodes);!(r=(u=d.next()).done);r=!0){var f=u.value;e.push.apply(e,Object(i.a)(this._iter_child(f)))}}catch(t){c=!0,l=t}finally{try{r||null==d.return||d.return()}finally{if(c)throw l}}}return e}},{key:"_count_chaptor",value:function(t){var e=[0,0,0,0,0,0],a=0;t.forEach(function(t){var i=t.level-1;e[i]+=1,a>i&&(e[a]=0),t.chaptor=[];for(var n=0;n<=i;n++)t.chaptor.push(e[n]);t.chaptor=t.chaptor.join(".")+".",a=i})}},{key:"fit",value:function(){var t=this._iter_child(this.element);return this._count_chaptor(t),t}}]),t}()},450:function(t,e,a){"use strict";a.d(e,"a",function(){return l});a(7),a(10),a(314),a(147),a(47);var i=a(61),n=a(62),s=a(35),r=a(98),o=a.n(r),c=a(315),l=function(){function t(){Object(i.a)(this,t)}return Object(n.a)(t,null,[{key:"parse",value:function(e,a){var i=e.query[a];return i?i.split(t.separator).filter(function(t){return t.length}):[]}},{key:"get_tag",value:function(e){return t.parse(e,"tag")}},{key:"get_category",value:function(e){return t.parse(e,"category")}},{key:"search_scroll_to_hash",value:function(t,e,a){if(e){var i=o.a.trim(decodeURI(e));if(i&&a&&(a.forEach(function(t){"#"+o.a.trim(t.title)==i&&(i="#"+t.id)}),o()(i).length>0)){var n=o()("article.article-content").position().top-document.querySelector("article.article-content").offsetTop;Object(c.a)(o()(i).offset().top-n,o()("div.article").scrollTop(),function(){t.$store.commit("layout/set_layout",{is_nav_header_active:!0})})}}}}]),t}();Object(s.a)(l,"separator",",")},558:function(t,e,a){"use strict";var i={name:"SearchMainContent",components:{MainContentLayout:a(334).a},props:{},data:function(){return{}},computed:{},methods:{},beforeMount:function(){this.$options.components.Search=function(){return Promise.all([a.e(0),a.e(2),a.e(5),a.e(40)]).then(a.bind(null,979))}},mounted:function(){},updated:function(){},destroyed:function(){}},n=a(9),s=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("MainContentLayout",{staticClass:"search",attrs:{is_minimal_init:!0}},[e("Search")],1)},[],!1,null,"334850e7",null);e.a=s.exports},561:function(t,e,a){"use strict";var i=a(368);a.n(i).a},562:function(t,e,a){"use strict";var i=a(370);a.n(i).a},563:function(t,e,a){"use strict";var i=a(371);a.n(i).a},564:function(t,e,a){"use strict";var i=a(372);a.n(i).a},565:function(t,e,a){"use strict";var i=a(373);a.n(i).a},966:function(t,e,a){"use strict";a.r(e);var i=a(12),n=a(67),s=a(97),r=a.n(s),o=a(3),c=a(558),l={name:"BaseLayout",props:{root_class:{type:String,default:""},is_search_page:{type:Boolean}},data:function(){return{applied_root_class:"",is_previous_search_page:!1,current_screen_size:""}},components:{SearchMainContent:c.a},computed:{is_displayer_active:{get:function(){return this.$store.state.layout.is_displayer_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}},is_app_first_enter:{get:function(){return this.$store.state.layout.is_app_first_enter}},content_appear_active_class:{get:function(){return this.is_sidebar_active?"animated zoomIn delay-1s":"animated zoomIn delay-500ms"}},content_enter_active_class:{get:function(){return this.is_previous_search_page?"animated zoomIn delay-300ms":"animated zoomIn"}}},methods:Object(i.a)({init:function(){},init_once:function(){var t=this;t.current_screen_size=Object(o.h)(),a.e(1).then(a.t.bind(null,967,7)).then(function(e){e.default(document.querySelector("#app"),r()(function(){t.trigger_app_resize(),t.current_screen_size=Object(o.h)()},500))}),a.e(2).then(a.t.bind(null,475,7)).then(function(t){})},after_MainContentLayout_updated:function(){this.applied_root_class=this.root_class,this.set_layout({key:"is_app_first_enter",val:!1})},set_is_sidebar_active:function(){this.set_layout({key:"is_sidebar_active",val:"l"==Object(o.h)()||"xl"==Object(o.h)()})}},Object(n.c)("layout",["trigger_app_resize","set_layout","trigger_main_content_mounted"])),watch:{"$route.path":function(t,e){this.init(),this.is_previous_search_page="/search/"==e&&"/search/"!=t,"xs"==Object(o.h)()&&this.set_layout({key:"is_sidebar_active",val:!1})},"$store.state.layout.refresh_root_class":function(){this.after_MainContentLayout_updated()},is_search_page:function(){var t=this;setTimeout(function(){t.trigger_main_content_mounted()},500)},current_screen_size:function(t,e){t!=e&&this.set_is_sidebar_active()}},beforeMount:function(){this.set_is_sidebar_active()},mounted:function(){this.init_once(),this.init()}},u=(a(564),a(565),a(9)),_=Object(u.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.applied_root_class},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInDown"}},[t._t("nav")],2),t._v(" "),a("div",{key:"1",staticClass:"content animated fadeIn",class:{"active-displayer":t.is_displayer_active,"disactive-displayer":!t.is_displayer_active}},[a("transition",{attrs:{appear:"",mode:"out-in","appear-active-class":"animated fadeInLeft delay-700ms","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"}},[t._t("sidebar")],2),t._v(" "),a("transition",{attrs:{mode:"out-in",appear:"",name:"content","appear-active-class":t.content_appear_active_class,"enter-active-class":t.content_enter_active_class,"leave-active-class":"animated fadeOut fastest"}},[t.is_search_page?t._e():t._t("content")],2),t._v(" "),a("transition",{attrs:{mode:"out-in",name:"search",appear:"","appear-active-class":t.content_appear_active_class,"enter-active-class":"animated zoomIn delay-500ms","leave-active-class":"animated fadeOutRight"}},[a("SearchMainContent",{directives:[{name:"show",rawName:"v-show",value:t.is_search_page,expression:"is_search_page"}]})],1)],1)],1)},[],!1,null,"e9ac11a2",null);e.default=_.exports}}]);